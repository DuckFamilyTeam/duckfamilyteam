'use client'

import { useMemo, useState } from 'react'
import { adsStavke, analizaOpcije, formatEvra, type AnalizaOpcija } from '@/lib/cenaPodaci'
import { Prekidac, Brojac, RadioPilule } from './deljeno'

export default function KalkulatorAds() {
  const pocetnaStanja: Record<string, boolean> = {}
  for (const stavka of adsStavke) {
    if (!stavka.brojac) pocetnaStanja[stavka.id] = !!stavka.podrazumevano
  }

  const [ukljuceno, setUkljuceno] = useState<Record<string, boolean>>(pocetnaStanja)
  const [brojKampanja, setBrojKampanja] = useState(1)
  const [analizaId, setAnalizaId] = useState<AnalizaOpcija['id']>('bez')

  const analiza = analizaOpcije.find((a) => a.id === analizaId) ?? analizaOpcije[0]

  const { mesecno, jednokratno } = useMemo(() => {
    let mesecno = 0
    let jednokratno = analiza.cena

    for (const stavka of adsStavke) {
      if (stavka.brojac) {
        if (ukljuceno['postavka-aktivna']) jednokratno += stavka.cena * brojKampanja
        continue
      }
      if (!ukljuceno[stavka.id]) continue
      if (stavka.ucestalost === 'mesecno') mesecno += stavka.cena
      else jednokratno += stavka.cena
    }

    return { mesecno, jednokratno }
  }, [ukljuceno, brojKampanja, analiza])

  const postavkaStavka = adsStavke.find((s) => s.brojac)!
  const ostaleStavke = adsStavke.filter((s) => !s.brojac)

  return (
    <div>
      <div className="border border-ink-border rounded-2xl overflow-hidden mb-6">
        {ostaleStavke.map((stavka) => (
          <Prekidac
            key={stavka.id}
            id={`ads-${stavka.id}`}
            naziv={stavka.naziv}
            cena={stavka.cena}
            ucestalost={stavka.ucestalost === 'mesecno' ? 'mesecno' : 'jednokratno'}
            ukljucen={!!ukljuceno[stavka.id]}
            onChange={(vrednost) => setUkljuceno((prethodno) => ({ ...prethodno, [stavka.id]: vrednost }))}
          />
        ))}

        <label
          htmlFor="ads-postavka-prekidac"
          className="flex items-center justify-between gap-4 p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg cursor-pointer"
        >
          <span>
            <span className="block text-ink-text">{postavkaStavka.naziv}</span>
            <span className="block font-mono text-wine-text text-sm mt-1">
              +{postavkaStavka.cena.toLocaleString('sr-RS')} € po kampanji
            </span>
          </span>
          <span className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-ink-border-strong bg-ink-bg transition-colors has-[:checked]:bg-wine has-[:checked]:border-wine">
            <input
              id="ads-postavka-prekidac"
              type="checkbox"
              className="peer sr-only"
              checked={!!ukljuceno['postavka-aktivna']}
              onChange={(e) =>
                setUkljuceno((prethodno) => ({ ...prethodno, ['postavka-aktivna']: e.target.checked }))
              }
            />
            <span className="inline-block h-5 w-5 translate-x-1 rounded-full bg-ink-muted transition-transform peer-checked:translate-x-6 peer-checked:bg-ink-text" />
          </span>
        </label>
        {ukljuceno['postavka-aktivna'] && (
          <Brojac
            id="ads-postavka-broj"
            naziv="Broj kampanja za postavku"
            cena={postavkaStavka.cena}
            jedinica="kampanju"
            vrednost={brojKampanja}
            onChange={setBrojKampanja}
            min={1}
          />
        )}
      </div>

      <div className="border border-ink-border rounded-2xl p-6 md:p-8 mb-8">
        <h3 className="font-display font-medium text-xl mb-4">Analiza naloga</h3>
        <RadioPilule naziv="Analiza naloga" opcije={analizaOpcije} vrednost={analizaId} onChange={setAnalizaId} />
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
        Ovo je naša naknada za vođenje i postavku. Budžet koji ide direktno Google-u za prikazivanje
        oglasa je poseban i dogovara se prema vašim ciljevima.
      </p>
    </div>
  )
}
