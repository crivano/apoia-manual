// Parse do SUMMARY.md do manual — fonte única da ordem e da navegação
// (arquivo fora dele é oculto, como o GitBook faz com readme2.md).

// Converte o caminho do SUMMARY (posix, com .md) no slug da página:
// 'outras-funcionalidades/chat.md' -> 'outras-funcionalidades/chat';
// 'README.md' (ou '<dir>/README.md') -> diretório sem o nome do arquivo.
export function fileToSlug(file) {
    const parts = file.replace(/\.md$/i, '').split('/')
    if (parts[parts.length - 1] === 'README') parts.pop()
    return parts.join('/')
}

// Linhas de página: "* [Título](caminho.md)"; "## Título" abre seção; "***"
// marca um separador horizontal na seção corrente. Páginas antes da primeira
// seção caem numa seção com title null.
export function parseSummary(md) {
    const tree = []
    let current = null
    for (const rawLine of md.split(/\r?\n/)) {
        const line = rawLine.trim()
        const heading = line.match(/^##\s+(.+)$/)
        if (heading) {
            current = { title: heading[1].trim(), hr: false, pages: [] }
            tree.push(current)
            continue
        }
        if (/^\*{3,}$/.test(line)) {
            if (current) current.hr = true
            continue
        }
        const page = line.match(/^\*\s+\[(.*)\]\((.*)\)$/)
        if (page) {
            if (!current) {
                current = { title: null, hr: false, pages: [] }
                tree.push(current)
            }
            const file = page[2].trim()
            current.pages.push({ slug: fileToSlug(file), title: page[1].trim(), file })
        }
    }
    return tree
}

// Todas as páginas na ordem do SUMMARY.
export function flatten(tree) {
    return tree.flatMap(section => section.pages)
}
