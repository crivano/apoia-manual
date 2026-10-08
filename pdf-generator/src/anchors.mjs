// Slug de headings no formato GitBook/GitHub usado pelas âncoras dos links
// internos do manual ("Transferência de Prompts" -> 'transferencia-de-prompts').

export function gitbookSlug(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-_]/g, '')
}

// Remove formatação inline de um heading (backticks, **negrito**, *itálico*,
// _itálico_) antes de calcular o slug. Pares delimitadores são removidos sem
// tocar em underscores de palavras isoladas (snake_case fora de pares).
export function stripInlineFormatting(text) {
    return text
        .replace(/`+([^`]*)`+/g, '$1')
        .replace(/\*\*([^*]*)\*\*/g, '$1')
        .replace(/\*([^*]*)\*/g, '$1')
        .replace(/_([^_]*)_/g, '$1')
}

// Slugs de todos os headings de um markdown, na ordem, fora de code fences.
// Duplicatas ganham sufixo -2, -3... (estilo GitHub/GitBook).
export function extractHeadingSlugs(md) {
    const slugs = []
    const seen = new Map()
    let inFence = false
    for (const rawLine of md.split(/\r?\n/)) {
        if (/^\s*(```|~~~)/.test(rawLine)) {
            inFence = !inFence
            continue
        }
        if (inFence) continue
        const match = rawLine.match(/^#{1,6}\s+(.*)$/)
        if (!match) continue
        const base = gitbookSlug(stripInlineFormatting(match[1].trim()))
        if (!base) continue
        const count = seen.get(base) ?? 0
        seen.set(base, count + 1)
        slugs.push(count === 0 ? base : `${base}-${count + 1}`)
    }
    return slugs
}
