import test from 'node:test'
import assert from 'node:assert/strict'
import { gitbookSlug, extractHeadingSlugs } from '../src/anchors.mjs'
import { matchRelativeLinks, rewriteImages, rewriteRelativeLinks, splitFences, splitFrontmatter, youtubeId } from '../src/gitbook.mjs'
import { renderPage } from '../src/render.mjs'
import { flatten, parseSummary } from '../src/summary.mjs'

test('gitbookSlug remove diacríticos e espaços viram hífen', () => {
    assert.equal(gitbookSlug('Transferência de Prompts'), 'transferencia-de-prompts')
    assert.equal(gitbookSlug('Painéis do Moderador'), 'paineis-do-moderador')
})

test('extractHeadingSlugs remove formatação, deduplica e ignora fences', () => {
    const md = [
        '# Campos de referência (`Rf_`)',
        '## `uuid` _(obrigatório)_',
        '## `uuid` _(obrigatório)_',
        '~~~',
        '# Heading dentro de fence é ignorado',
        '~~~',
    ].join('\n')
    assert.deepEqual(extractHeadingSlugs(md), [
        'campos-de-referencia-rf_',
        'uuid-obrigatorio',
        'uuid-obrigatorio-2',
    ])
})

test('parseSummary: seções, seção null, hr, README -> raiz', () => {
    const tree = parseSummary([
        '# Table of contents',
        '',
        '* [Manual da Apoia/TRF2](README.md)',
        '* [FAQ](faq.md)',
        '',
        '## Banco de Prompts',
        '',
        '* [Banco](banco-de-prompts/banco-de-prompts.md)',
        '',
        '## Termos de Uso',
        '',
        '***',
        '',
        '* [Termos](termos-de-uso.md)',
    ].join('\n'))
    assert.equal(tree.length, 3)
    assert.equal(tree[0].title, null)
    assert.equal(tree[0].pages[0].slug, '')
    assert.equal(tree[1].title, 'Banco de Prompts')
    assert.equal(tree[1].pages[0].slug, 'banco-de-prompts/banco-de-prompts')
    assert.equal(tree[2].hr, true)
    assert.deepEqual(flatten(tree).map(p => p.slug), ['', 'faq', 'banco-de-prompts/banco-de-prompts', 'termos-de-uso'])
})

test('splitFences separa ``` e ~~~', () => {
    const segments = splitFences('texto\n\n```\ncódigo\n```\n\nfim')
    assert.deepEqual(segments.map(s => s.fenced), [false, true, false])
    assert.ok(segments[1].text.includes('código'))
})

test('splitFrontmatter: hidden: true oculta, demais campos são desprezados', () => {
    // sem front-matter: nada a fazer
    assert.deepEqual(splitFrontmatter('# Título\n\ntexto'), { hidden: false, md: '# Título\n\ntexto' })
    // '---' sem fechamento não é front-matter
    assert.deepEqual(splitFrontmatter('---\nsem fechamento'), { hidden: false, md: '---\nsem fechamento' })
    // outros campos (mesmo multi-linha): bloco removido, página visível
    assert.deepEqual(
        splitFrontmatter('---\ndescription: >-\n  Texto em\n  várias linhas\n---\n# Corpo\n'),
        { hidden: false, md: '# Corpo\n' },
    )
    // hidden: true (CRLF como nos arquivos do repo)
    assert.deepEqual(splitFrontmatter('---\r\nhidden: true\r\n---\r\n# Corpo\r\n'), { hidden: true, md: '# Corpo\r\n' })
    // hidden com outro valor não oculta
    assert.deepEqual(splitFrontmatter('---\nhidden: false\n---\n# Corpo\n'), { hidden: false, md: '# Corpo\n' })
})

test('rewriteImages gera chaves asset: para CDN e .gitbook', () => {
    assert.equal(
        rewriteImages('<figure><img src="https://github.com/user-attachments/assets/db001c9d-02e7-4365-aabd-d79ca3d95b3a" alt=""></figure>'),
        '<figure><img src="asset:ua-db001c9d-02e7-4365-aabd-d79ca3d95b3a.png" alt=""></figure>',
    )
    assert.equal(
        rewriteImages('<img src="../.gitbook/assets/apoia.pdpj.jus.br_chat(Desktop 1260x800) (1).png">'),
        '<img src="asset:apoia.pdpj.jus.br_chat(Desktop%201260x800)%20(1).png">',
    )
})

test('rewriteRelativeLinks usa resolveTarget e mantém externos', () => {
    const resolve = (file, anchor) => file === 'faq.md' ? `#p1${anchor ? '-' + anchor.slice(1) : ''}` : null
    assert.equal(
        rewriteRelativeLinks('veja [a](../faq.md#secao) e [b](../inexistente.md) e [c](https://x.com/a.md)', 'outras-funcionalidades/chat.md', resolve),
        'veja [a](#p1-secao) e [b](../inexistente.md) e [c](https://x.com/a.md)',
    )
    assert.deepEqual(matchRelativeLinks('[a](faq.md#secao) [b](https://x.com/a.md) [c](outra.md)'),
        [{ target: 'faq.md', anchor: '#secao' }, { target: 'outra.md', anchor: '' }])
})

test('youtubeId extrai o id de youtu.be e watch?v=', () => {
    assert.equal(youtubeId('https://youtu.be/p1z-fRIXdxw'), 'p1z-fRIXdxw')
    assert.equal(youtubeId('https://www.youtube.com/watch?v=7cZRJKgWG7c'), '7cZRJKgWG7c')
    assert.equal(youtubeId('https://vimeo.com/123456'), null)
})

test('renderPage: hints, embeds (tokens), heading ids com prefixo', () => {
    const md = [
        '# Transferência de Prompts',
        '{% hint style="warning" %}',
        'Atenção ao **limite** diário.',
        '{% endhint %}',
        '{% embed url="https://youtu.be/p1z-fRIXdxw" %}',
        '## Transferência de Prompts',
    ].join('\n')
    const { html, headings, embeds } = renderPage(md, 'faq.md', { headingPrefix: 'p0-' })
    assert.ok(html.includes('<div class="hint hint-warning"><div class="hint-body"><p>Atenção ao <strong>limite</strong> diário.</p></div></div>'))
    assert.ok(html.includes('<h1 id="p0-transferencia-de-prompts">'))
    assert.ok(html.includes('<h2 id="p0-transferencia-de-prompts-2">'))
    assert.deepEqual(headings.map(h => h.id), ['p0-transferencia-de-prompts', 'p0-transferencia-de-prompts-2'])
    assert.deepEqual(embeds, [{ url: 'https://youtu.be/p1z-fRIXdxw' }])
    // token presente em qualquer forma (parágrafo próprio ou colado a outro
    // bloco — o build resolve os dois; no corpus real embeds são blocos
    // separados por linha em branco)
    assert.ok(html.includes('@@APOIA-EMBED-0@@'))
    assert.ok(!html.includes('@@APOIA-HINT'))
    assert.ok(!html.includes('{%'))
})

test('renderPage: fence com Nunjucks passa ileso e inline code não é transformado', () => {
    const fence = ['```', '{% for d in indice %}{{ loop.index }}. {{ d.descr }}', '{% endfor %}', '```'].join('\n')
    const { html } = renderPage(`${fence}\n\nescreva \`{% hint style="info" %}\` para destacar`, 'faq.md', {})
    assert.ok(html.includes('{% for d in indice %}'))
    assert.ok(html.includes('<code>{% hint style="info" %}</code>'))
    assert.ok(!html.includes('class="hint'))
})
