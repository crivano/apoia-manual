// Teste de ponta do build-html com um mini-manual fixture (sem rede): capa,
// sumário com âncoras, capítulos na ordem do SUMMARY e links internos
// resolvidos para #p{n} / #p{n}-{slug}.
import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { buildHtml } from '../src/build-html.mjs'

const fixtureDir = fs.mkdtempSync(path.join(os.tmpdir(), 'manual-fixture-'))
fs.writeFileSync(path.join(fixtureDir, 'SUMMARY.md'), [
    '# Table of contents',
    '',
    '* [Início](README.md)',
    '* [FAQ](faq.md)',
    '',
    '## Seção',
    '',
    '* [Chat](chat.md)',
].join('\n'))
fs.writeFileSync(path.join(fixtureDir, 'README.md'), '# Manual da Apoia\n\nBem-vindo. Veja o [FAQ](faq.md#perguntas).\n')
fs.writeFileSync(path.join(fixtureDir, 'faq.md'), '# FAQ\n\n## Perguntas\n\nResposta.\n\n[voltar](README.md)\n')
fs.writeFileSync(path.join(fixtureDir, 'chat.md'), '# Chat\n\n{% hint style="info" %}\nDica.\n{% endhint %}\n\n[faq](../faq.md)\n')

test('buildHtml monta capa, sumário e âncoras internas', async () => {
    // coverLogos injetados para não depender de rede no teste
    const html = await buildHtml(fixtureDir, { coverLogos: ['data:image/png;base64,AAA', 'data:image/png;base64,BBB'] })
    assert.ok(html.includes('<title>Manual da Apoia</title>'))
    assert.ok(html.includes('Gerado em'))
    // capa: logo de canto (metade da largura), logo principal central,
    // barra preta com o dobro da largura da principal, título e link discreto
    assert.ok(html.includes('<img class="cover-corner" src="data:image/png;base64,BBB" alt="Logo da Apoia">'))
    assert.ok(html.includes('<img class="cover-main" src="data:image/png;base64,AAA" alt="Logo da Apoia">'))
    assert.ok(html.includes('.cover-corner') && html.includes('width: 99pt'))
    assert.ok(html.includes('.cover-main') && html.includes('width: 198pt'))
    assert.ok(html.includes('.cover-rule') && html.includes('width: 396pt') && html.includes('height: 2pt'))
    assert.ok(html.indexOf('cover-main') < html.indexOf('<div class="cover-rule"></div>'))
    assert.ok(html.indexOf('<div class="cover-rule"></div>') < html.indexOf('<h1>Manual da Apoia</h1>'))
    assert.ok(html.includes('<a href="https://trf2.gitbook.io/apoia">trf2.gitbook.io/apoia</a>'))
    // sumário: 3 entradas apontando para p0/p1/p2
    assert.ok(html.includes('<a href="#p0">Início</a>'))
    assert.ok(html.includes('<a href="#p1">FAQ</a>'))
    assert.ok(html.includes('<a href="#p2">Chat</a>'))
    assert.ok(html.includes('<h2>Seção</h2>'))
    // capítulos com ids e títulos
    assert.ok(html.includes('<section class="chapter" id="p1">'))
    assert.ok(html.includes('<h1 class="chapter-title">FAQ</h1>'))
    // link interno com âncora resolvido para o heading prefixado da página alvo
    assert.ok(html.includes('<a href="#p1-perguntas">FAQ</a>'))
    assert.ok(html.includes('<a href="#p0">voltar</a>'))
    assert.ok(html.includes('<h2 id="p1-perguntas">Perguntas</h2>'))
    // hint renderizado
    assert.ok(html.includes('<div class="hint hint-info">'))
})

test('buildHtml falha se página do SUMMARY não existe', async () => {
    const brokenDir = fs.mkdtempSync(path.join(os.tmpdir(), 'manual-broken-'))
    fs.writeFileSync(path.join(brokenDir, 'SUMMARY.md'), '* [Sumário](SUMMARY.md)\n* [Fantasma](fantasma.md)\n')
    await assert.rejects(() => buildHtml(brokenDir), /fantasma\.md/)
})
