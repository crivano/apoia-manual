// Render de uma página do manual (markdown -> HTML) com o pipeline em
// memória: fences -> inline code -> hints -> embeds -> imagens -> links ->
// showdown -> ids de headings -> divs de hint. Os tokens de EMBED ficam no
// HTML (@@APOIA-EMBED-n@@ em um <p>) para o build resolver com rede (cards de
// vídeo) — por isso o render devolve a lista de embeds na ordem dos tokens.
import showdown from 'showdown'
import { gitbookSlug } from './anchors.mjs'
import { extractHints, rewriteImages, rewriteRelativeLinks, splitFences, splitInlineCode, transformEmbeds } from './gitbook.mjs'

// noHeaderId: o slugger interno do showdown descarta caracteres acentuados
// inteiros ("Transferência" viria "transferncia") — os ids são injetados no
// pós-processamento com gitbookSlug. simpleLineBreaks false = markdown padrão
// para arquivo (paridade de autoria GitBook).
const converter = new showdown.Converter({
    tables: true,
    strikethrough: true,
    tasklists: true,
    simpleLineBreaks: false,
    noHeaderId: true,
})

const MAX_HINT_DEPTH = 2

// opts:
//   headingPrefix — prefixo dos ids de heading (âncoras únicas entre páginas,
//                   ex.: 'p3-'); default ''
//   resolveTarget — (arquivoPosix, âncora) => href | null para links internos
export function renderPage(md, currentFile, opts = {}) {
    const headings = []
    const embeds = []
    const html = renderMarkdown(md, currentFile, 0, opts, headings, embeds)
    return { html, headings, embeds }
}

function renderMarkdown(md, currentFile, depth, opts, headings, embeds) {
    const hints = []

    const transformed = splitFences(md).map(segment => {
        if (segment.fenced) return segment.text
        return splitInlineCode(segment.text).map(part => {
            if (part.fenced) return part.text
            let text = part.text
            if (depth < MAX_HINT_DEPTH) {
                const extracted = extractHints(text)
                hints.push(...extracted.hints)
                text = extracted.md
            }
            const embedded = transformEmbeds(text)
            embeds.push(...embedded.embeds)
            text = embedded.md
            text = rewriteImages(text)
            text = rewriteRelativeLinks(text, currentFile, opts.resolveTarget)
            return text
        }).join('')
    }).join('\n')

    let html = converter.makeHtml(transformed)

    if (headings) {
        const used = new Map()
        html = html.replace(/<(h[1-6])(\s[^>]*)?>([\s\S]*?)<\/\1>/g, (match, tag, _attrs, inner) => {
            const text = inner.replace(/<[^>]+>/g, '')
            const base = gitbookSlug(text)
            if (!base) return match
            const count = used.get(base) ?? 0
            used.set(base, count + 1)
            const id = `${opts.headingPrefix ?? ''}${count === 0 ? base : `${base}-${count + 1}`}`
            headings.push({ id, text, level: Number(tag[1]) })
            return `<${tag} id="${id}">${inner}</${tag}>`
        })
    }

    for (let i = 0; i < hints.length; i++) {
        const styleClass = hints[i].style === 'warning' ? 'hint-warning' : 'hint-info'
        const bodyHtml = renderMarkdown(hints[i].body, currentFile, depth + 1, opts, null, [])
        const div = `<div class="hint ${styleClass}"><div class="hint-body">${bodyHtml}</div></div>`
        html = html.replace(`<p>@@APOIA-HINT-${i}@@</p>`, () => div)
        if (html.includes(`@@APOIA-HINT-${i}@@`)) html = html.replace(`@@APOIA-HINT-${i}@@`, () => div)
    }

    return html
}
