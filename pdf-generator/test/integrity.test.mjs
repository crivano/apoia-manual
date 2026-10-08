// Integridade sobre o corpus real (raiz deste repo): o SUMMARY resolve, os
// links internos e âncoras existem, as imagens referenciadas têm origem no
// repo e o render de todas as páginas não deixa resíduo de sintaxe GitBook.
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractHeadingSlugs } from '../src/anchors.mjs'
import { matchRelativeLinks, splitFences, splitInlineCode } from '../src/gitbook.mjs'
import { renderPage } from '../src/render.mjs'
import { flatten, parseSummary } from '../src/summary.mjs'

const MANUAL_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

function listMarkdownFiles(dir) {
    const results = []
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) results.push(...listMarkdownFiles(fullPath))
        else if (entry.isFile() && entry.name.endsWith('.md')) results.push(fullPath)
    }
    return results
}

const readManual = (file) => fs.readFileSync(path.join(MANUAL_DIR, file), 'utf-8')
const tree = parseSummary(readManual('SUMMARY.md'))
const pages = flatten(tree)
const summaryFiles = new Set(pages.map(p => p.file))

test('todas as páginas do SUMMARY existem', () => {
    const missing = pages.filter(p => !fs.existsSync(path.join(MANUAL_DIR, p.file)))
    assert.deepEqual(missing.map(p => p.file), [])
})

test('links internos resolvem para páginas do SUMMARY e âncoras existem', () => {
    const problems = []
    for (const page of pages) {
        const md = readManual(page.file)
        const visibleText = splitFences(md)
            .filter(segment => !segment.fenced)
            .flatMap(segment => splitInlineCode(segment.text).filter(part => !part.fenced).map(part => part.text))
            .join('\n')
        for (const link of matchRelativeLinks(visibleText)) {
            const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(page.file), link.target))
            if (!summaryFiles.has(resolved)) {
                problems.push(`${page.file}: ${link.target} resolve ${resolved}, fora do SUMMARY`)
                continue
            }
            if (link.anchor) {
                const anchors = extractHeadingSlugs(readManual(resolved))
                if (!anchors.includes(link.anchor.slice(1))) {
                    problems.push(`${page.file}: âncora ${link.anchor} não existe em ${resolved}`)
                }
            }
        }
    }
    assert.deepEqual(problems, [])
})

test('imagens referenciadas têm origem no repo do manual', () => {
    const problems = []
    for (const file of listMarkdownFiles(MANUAL_DIR)) {
        const md = fs.readFileSync(file, 'utf-8')
        for (const match of md.matchAll(/src="([^"]*)"/g)) {
            const src = match[1]
            if (/github\.com\/user-attachments\/assets\/[a-f0-9-]+/.test(src)) continue
            if (/(?:\.\.\/|\.\/)?\.gitbook\/assets\//.test(src)) {
                const name = src.match(/(?:\.\.\/|\.\/)?\.gitbook\/assets\/(.+)$/)[1]
                if (!fs.existsSync(path.join(MANUAL_DIR, '.gitbook', 'assets', name))) {
                    problems.push(`${path.relative(MANUAL_DIR, file)}: ${src} sem origem em .gitbook/assets`)
                }
            }
        }
    }
    assert.deepEqual(problems, [])
})

test('render de todas as páginas sem resíduo (fora de code/pre)', () => {
    const problems = []
    for (const page of pages) {
        const { html } = renderPage(readManual(page.file), page.file, {})
        const outsideCode = html.replace(/<pre>[\s\S]*?<\/pre>/g, '').replace(/<code>[\s\S]*?<\/code>/g, '')
        for (const residue of ['@@APOIA-HINT', '{% hint', '{% embed', '{% endhint']) {
            if (outsideCode.includes(residue)) problems.push(`${page.file}: resíduo "${residue}"`)
        }
        if (/src="(https:\/\/github\.com\/user-attachments|[^"]*\.gitbook\/assets)/.test(html)) {
            problems.push(`${page.file}: imagem sem chave asset:`)
        }
    }
    assert.deepEqual(problems, [])
})
