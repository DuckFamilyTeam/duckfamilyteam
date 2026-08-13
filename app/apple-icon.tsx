import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const logoSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), 'public/img/logo-za-nasu-agenciju.png'),
).toString('base64')}`

/** Apple touch ikonica — puna podloga, jer iOS ne poštuje providnost. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#14100E',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={148} height={148} alt="" />
      </div>
    ),
    size,
  )
}
