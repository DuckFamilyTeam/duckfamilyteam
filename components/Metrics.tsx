import Link from 'next/link'

export type Metrika = {
  /** Konačna vrednost. Server je ispisuje kao tekst, JS je samo animira do nje. */
  broj: number
  decimale?: number
  sufiks?: string
  opis: string
  href?: string
}

function formatiraj(m: Metrika): string {
  return m.broj.toFixed(m.decimale ?? 0).replace('.', ',') + (m.sufiks ?? '')
}

/**
 * Traka sa merljivim rezultatima.
 *
 * Brojevi se ispisuju na serveru u konačnom obliku — animacija odbrojavanja je
 * čisto vizuelna nadgradnja. Bez JavaScripta, i za Googlebot, ovde stoji tačan
 * broj, ne nula.
 *
 * Svaka metrika prima samo proverive vrednosti. Ako neku ne možeš da potkrepiš,
 * bolje je izbaciti je nego zaokružiti naviše.
 */
export default function Metrics({ metrike }: { metrike: Metrika[] }) {
  if (metrike.length === 0) return null

  return (
    <section className="py-20 px-6 md:px-12 bg-ink-surface">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12" data-rv="up">
          <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
            Brojevi
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-ink-text tracking-tight">
            Rezultati, ne obećanja
          </h2>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrike.map((m, i) => {
            const sadrzaj = (
              <>
                <span
                  className="block font-display font-semibold text-5xl text-wine-text leading-none tabular-nums"
                  data-count={m.broj}
                  data-decimals={m.decimale ?? 0}
                  data-suffix={m.sufiks ?? ''}
                >
                  {formatiraj(m)}
                </span>
                <span className="block text-sm text-ink-muted mt-4 leading-relaxed">{m.opis}</span>
                <span
                  aria-hidden="true"
                  className="metric-line absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-wine to-wine-text"
                />
              </>
            )

            return (
              <li key={m.opis} data-rv="up" data-rv-delay={i * 80}>
                {m.href ? (
                  <Link
                    href={m.href}
                    className="lift relative block h-full bg-ink-bg border border-ink-border hover:border-ink-border-strong rounded-2xl p-7 overflow-hidden"
                  >
                    {sadrzaj}
                  </Link>
                ) : (
                  <div className="lift relative h-full bg-ink-bg border border-ink-border rounded-2xl p-7 overflow-hidden">
                    {sadrzaj}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
