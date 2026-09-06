'use client'

import { useMemo, useState } from 'react'
import { gbpOsnovnaCena, gbpOsnovniOpis, gbpDodatak, formatEvra } from '@/lib/cenaPodaci'
import { Prekidac } from './deljeno'

export default function KalkulatorGbp() {
  const [pojacano, setPojacano] = useState(false)

  const ukupno = useMemo(
    () => gbpOsnovnaCena + (pojacano ? gbpDodatak.cena : 0),
    [pojacano]
  )

  return (
    <div>
      <div className="border border-ink-border rounded-2xl overflow-hidden mb-8">
        <div className="flex items-center justify-between gap-4 p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg">
          <span>
            <span className="block text-ink-text">Vođenje profila</span>
            <span className="block text-sm text-ink-muted mt-1">{gbpOsnovniOpis}</span>
          </span>
          <span className="font-mono text-wine-text whitespace-nowrap shrink-0">
            {formatEvra(gbpOsnovnaCena)} /mes
          </span>
        </div>
        <Prekidac
          id="gbp-pojacano"
          naziv={gbpDodatak.naziv}
          cena={gbpDodatak.cena}
          ucestalost="mesecno"
          ukljucen={pojacano}
          onChange={setPojacano}
        />
      </div>

      <div className="rounded-2xl border border-wine bg-ink-surface p-6 md:p-8 shadow-lg shadow-wine/10" aria-live="polite">
        <div className="font-mono text-xs uppercase tracking-widest text-wine-text mb-3">Mesečno</div>
        <div className="font-display font-medium text-3xl md:text-4xl tracking-tight">
          {formatEvra(ukupno)}
        </div>
      </div>
    </div>
  )
}
