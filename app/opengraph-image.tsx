import { ImageResponse } from 'next/og'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export const alt = 'Duck Family Team — Google Ads, Google Business profil i izrada sajtova'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const logoSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), 'public/img/logo-za-nasu-agenciju.png'),
).toString('base64')}`

/**
 * OG slika se generiše iz koda umesto da stoji kao statični fajl — ranije je
 * metadata pokazivala na /img/og-image.png koji nije postojao, pa je svako
 * deljenje sajta išlo bez slike.
 *
 * Napomena: satori u next/og koristi ugrađeni font koji ne pokriva pouzdano
 * č/ć/š/ž/đ, zato je tekst na slici namerno bez dijakritika.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#14100E',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={72} alt="" />
          <div style={{ display: 'flex', fontSize: 34, color: '#F2EAE2', letterSpacing: -0.5 }}>
            Duck Family Team
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              lineHeight: 1.1,
              color: '#F2EAE2',
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Klijenti koji zovu, ne klikovi koji nestaju
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: '#A69A8F', maxWidth: 900 }}>
            Google Ads, Google Business profil i brzi sajtovi
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', width: 64, height: 6, backgroundColor: '#B03A47' }} />
          <div style={{ display: 'flex', fontSize: 28, color: '#D9707C' }}>
            duckfamilyteam.online
          </div>
        </div>
      </div>
    ),
    size,
  )
}
