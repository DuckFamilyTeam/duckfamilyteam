'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'

const STORAGE_KEY = 'cookie_consent'

/**
 * Klasa na <html> koja drži baner vidljivim.
 *
 * Postavlja je blokirajuća inline skripta u layoutu, PRE prvog paint-a, kad u
 * localStorage nema izbora. Baner je zato u HTML-u od servera i iscrta se zajedno
 * sa ostatkom stranice, umesto tek posle hidracije.
 *
 * Zašto je to bitno: ranije se baner montirao u `useEffect`-u, pa se pojavljivao
 * sekundu i više posle sadržaja. Kao najveći tekstualni blok na prvom ekranu
 * telefona postajao je LCP element, i LCP je na svim stranicama stajao na ~3 s
 * (Lighthouse mobilni, 2026-09-27, `p#kolacici-opis`). Sad se crta odmah.
 */
export const COOKIE_OPEN_CLASS = 'cc-open'

/** Događaj kojim bilo koji deo sajta može ponovo da otvori izbor o kolačićima. */
export const COOKIE_SETTINGS_EVENT = 'duck:open-cookie-settings'

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))
}

/**
 * Učitava gtag.js tek posle pristanka (Consent Mode, osnovni režim).
 *
 * Ranije se gtag.js učitavao na svakoj stranici odmah, sa `denied` stanjem
 * (napredni režim). To i dalje šalje Google-u zahteve bez kolačića pre izbora,
 * a EDPB smernice 2/2023 obuhvataju i takve pingove. Sada Google ne dobija
 * ništa dok posetilac ne klikne „Prihvatam“. Usput stranica za posetioca koji
 * nije pristao ne preuzima ~150 KB tuđeg JavaScript-a.
 */
export function loadGoogleAnalytics(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById('ga4-gtag')) return
  const s = document.createElement('script')
  s.id = 'ga4-gtag'
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(s)
}

function applyConsent(granted: boolean) {
  // Reklamni tagovi su uklonjeni sa sajta, pa se ad_* ne traži ni ne odobrava.
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
    })
  }
  if (granted) loadGoogleAnalytics()
  try {
    localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
  } catch {
    /* privatni režim bez localStorage — izbor važi samo za ovu posetu */
  }
}

function setOpen(open: boolean) {
  document.documentElement.classList.toggle(COOKIE_OPEN_CLASS, open)
}

export default function CookieConsent() {
  const [current, setCurrent] = useState<'granted' | 'denied' | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const open = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      setCurrent(stored === 'granted' ? 'granted' : stored === 'denied' ? 'denied' : null)
    } catch {
      setCurrent(null)
    }
    setOpen(true)
    // Fokus ide na baner kad ga posetilac sam otvori iz futera, da korisnik
    // tastature ne mora da protabuje celu stranicu do njega.
    requestAnimationFrame(() => panelRef.current?.focus())
  }, [])

  // Povlačenje pristanka mora da bude jednako lako kao davanje — futer zove
  // openCookieSettings() i baner se vraća sa trenutnim izborom.
  useEffect(() => {
    window.addEventListener(COOKIE_SETTINGS_EVENT, open)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, open)
  }, [open])

  function handleChoice(granted: boolean) {
    applyConsent(granted)
    setCurrent(granted ? 'granted' : 'denied')
    setOpen(false)
  }

  // Baner je uvek u DOM-u; vidljivost određuje klasa `cc-open` na <html>
  // (globals.css). Bez JavaScript-a klasa se nikad ne postavi, pa baner ostaje
  // skriven — a bez JavaScript-a ni analitika ionako ne radi.
  return (
    <div className="cc-banner fixed bottom-0 inset-x-0 z-[200] p-3 md:p-5">
      <div
        ref={panelRef}
        role="region"
        aria-labelledby="kolacici-naslov"
        tabIndex={-1}
        className="max-w-2xl mx-auto bg-ink-surface border border-ink-border-strong rounded-2xl p-4 md:p-5 shadow-2xl flex flex-col md:flex-row md:items-center gap-3 md:gap-5"
      >
        <div className="flex-1">
          <h2 id="kolacici-naslov" className="text-ink-text text-sm font-medium mb-1">
            Kolačići
          </h2>
          <p id="kolacici-opis" className="text-ink-muted text-xs md:text-sm leading-relaxed">
            Koristimo kolačiće samo za analitiku posete (Google Analytics 4), i to tek kad ih
            prihvatite. Reklamnih kolačića nema. Sajt radi isto bez obzira na izbor.{' '}
            <Link
              href="/politika-kolacica"
              // Bez prefetch-a: baner je u kadru na svakoj prvoj poseti, pa bi se
              // /politika-kolacica preuzimala svaki put, pre nego što posetilac išta klikne.
              prefetch={false}
              className="text-wine-text hover:text-ink-text transition underline underline-offset-2"
            >
              Više o kolačićima
            </Link>
            {current && (
              <span className="block mt-1 text-ink-muted">
                Trenutni izbor: {current === 'granted' ? 'prihvaćeno' : 'odbijeno'}.
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="flex-1 md:flex-none border border-ink-border-strong hover:border-wine-text text-ink-text px-5 py-3 rounded-xl text-sm font-medium transition-colors"
          >
            Odbijam
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            // Isti izgled kao „Odbijam“: izbor ne sme da bude vizuelno usmeren
            // ka prihvatanju (EDPB smernice 3/2022 o obmanjujućem dizajnu).
            className="flex-1 md:flex-none border border-ink-border-strong hover:border-wine-text text-ink-text px-5 py-3 rounded-xl text-sm font-medium transition-colors"
          >
            Prihvatam
          </button>
        </div>
      </div>
    </div>
  )
}
