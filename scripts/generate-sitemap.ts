import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bands } from '../src/data/bands'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_URL = 'https://www.rockhistory.eu'

const urls: { loc: string; priority: string }[] = [{ loc: '/', priority: '1.0' }]

for (const band of bands) {
  urls.push({ loc: `/band/${band.slug}`, priority: '0.8' })
  for (const album of band.albums) {
    urls.push({ loc: `/band/${band.slug}/album/${album.slug}`, priority: '0.6' })
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${SITE_URL}${u.loc}</loc>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml)
console.log(`sitemap.xml generata con ${urls.length} URL in ${outPath}`)
