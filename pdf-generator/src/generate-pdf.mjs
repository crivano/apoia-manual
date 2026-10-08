// Gera o PDF do manual: lê a raiz deste repo (default), monta o HTML completo
// (capa com as logos oficiais, sumário clicável, capítulos na ordem do
// SUMMARY, imagens e cards de vídeo embutidos) e imprime em A4 via Puppeteer.
//
//   node src/generate-pdf.mjs [--manual <dir>] [--out <arquivo>]
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import { buildHtml } from './build-html.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))

function parseArgs(argv) {
    const args = { manual: null, out: null }
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === '--manual') args.manual = argv[++i]
        else if (argv[i] === '--out') args.out = argv[++i]
        else throw new Error(`Argumento desconhecido: ${argv[i]}`)
    }
    return args
}

const args = parseArgs(process.argv.slice(2))
const manualDir = path.resolve(args.manual ?? path.join(HERE, '..', '..'))
const outFile = path.resolve(args.out ?? path.join(HERE, '..', 'dist', 'manual-apoia.pdf'))

if (!fs.existsSync(path.join(manualDir, 'SUMMARY.md'))) {
    throw new Error(`SUMMARY.md não encontrado em ${manualDir} — use --manual <dir do repo apoia-manual>`)
}

console.log(`manual: ${manualDir}`)
const html = await buildHtml(manualDir)

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(path.join(path.dirname(outFile), 'manual-apoia.html'), html, 'utf-8')
console.log(`html intermediário: ${path.join(path.dirname(outFile), 'manual-apoia.html')}`)

const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })
    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<span></span>',
        footerTemplate: `
            <div style="width: 100%; font-size: 8px; color: #5c6975; padding: 0 14mm; display: flex; justify-content: space-between;">
                <span>Manual da Apoia</span>
                <span><span class="pageNumber"></span> de <span class="totalPages"></span></span>
            </div>`,
        margin: { top: '16mm', bottom: '16mm', left: '14mm', right: '14mm' },
    })
    fs.writeFileSync(outFile, pdf)
    console.log(`pdf: ${outFile} (${(pdf.length / 1024 / 1024).toFixed(2)} MB)`)
} finally {
    await browser.close()
}
