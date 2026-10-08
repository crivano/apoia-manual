// Monta o HTML completo do PDF: capa, sumário clicável e um capítulo por
// página do SUMMARY (em ordem), com âncoras internas p{n} / p{n}-{slug} — os
// links relativos do manual e o sumário navegam dentro do PDF. Imagens
// (chaves "asset:") e embeds de vídeo (thumbnail + QR) são resolvidos para
// data URI, deixando o PDF self-contained.
import fs from 'node:fs'
import path from 'node:path'
import { extractHeadingSlugs } from './anchors.mjs'
import { splitFences, splitInlineCode, transformEmbeds, youtubeId } from './gitbook.mjs'
import { qrDataUri, resolveAssetKey, urlDataUri, youtubeThumbDataUri } from './assets.mjs'
import { renderPage } from './render.mjs'
import { flatten, parseSummary } from './summary.mjs'

const escapeHtml = (value) => value.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

const GITBOOK_URL = 'https://trf2.gitbook.io/apoia'

// Logos oficiais da capa (mesma largura, ~1/3 da página). Baixadas uma única
// vez para assets-cache/; testes injetam data URIs via opts.coverLogos.
const COVER_LOGO_URLS = [
    'https://apoia.pdpj.jus.br/apoia-logo.jpeg',
    'https://apoia.pdpj.jus.br/apoia-logo-horiz-cor-fundo-claro.png',
]

export function loadManual(manualDir) {
    const summaryMd = fs.readFileSync(path.join(manualDir, 'SUMMARY.md'), 'utf-8')
    const tree = parseSummary(summaryMd)
    const pages = flatten(tree)
    const missing = pages.filter(page => !fs.existsSync(path.join(manualDir, page.file)))
    if (missing.length) {
        throw new Error(`Páginas do SUMMARY ausentes em ${manualDir}: ${missing.map(p => p.file).join(', ')}`)
    }
    return { tree, pages }
}

export async function buildHtml(manualDir, opts = {}) {
    const { tree, pages } = loadManual(manualDir)
    const pageIndex = new Map(pages.map((page, i) => [page.file, i]))
    // O alvo do link só ganha âncora se existir: arquivo no SUMMARY e, quando
    // há #ancora, slug presente nos headings da página alvo (extraídos do
    // markdown — mesma regra validada nos testes de integridade).
    const headingSlugsByFile = new Map(pages.map(page => [
        page.file,
        extractHeadingSlugs(fs.readFileSync(path.join(manualDir, page.file), 'utf-8')),
    ]))
    const resolveTarget = (file, anchor) => {
        const index = pageIndex.get(file)
        if (index === undefined) return null
        if (!anchor) return `#p${index}`
        const slug = anchor.slice(1)
        if (!headingSlugsByFile.get(file).includes(slug)) return null
        return `#p${index}-${slug}`
    }

    const chapters = []
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i]
        const md = fs.readFileSync(path.join(manualDir, page.file), 'utf-8')
        const { html, embeds } = renderPage(md, page.file, { headingPrefix: `p${i}-`, resolveTarget })
        let chapterHtml = await resolveEmbeds(html, embeds)
        chapterHtml = await resolveImages(chapterHtml, manualDir)
        chapters.push({ id: `p${i}`, title: page.title, html: chapterHtml })
        process.stdout.write(`renderizado ${i + 1}/${pages.length}: ${page.file}\n`)
    }

    const coverLogos = opts.coverLogos ?? await Promise.all(COVER_LOGO_URLS.map(urlDataUri))
    return shell({ tree, chapters, generatedAt: new Date(), coverLogos })
}

