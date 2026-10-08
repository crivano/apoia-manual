// Resolução de assets para data URI (PDF self-contained): imagens da CDN do
// GitHub e thumbnails do YouTube são baixados uma única vez para assets-cache/
// (re-runs ficam offline); imagens .gitbook são copiadas do repo do manual;
// QR codes são gerados localmente. Nada é escrito no repo do manual.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import QRCode from 'qrcode'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const CACHE_DIR = path.join(HERE, '..', 'assets-cache')
const FETCH_HEADERS = { 'user-agent': 'Apoia-Manual-PDF/1.0' }

function cachePath(name) {
    fs.mkdirSync(CACHE_DIR, { recursive: true })
    return path.join(CACHE_DIR, name)
}

function toDataUri(file, mime) {
    return `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`
}

async function download(url, target) {
    const response = await fetch(url, { headers: FETCH_HEADERS })
    if (!response.ok) throw new Error(`HTTP ${response.status} ao baixar ${url}`)
    const buffer = Buffer.from(await response.arrayBuffer())
    fs.writeFileSync(target, buffer)
    return buffer.length
}

// Chaves "asset:" criadas por rewriteImages:
//   ua-<uuid>.png                -> CDN GitHub user-attachments (baixa 1x)
//   <encodeURIComponent(nome)>   -> .gitbook/assets do repo do manual (copia)
export async function resolveAssetKey(key, manualDir) {
    const uuid = key.match(/^ua-([a-f0-9-]+)\.png$/)
    if (uuid) {
        const target = cachePath(key)
        if (!fs.existsSync(target)) {
            const bytes = await download(`https://github.com/user-attachments/assets/${uuid[1]}`, target)
            console.log(`baixado: ${key} (${bytes} bytes)`)
        }
        return toDataUri(target, 'image/png')
    }
    const target = cachePath(key)
    if (!fs.existsSync(target)) {
        const source = path.join(manualDir, '.gitbook', 'assets', decodeURIComponent(key))
        if (!fs.existsSync(source)) throw new Error(`asset local não encontrado: ${source}`)
        fs.copyFileSync(source, target)
        console.log(`copiado: ${key}`)
    }
    const mime = key.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'
    return toDataUri(target, mime)
}

// Arquivo local -> data URI (logos da capa, versionadas em assets/).
export function fileDataUri(file) {
    const mime = file.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'
    return toDataUri(file, mime)
}

// Thumbnails do YouTube em 16:9 sem letterbox: hqdefault.jpg é 4:3 com barras
// pretas em vídeos widescreen. Prefere maxresdefault (1280x720) e cai para
// mqdefault (320x180, existe para todos os vídeos). Cache com nome próprio
// ("yt16-") para não servir versões antigas do hqdefault.
export async function youtubeThumbDataUri(videoId) {
    const target = cachePath(`yt16-${videoId}.jpg`)
    if (!fs.existsSync(target)) {
        let source = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        try {
            const bytes = await download(source, target)
            console.log(`thumbnail: yt16-${videoId}.jpg (maxres, ${bytes} bytes)`)
        } catch {
            source = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
            const bytes = await download(source, target)
            console.log(`thumbnail: yt16-${videoId}.jpg (mq, ${bytes} bytes)`)
        }
    }
    return toDataUri(target, 'image/jpeg')
}

export async function qrDataUri(url) {
    return QRCode.toDataURL(url, { margin: 0, width: 140 })
}
