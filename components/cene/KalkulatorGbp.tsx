'use client'

import { useMemo, useState } from 'react'
import {
  gbpPostavkaCena,
  gbpPostavkaOpis,
  gbpOsnovnaCena,
  gbpOsnovniOpis,
  gbpDodatak,
  formatEvra,
} from '@/lib/cenaPodaci'
import { Prekidac } from './deljeno'

export default function KalkulatorGbp() {
  // Postavka je uključena po podrazumevanom, jer je većini klijenata profil
  // neverifikovan ili nikad nije bio podešen. Isključuje je onaj ko već ima
  // uredan profil i hoće samo vođenje.
  const [postavka, setPostavka] = useState(true)
  const [pojacano, setPojacano] = useState(false)

  const mesecno = useMemo(
    () => gbpOsnovnaCena + (pojacano ? gbpDodatak.cena : 0),
    [pojacano]
  )
  const jednokratno = postavka ? gbpPostavkaCena : 0

  return (
    <div>
      <div className="border border-ink-border rounded-2xl overflow-hidden mb-8">
        <Prekidac
          id="gbp-postavka"
          naziv="Postavljanje i verifikacija profila"
          opis={gbpPostavkaOpis}
          cena={gbpPostavkaCena}
          ucestalost="jednokratno"
          ukljucen={postavka}
          onChange={setPostavka}
        />
        <div className="flex items-center justify-between gap-4 p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg">
          <span>
            <span className="block text-ink-text">Mesečno vođenje profila</span>
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

      <div className="grid sm:grid-cols-2 gap-4" aria-live="polite">
        <div className="rounded-2xl border border-ink-border bg-ink-bg p-6 md:p-8">
          <div className="font-mono text-xs uppercase tracking-widest text-wine-text mb-3">Jednokratno</div>
          <div className="font-display font-medium text-3xl md:text-4xl tracking-tight">
            {formatEvra(jednokratno)}
          </div>
        </div>
        <div className="rounded-2xl border border-wine bg-ink-surface p-6 md:p-8 shadow-lg shadow-wine/10">
          <div className="font-mono text-xs uppercase tracking-widest text-wine-text mb-3">Mesečno</div>
          <div className="font-display font-medium text-3xl md:text-4xl tracking-tight">
            {formatEvra(mesecno)}
          </div>
        </div>
      </div>
      <p className="text-sm text-ink-muted mt-6">
        Postavljanje i verifikacija se plaćaju jednom, na početku. Mesečno vođenje je po profilu,
        pa pet poslovnica znači pet profila.
      </p>
    </div>
  )
}