// Tokens @@APOIA-EMBED-n@@ -> card de vídeo (thumbnail 16:9 em largura plena
// com botão de play sobreposto, rodapé com QR do link + "Assistir no
// YouTube") para YouTube, link simples para qualquer outra URL.
async function resolveEmbeds(html, embeds) {
    let out = html
    for (let i = 0; i < embeds.length; i++) {
        const url = embeds[i].url
        const videoId = youtubeId(url)
        let replacement
        if (videoId) {
            const thumb = await youtubeThumbDataUri(videoId)
            const qr = await qrDataUri(url)
            const safeUrl = escapeHtml(url)
            replacement = `<div class="video-card">` +
                `<a href="${safeUrl}" class="video-thumb"><img src="${thumb}" alt="Thumbnail do vídeo"><span class="video-play"></span></a>` +
                `<div class="video-footer"><img class="video-qr" src="${qr}" alt="QR code do link do vídeo">` +
                `<a class="video-watch" href="${safeUrl}">Assistir no YouTube</a></div></div>`
        } else {
            replacement = `<p class="video-link">Vídeo: <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a></p>`
        }
        out = out.replace(`<p>@@APOIA-EMBED-${i}@@</p>`, () => replacement)
        if (out.includes(`@@APOIA-EMBED-${i}@@`)) out = out.replace(`@@APOIA-EMBED-${i}@@`, () => replacement)
    }
    return out
}

