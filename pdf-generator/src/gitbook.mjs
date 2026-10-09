// Transforms do vocabulário GitBook ({% hint %}, {% embed %}) e adaptação de
// URLs — funções puras. O repo do manual nunca é reescrito: tudo roda em
// memória no build do PDF. Diferenças para a versão que viveu na Apoia:
// imagens viram chaves "asset:" (resolvidas para data URI no build) e links
// relativos são resolvidos por callback para âncoras internas do PDF.
import path from 'node:path'

const FRONTMATTER_RE = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/

// Separa o front-matter (bloco YAML aberto por '---' na primeira linha e
// fechado por um '---' em linha própria) do corpo do markdown. Só interessa
// hidden: true — a página não entra no PDF nem no índice; qualquer outro
// campo ou valor é desprezado: o bloco inteiro sai do markdown renderizado.
export function splitFrontmatter(md) {
    const match = md.match(FRONTMATTER_RE)
    if (!match) return { hidden: false, md }
    const hidden = /^hidden:[ \t]*true[ \t]*\r?$/m.test(match[1])
    return { hidden, md: md.slice(match[0].length) }
}

export function splitFences(md) {
    const segments = []
    const lines = md.split(/\r?\n/)
    let current = []
    let fence = null
    const closeSegment = (fenced) => {
        segments.push({ fenced, text: current.join('\n') })
        current = []
    }
    for (const line of lines) {
        if (fence) {
            current.push(line)
            const closing = line.match(/^\s{0,3}(`{3,}|~{3,})/)
            if (closing && closing[1][0] === fence.char && closing[1].length >= fence.length) {
                closeSegment(true)
                fence = null
            }
            continue
        }
        const opening = line.match(/^\s{0,3}(`{3,}|~{3,})/)
        if (opening) {
            if (current.length) closeSegment(false)
            fence = { char: opening[1][0], length: opening[1].length }
            current.push(line)
            continue
        }
        current.push(line)
    }
    closeSegment(fence !== null)
    return segments
}

// Sub-segmenta texto corrido em código inline (`...`) e texto: sintaxe
// GitBook mencionada em inline code não é transformada.
export function splitInlineCode(text) {
    const parts = []
    const re = /(`+)([\s\S]*?)\1/g
    let last = 0
    for (const match of text.matchAll(re)) {
        if (match.index > last) parts.push({ fenced: false, text: text.slice(last, match.index) })
        parts.push({ fenced: true, text: match[0] })
        last = match.index + match[0].length
    }
    if (last < text.length) parts.push({ fenced: false, text: text.slice(last) })
    return parts
}

const HINT_RE = /^[ \t]*\{%\s*hint(?:\s+style="([\w-]+)")?\s*%\}[ \t]*\r?\n([\s\S]*?)^[ \t]*\{%\s*endhint\s*%\}[ \t]*$/gm

// {% hint style="info" %}...{% endhint %} vira o token de linha única
// @@APOIA-HINT-n@@ (sem underscore: showdown transformaria _HINT_ em itálico).
export function extractHints(md) {
    const hints = []
    const out = md.replace(HINT_RE, (_match, style, body) => {
        hints.push({ style: style || 'info', body: body.trim() })
        return `@@APOIA-HINT-${hints.length - 1}@@`
    })
    return { md: out, hints }
}

const EMBED_RE = /\{%\s*embed\s+(?:url=)?["']([^"']+)["']\s*%\}/g

// {% embed url="https://youtu.be/ID" %} vira o token @@APOIA-EMBED-n@@ — a
// substituição (card com thumbnail/QR) é feita pelo build, que resolve as
// chamadas de rede de forma assíncrona.
export function transformEmbeds(md) {
    const embeds = []
    const out = md.replace(EMBED_RE, (_match, url) => {
        embeds.push({ url })
        return `@@APOIA-EMBED-${embeds.length - 1}@@`
    })
    return { md: out, embeds }
}

// Reescreve src="..." das imagens para chaves "asset:" resolvidas pelo build
// (CDN GitHub -> ua-<uuid>.png; .gitbook/assets -> nome encodeURIComponent).
export function rewriteImages(md) {
    return md.replace(/src="([^"]*)"/g, (match, src) => {
        const cdn = src.match(/github\.com\/user-attachments\/assets\/([a-f0-9-]+)/)
        if (cdn) return `src="asset:ua-${cdn[1]}.png"`
        const gitbook = src.match(/(?:\.\.\/|\.\/)?\.gitbook\/assets\/(.+)$/)
        if (gitbook) return `src="asset:${encodeURIComponent(gitbook[1])}"`
        return match
    })
}

export const RELATIVE_LINK_RE = /\]\(([^)\s]+\.md)((?:#[^)\s]*)?)((?:\s+"[^"]*")?)\)/g

// Enumera os links relativos para .md de um markdown (mesma regex do rewrite —
// o teste de integridade reutiliza para validar âncoras/arquivos).
export function matchRelativeLinks(md) {
    const links = []
    for (const match of md.matchAll(RELATIVE_LINK_RE)) {
        if (/^(https?:|mailto:)/i.test(match[1])) continue
        links.push({ target: match[1], anchor: match[2] })
    }
    return links
}

// Links relativos ](arquivo.md#ancora) são resolvidos por resolveTarget
// (caminho posix já normalizado + âncora) para âncoras internas do PDF;
// retorno null mantém o link como está. Links externos ficam inalterados.
export function rewriteRelativeLinks(md, currentFile, resolveTarget) {
    const dir = path.posix.dirname(currentFile)
    return md.replace(RELATIVE_LINK_RE, (match, target, anchor) => {
        if (/^(https?:|mailto:)/i.test(target)) return match
        const resolved = path.posix.normalize(path.posix.join(dir, target))
        const href = resolveTarget ? resolveTarget(resolved, anchor) : null
        if (!href) return match
        return `](${href})`
    })
}

// https://youtu.be/ID ou .../watch?v=ID -> ID do vídeo; null para outras URLs.
export function youtubeId(url) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]{6,})/)
    return match ? match[1] : null
}
