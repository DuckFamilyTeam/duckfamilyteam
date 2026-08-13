import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

const logoSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), 'public/img/logo-za-nasu-agenciju.png'),
).toString('base64')}`

/**
 * Favicon se renderuje na 32×32 iz logotipa. Ranije se kao ikonica služio
 * originalni PNG od 108 KB u punoj rezoluciji 512×512, i to preko ručnog
 * <link> taga koji zaobilazi svaku optimizaciju.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={32} height={32} alt="" />
      </div>
    ),
    size,
  )
}