// Chaves "asset:<nome>" (criadas por rewriteImages) -> data URI.
async function resolveImages(html, manualDir) {
    const keys = [...new Set([...html.matchAll(/src="asset:([^"]+)"/g)].map(m => m[1]))]
    const dataUris = new Map()
    for (const key of keys) {
        dataUris.set(key, await resolveAssetKey(key, manualDir))
    }
    return html.replace(/src="asset:([^"]+)"/g, (match, key) => `src="${dataUris.get(key) ?? key}"`)
}

function shell({ tree, chapters, generatedAt, coverLogos }) {
    const tocEntries = []
    for (const section of tree) {
        if (section.title !== null) tocEntries.push({ heading: section.title })
        for (const page of section.pages) {
            tocEntries.push({ heading: null, page })
        }
    }
    // índice do capítulo pela posição no flatten (mesma ordem dos capítulos)
    const pageIndexOf = new Map()
    let n = 0
    for (const entry of tocEntries) {
        if (entry.page) pageIndexOf.set(entry.page, n++)
    }
    const tocHtml = tocEntries.map(entry => entry.heading !== null
        ? `<h2>${escapeHtml(entry.heading)}</h2>`
        : `<div class="toc-item"><a href="#p${pageIndexOf.get(entry.page)}">${escapeHtml(entry.page.title)}</a></div>`).join('')

    const body = chapters.map(chapter => `
        <section class="chapter" id="${chapter.id}">
            <h1 class="chapter-title">${escapeHtml(chapter.title)}</h1>
            <div class="content">${chapter.html}</div>
        </section>`).join('')

    const date = generatedAt.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
    // coverLogos[0]: logo principal, centralizada (COVER_LOGO_WIDTH);
    // coverLogos[1]: logo do canto superior esquerdo, com metade da largura.
    // Logo abaixo da principal vem uma barra preta (cover-rule) com o dobro da
    // largura dela — como um border-bottom estendido.
    const [mainLogo = null, cornerLogo = null] = coverLogos ?? []
    const mainLogoHtml = mainLogo ? `<img class="cover-main" src="${mainLogo}" alt="Logo da Apoia">` : ''
    const cornerLogoHtml = cornerLogo ? `<img class="cover-corner" src="${cornerLogo}" alt="Logo da Apoia">` : ''

    return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Manual da Apoia</title>
<style>${CSS}</style>
</head>
<body>
    <section class="cover">
        ${cornerLogoHtml}
        ${mainLogoHtml}
        <div class="cover-rule"></div>
        <h1>Manual da Apoia</h1>
        <p class="cover-sub">Conteúdo completo do manual publicado em <a href="${GITBOOK_URL}">trf2.gitbook.io/apoia</a></p>
        <p class="cover-date">Gerado em ${date}</p>
    </section>
    <nav class="toc">
        <h1>Sumário</h1>
        ${tocHtml}
    </nav>
    ${body}
</body>
</html>`
}

const CSS = `
    * { box-sizing: border-box; }
    body {
        font-family: 'Segoe UI', 'Liberation Sans', Arial, sans-serif;
        font-size: 11pt;
        line-height: 1.55;
        color: #242a31;
        margin: 0;
    }
    a { color: #0b5ed7; }

    .cover {
        position: relative;
        page-break-after: always;
        text-align: center;
        padding-top: 80pt;
    }
    .cover-corner {
        position: absolute;
        top: 0;
        left: 0;
        width: 99pt;
    }
    .cover-main {
        display: block;
        width: 198pt;
        margin: 100pt auto 0pt;
    }
    .cover-rule {
        width: 396pt;
        height: 2pt;
        background: #000;
        margin: 0 auto 30pt;
    }
    .cover h1 { font-size: 30pt; font-weight: 600; margin: 0 0 12pt; }
    .cover-sub { font-size: 12pt; color: #5c6975; margin: 0 0 4pt; }
    .cover-sub a { color: inherit; text-decoration: none; }
    .cover-date { font-size: 10pt; color: #5c6975; }

    .toc { page-break-after: always; }
    .toc h1 { font-size: 20pt; font-weight: 600; border-bottom: 1pt solid #e6e8eb; padding-bottom: 6pt; }
    .toc h2 { font-size: 12pt; font-weight: 600; margin: 12pt 0 4pt; }
    .toc-item { padding: 1pt 0 1pt 12pt; }

    .chapter { page-break-after: always; }
    .chapter-title {
        font-size: 19pt;
        font-weight: 600;
        border-bottom: 1pt solid #e6e8eb;
        padding-bottom: 6pt;
        margin: 0 0 14pt;
    }
    .content h1 { font-size: 16pt; font-weight: 600; margin: 18pt 0 8pt; }
    .content h2 { font-size: 13.5pt; font-weight: 600; margin: 16pt 0 6pt; }
    .content h3, .content h4, .content h5, .content h6 { font-size: 11.5pt; font-weight: 600; margin: 12pt 0 4pt; }

    .content pre {
        background: #f5f7f9;
        border: 0.5pt solid #e6e8eb;
        border-radius: 3pt;
        padding: 7pt 9pt;
        font-size: 8.5pt;
        line-height: 1.4;
        white-space: pre-wrap;
        word-break: break-word;
    }
    .content code {
        background: #f5f7f9;
        border-radius: 2pt;
        padding: 0.5pt 2pt;
        font-size: 9.5pt;
        font-family: Consolas, 'Courier New', monospace;
    }
    .content pre code { background: transparent; padding: 0; }

    .content table { border-collapse: collapse; width: 100%; margin: 8pt 0; }
    .content th { border-bottom: 1.5pt solid #d0d4d9; padding: 4pt 6pt; text-align: left; }
    .content td { border-bottom: 0.5pt solid #e6e8eb; padding: 4pt 6pt; }

    .content img { max-width: 100%; }
    .content figure { margin: 10pt 0; text-align: center; }

    .hint {
        padding: 8pt 10pt;
        border-radius: 3pt;
        margin: 8pt 0;
        page-break-inside: avoid;
    }
    .hint-info { background: #eef4fa; border-left: 3pt solid #4a90d9; }
    .hint-warning { background: #fdf3e0; border-left: 3pt solid #e8a000; }
    .hint-body > :first-child { margin-top: 0; }
    .hint-body > :last-child { margin-bottom: 0; }

    .video-card {
        margin: 10pt 0;
        page-break-inside: avoid;
    }
    .video-thumb {
        display: block; position: relative;
        /* border: 0.75pt solid #333333;
        border-radius: 5pt; */
        overflow: hidden;
    }
    .video-thumb img { display: block; width: 100%; }
    .video-play {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50pt;
        height: 50pt;
        margin: -25pt 0 0 -25pt;
        background: rgba(255, 0, 0, 0.8);
        border-radius: 50%;
    }
    .video-play::before {
        content: '';
        position: absolute;
        top: 14.5pt;
        left: 19pt;
        width: 0;
        height: 0;
        border-top: 10.5pt solid transparent;
        border-bottom: 10.5pt solid transparent;
        border-left: 17pt solid rgba(255, 255, 255, 0.8);
    }
    .video-footer {
        display: flex;
        align-items: center;
        gap: 8pt;
        padding: 6pt 9pt;
    }
    .video-qr { width: 40pt; height: 40pt; }
    .video-watch { font-size: 10pt; font-weight: 600; }
    .video-link { margin: 8pt 0; }

    blockquote {
        border-left: 3pt solid #e6e8eb;
        margin: 8pt 0;
        padding: 2pt 10pt;
        color: #5c6975;
    }
`
