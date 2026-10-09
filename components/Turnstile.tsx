'use client'

import { useEffect, useRef } from 'react'

/**
 * Cloudflare Turnstile widget (provera da pošiljalac nije bot).
 *
 * Ne prikazuje se i ne učitava ništa dok `NEXT_PUBLIC_TURNSTILE_SITE_KEY` nije
 * postavljen (vrednost se upisuje u bundle pri build-u, pa posle dodavanja
 * ključa na Vercelu treba novi deploy). Serverska strana: `lib/turnstile.ts`.
 *
 * Skripta se učitava tek kad forma priđe ekranu ILI kad posetilac prvi put
 * dodirne bilo koju formu na stranici — šta god se desi prvo. Ne pri otvaranju
 * stranice: forma je u futeru SVAKE stranice, a skripta treće strane na početku
 * učitavanja bi pogoršala LCP i TBT, koji su već na granici.
 *
 * Zašto dva okidača, a ne samo vidljivost: `IntersectionObserver` ne radi dok
 * je kartica u pozadini (pregledač ne iscrtava stranicu), a i inače bi posetilac
 * koji odmah počne da kuca mogao da stigne do dugmeta pre nego što token stigne.
 * Okidač na prvu interakciju to pokriva.
 *
 * `appearance: 'interaction-only'`: posetilac vidi widget samo ako Cloudflare
 * traži dodatnu proveru; inače se provera završi nevidljivo.
 */

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

type TurnstileApi = {
  render: (el: HTMLElement, opcije: Record<string, unknown>) => string
  reset: (widgetId?: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let ucitavanje: Promise<void> | null = null

function ucitajSkriptu(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  if (!ucitavanje) {
    ucitavanje = new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      s.async = true
      s.onload = () => resolve()
      s.onerror = () => {
        ucitavanje = null
        reject(new Error('Turnstile skripta nije učitana'))
      }
      document.head.appendChild(s)
    })
  }
  return ucitavanje
}

export const turnstileUkljucen = Boolean(SITE_KEY)

/**
 * `onToken` dobija token kad je provera gotova i prazan string kad token istekne
 * ili provera pukne. `resetSignal`: svaka promena broja traži nov token (token
 * važi za jedno slanje, pa forma posle odgovora servera povećava broj).
 */
export default function Turnstile({
  onToken,
  resetSignal = 0,
}: {
  onToken: (token: string) => void
  resetSignal?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | undefined>(undefined)
  // Callback u ref-u: roditelj sme da prosledi novu funkciju na svakom renderu
  // a da se widget zbog toga ne uklanja i ne crta ponovo.
  const onTokenRef = useRef(onToken)
  onTokenRef.current = onToken

  useEffect(() => {
    const el = ref.current
    if (!SITE_KEY || !el) return
    let otkazano = false
    let pokrenuto = false

    function pokreni() {
      if (pokrenuto || otkazano) return
      pokrenuto = true
      io.disconnect()
      skloniSlusace()
      ucitajSkriptu()
        .then(() => {
          if (otkazano || !window.turnstile || !el) return
          widgetId.current = window.turnstile.render(el, {
            sitekey: SITE_KEY as string,
            theme: 'dark',
            size: 'flexible',
            appearance: 'interaction-only',
            callback: (token: string) => onTokenRef.current(token),
            'expired-callback': () => onTokenRef.current(''),
            'error-callback': () => onTokenRef.current(''),
          })
        })
        .catch(() => {
          // Skripta nije učitana (mreža, blokator sadržaja). Forma ostaje
          // upotrebljiva: komponenta koja je koristi javlja šta dalje.
        })
    }

    const io = new IntersectionObserver(
      (unosi) => {
        if (unosi.some((u) => u.isIntersecting)) pokreni()
      },
      { rootMargin: '400px' },
    )
    io.observe(el)

    // Drugi okidač: prvi dodir forme kojoj ovaj widget pripada.
    const forma = el.closest('form')
    function skloniSlusace() {
      forma?.removeEventListener('focusin', pokreni)
      forma?.removeEventListener('input', pokreni)
      forma?.removeEventListener('pointerdown', pokreni)
    }
    forma?.addEventListener('focusin', pokreni)
    forma?.addEventListener('input', pokreni)
    forma?.addEventListener('pointerdown', pokreni)

    return () => {
      otkazano = true
      io.disconnect()
      skloniSlusace()
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current)
      widgetId.current = undefined
    }
  }, [])

  useEffect(() => {
    if (resetSignal && widgetId.current && window.turnstile) {
      onTokenRef.current('')
      window.turnstile.reset(widgetId.current)
    }
  }, [resetSignal])

  if (!SITE_KEY) return null
  return <div ref={ref} />
}
