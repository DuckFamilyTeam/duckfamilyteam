'use client'

/**
 * Poslednja linija odbrane: greška u samom root layoutu. Tada ne radi ni
 * globals.css, pa su stilovi ovde namerno inline i minimalni.
 */
export default function GlobalnaGreska({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="sr-Latn-RS">
      <body style={{ margin: 0, background: '#14100E', color: '#F2EAE2', fontFamily: 'system-ui, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, textAlign: 'center' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 500, marginBottom: 12 }}>Nešto nije u redu</h1>
            <p style={{ color: '#A69A8F', marginBottom: 24 }}>
              Sajt trenutno ne može da se prikaže. Pozovite nas na{' '}
              <a href="tel:+381643877524" style={{ color: '#D9707C' }}>064 387 7524</a>.
            </p>
            <button
              type="button"
              onClick={reset}
              style={{ background: '#8C2438', color: '#F2EAE2', border: 0, borderRadius: 12, padding: '14px 28px', fontSize: 16, cursor: 'pointer' }}
            >
              Pokušaj ponovo
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
