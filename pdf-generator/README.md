# Gerador de PDF do Manual da Apoia

Gera um PDF único com o conteúdo completo deste manual (repo GitBook
sincronizado com `trf2.gitbook.io/apoia`) — coisa que o GitBook não oferece.
O conteúdo do manual **nunca é escrito**: toda a adaptação GitBook → HTML roda
em memória e só o PDF final é gravado. Esta pasta fica fora do `SUMMARY.md`,
então o site publicado no GitBook não é afetado.

## Uso local

```bash
cd pdf-generator
npm install        # primeira vez: baixa dependências + Chromium do Puppeteer
npm run pdf        # gera pdf-generator/dist/manual-apoia.pdf
npm test           # testes do adapter + integridade sobre o corpus real
```

Opções:

```bash
npm run pdf -- --manual C:/caminho/do/manual   # default: raiz deste repo
npm run pdf -- --out dist/meu-arquivo.pdf       # default: dist/manual-apoia.pdf
```

Todos os caminhos são resolvidos a partir dos próprios módulos — pode rodar
de qualquer diretório.

Imagens da CDN do GitHub, logos oficiais da capa (apoia.pdpj.jus.br) e
thumbnails do YouTube são baixadas uma única vez para `assets-cache/`
(re-runs ficam offline). Embeds de vídeo viram um card com thumbnail clicável
+ QR code do link (útil no papel). Rodapé com numeração de páginas; links
internos do manual e o sumário são clicáveis no PDF.

## Publicação automática (GitHub Actions)

O workflow [`.github/workflows/manual-pdf.yml`](../.github/workflows/manual-pdf.yml)
roda a cada push no `main` (ou manualmente via *workflow dispatch*): instala as
dependências, roda os testes (incluindo a integridade sobre as páginas reais
do manual), gera o PDF e o publica numa GitHub Release com a tag fixa
`manual-pdf`. O asset é substituído a cada execução — só a última versão fica
publicada.

Link de download estável:

```
https://github.com/crivano/apoia-manual/releases/download/manual-pdf/manual-apoia.pdf
```

**Visibilidade**: como o repo é público, essa URL é compartilhável sem login.
(Se um dia o repo virar privado, o download passa a exigir autenticação no
GitHub e o Actions passa a consumir minutes da conta.)

## Quando o manual mudar

Basta dar push no `main` — o workflow gera e publica o PDF atualizado. Para
gerar localmente, `npm run pdf` de novo; o conteúdo é lido do repo a cada
execução.

## Estrutura

- `src/summary.mjs` — parse do `SUMMARY.md` (fonte única da ordem/navegação)
- `src/anchors.mjs` — slug de âncoras no formato GitBook/GitHub
- `src/gitbook.mjs` — transforms do vocabulário GitBook (hints, embeds,
  imagens, links relativos), protegendo code fences e inline code
- `src/render.mjs` — markdown → HTML por página (showdown)
- `src/assets.mjs` — download/cache de imagens e thumbnails + QR codes
- `src/build-html.mjs` — monta o HTML completo (capa, sumário, capítulos)
- `src/generate-pdf.mjs` — Puppeteer: HTML → PDF (A4, fundos impressos)
- `test/` — testes do adapter (node:test) e de integridade sobre o corpus real
