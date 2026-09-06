'use client'

import { useMemo, useState } from 'react'
import {
  tipoviBiznisa,
  dodaciSajt,
  rokovi,
  mesecnoOdrzavanje,
  napomenaODomenu,
  formatEvra,
  type Rok,
} from '@/lib/cenaPodaci'
import { Prekidac, Brojac, RadioPilule, RezultatKartica } from './deljeno'

const kategorije = Array.from(new Set(tipoviBiznisa.map((t) => t.kategorija)))

export default function KalkulatorSajt() {
  const [tipId, setTipId] = useState(tipoviBiznisa[0].id)
  const [prekidaci, setPrekidaci] = useState<Record<string, boolean>>({})
  const [brojaci, setBrojaci] = useState<Record<string, number>>({})
  const [rokId, setRokId] = useState<Rok['id']>(rokovi[0].id)

  const tip = tipoviBiznisa.find((t) => t.id === tipId) ?? tipoviBiznisa[0]
  const rok = rokovi.find((r) => r.id === rokId) ?? rokovi[0]

  const ukupno = useMemo(() => {
    const baza = tip.cena ?? 0
    let dodaci = 0
    for (const dodatak of dodaciSajt) {
      if (dodatak.tip === 'prekidac' && prekidaci[dodatak.id]) {
        dodaci += dodatak.cena
      }
      if (dodatak.tip === 'brojac') {
        dodaci += dodatak.cena * (brojaci[dodatak.id] ?? 0)
      }
    }
    return (baza + dodaci) * rok.mnozilac
  }, [tip, prekidaci, brojaci, rok])

  const jeDrugo = tip.cena === null

  return (
    <div>
      {/* Korak 1 — tip biznisa */}
      <div className="border border-ink-border rounded-2xl p-6 md:p-8 mb-6">
        <div className="flex items-center gap-3 mb-1">
          <span className="flex items-center justify-center h-7 w-7 rounded-full bg-wine text-ink-text font-mono text-sm shrink-0">
            1
          </span>
          <h3 className="font-display font-medium text-xl">Tip biznisa</h3>
        </div>
        <p className="text-sm text-ink-muted mb-5 ml-10">Glavni faktor — određuje baznu vrednost.</p>
        <div className="ml-10">
          <label htmlFor="tip-biznisa" className="sr-only">
            Izaberite tip biznisa
          </label>
          <select
            id="tip-biznisa"
            value={tipId}
            onChange={(e) => setTipId(e.target.value)}
            className="w-full bg-ink-bg border border-ink-border-strong rounded-xl px-4 py-3 text-ink-text focus:outline-none focus:border-wine"
          >
            {kategorije.map((kategorija) => (
              <optgroup key={kategorija} label={kategorija}>
                {tipoviBiznisa
                  .filter((t) => t.kategorija === kategorija)
                  .map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.naziv}
                      {t.cena !== null ? ` — ${formatEvra(t.cena)}` : ''}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      {/* Korak 2 — dodaci */}
      <div className="border border-ink-border rounded-2xl overflow-hidden mb-6">
        <div className="p-6 md:p-8 pb-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="flex items-center justify-center h-7 w-7 rounded-full bg-wine text-ink-text font-mono text-sm shrink-0">
              2
            </span>
            <h3 className="font-display font-medium text-xl">Dodaci</h3>
          </div>
          <p className="text-sm text-ink-muted mb-5 ml-10">
            Svaki dodatak diže cenu po tome šta donosi klijentu.
          </p>
        </div>
        <div>
          {dodaciSajt.map((dodatak) =>
            dodatak.tip === 'prekidac' ? (
              <Prekidac
                key={dodatak.id}
                id={`dodatak-${dodatak.id}`}
                naziv={dodatak.naziv}
                cena={dodatak.cena}
                ukljucen={!!prekidaci[dodatak.id]}
                onChange={(vrednost) =>
                  setPrekidaci((prethodno) => ({ ...prethodno, [dodatak.id]: vrednost }))
                }
              />
            ) : (
              <Brojac
                key={dodatak.id}
                id={`dodatak-${dodatak.id}`}
                naziv={dodatak.naziv}
                cena={dodatak.cena}
                jedinica={dodatak.jedinica}
                vrednost={brojaci[dodatak.id] ?? 0}
                onChange={(vrednost) =>
                  setBrojaci((prethodno) => ({ ...prethodno, [dodatak.id]: vrednost }))
                }
              />
            )
          )}
        </div>
      </div>

      {/* Korak 3 — rok */}
      <div className="border border-ink-border rounded-2xl p-6 md:p-8 mb-10">
        <div className="flex items-center gap-3 mb-1">
          <span className="flex items-center justify-center h-7 w-7 rounded-full bg-wine text-ink-text font-mono text-sm shrink-0">
            3
          </span>
          <h3 className="font-display font-medium text-xl">Rok</h3>
        </div>
        <p className="text-sm text-ink-muted mb-5 ml-10">Kraći rok množi finalnu cenu.</p>
        <div className="ml-10">
          <RadioPilule naziv="Rok izrade" opcije={rokovi} vrednost={rokId} onChange={setRokId} />
        </div>
      </div>

      {/* Rezultat */}
      {jeDrugo ? (
        <div className="border border-ink-border rounded-2xl p-8 text-center mb-8" aria-live="polite">
          <p className="text-ink-text">
            Za biznise van liste cena se dogovara pojedinačno, na osnovu brifa.
          </p>
        </div>
      ) : (
        <div className="mb-8" aria-live="polite">
          <RezultatKartica
            naslov="Cena za vaš projekat"
            cena={formatEvra(ukupno)}
            opis="Jednokratna cena izrade, na osnovu izabranog tipa biznisa, dodataka i roka."
            istaknuto
          />
        </div>
      )}

      <div className="text-sm text-ink-muted space-y-2 border-t border-ink-border pt-6">
        <p>
          <span className="text-ink-text font-medium">Hosting i održavanje: </span>
          {formatEvra(mesecnoOdrzavanje)} mesečno, posebno od jednokratne cene izrade.
        </p>
        <p>{napomenaODomenu}</p>
      </div>
    </div>
  )
}
