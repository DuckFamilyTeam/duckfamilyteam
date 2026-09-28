'use client'

import { useRef, type KeyboardEvent, type ReactNode } from 'react'

/**
 * Zajedničke, sitne UI komponente za sve kalkulatore na /cene.
 * Namerno bez spoljnih biblioteka — isti pristup kao ostatak sajta.
 */

// ── Prekidač (uključi/isključi dodatak) ─────────────────────────────────────

export function Prekidac({
  id,
  naziv,
  opis,
  cena,
  ucestalost = 'jednokratno',
  ukljucen,
  onChange,
}: {
  id: string
  naziv: string
  opis?: string
  cena: number
  ucestalost?: 'jednokratno' | 'mesecno'
  ukljucen: boolean
  onChange: (vrednost: boolean) => void
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-center justify-between gap-4 p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg cursor-pointer"
    >
      <span>
        <span className="block text-ink-text">{naziv}</span>
        {opis && <span className="block text-sm text-ink-muted mt-1">{opis}</span>}
      </span>
      <span className="flex items-center gap-4 shrink-0">
        <span className="font-mono text-wine-text whitespace-nowrap text-sm">
          +{cena.toLocaleString('sr-RS')} € {ucestalost === 'mesecno' && '/mes'}
        </span>
        <span className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-ink-border-strong bg-ink-bg transition-colors has-[:checked]:bg-wine has-[:checked]:border-wine">
          <input
            id={id}
            type="checkbox"
            className="peer sr-only"
            checked={ukljucen}
            onChange={(e) => onChange(e.target.checked)}
          />
          <span className="inline-block h-5 w-5 translate-x-1 rounded-full bg-ink-muted transition-transform peer-checked:translate-x-6 peer-checked:bg-ink-text" />
        </span>
      </span>
    </label>
  )
}

// ── Brojač (količina, npr. broj dodatnih stranica) ──────────────────────────

export function Brojac({
  id,
  naziv,
  opis,
  cena,
  jedinica,
  vrednost,
  onChange,
  min = 0,
  max = 20,
}: {
  id: string
  naziv: string
  opis?: string
  cena: number
  jedinica?: string
  vrednost: number
  onChange: (vrednost: number) => void
  min?: number
  max?: number
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg">
      <span>
        <span className="block text-ink-text">{naziv}</span>
        {opis && <span className="block text-sm text-ink-muted mt-1">{opis}</span>}
        <span className="block font-mono text-wine-text text-sm mt-1">
          +{cena.toLocaleString('sr-RS')} € {jedinica ? `po ${jedinica}` : ''}
        </span>
      </span>
      <span className="flex items-center gap-3 shrink-0" role="group" aria-label={naziv}>
        <button
          type="button"
          onClick={() => onChange(Math.max(min, vrednost - 1))}
          disabled={vrednost <= min}
          aria-label={`Smanji: ${naziv}`}
          className="h-8 w-8 rounded-full border border-ink-border-strong text-ink-text hover:border-wine disabled:opacity-30 disabled:hover:border-ink-border-strong transition-colors"
        >
          −
        </button>
        <span id={id} className="font-mono w-6 text-center tabular-nums" aria-live="polite">
          {vrednost}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, vrednost + 1))}
          disabled={vrednost >= max}
          aria-label={`Povećaj: ${naziv}`}
          className="h-8 w-8 rounded-full border border-ink-border-strong text-ink-text hover:border-wine disabled:opacity-30 disabled:hover:border-ink-border-strong transition-colors"
        >
          +
        </button>
      </span>
    </div>
  )
}

// ── Tab dugme (izbor kalkulatora) ───────────────────────────────────────────

export function TabDugme({
  id,
  panelId,
  aktivan,
  onClick,
  dugmeRef,
  children,
}: {
  id: string
  panelId: string
  aktivan: boolean
  onClick: () => void
  dugmeRef?: (el: HTMLButtonElement | null) => void
  children: ReactNode
}) {
  return (
    <button
      ref={dugmeRef}
      id={id}
      type="button"
      role="tab"
      aria-selected={aktivan}
      aria-controls={aktivan ? panelId : undefined}
      // Samo aktivan tab je u redosledu Tab-a; ostali se biraju strelicama.
      tabIndex={aktivan ? 0 : -1}
      onClick={onClick}
      className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest px-3 sm:px-4 py-3 min-h-11 rounded-full sm:rounded-full border transition-colors text-center leading-tight sm:whitespace-nowrap ${
        aktivan
          ? 'bg-wine border-wine text-ink-text'
          : 'border-ink-border-strong text-ink-muted hover:text-ink-text hover:border-wine-text'
      }`}
    >
      {children}
    </button>
  )
}

// ── Kartica rezultata ────────────────────────────────────────────────────────

export function RezultatKartica({
  naslov,
  cena,
  opis,
  istaknuto = false,
}: {
  naslov: string
  cena: string
  opis: string
  istaknuto?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 border ${
        istaknuto
          ? 'border-wine bg-ink-surface shadow-lg shadow-wine/10'
          : 'border-ink-border bg-ink-bg'
      }`}
    >
      <div className="font-mono text-xs uppercase tracking-widest text-wine-text mb-3">
        {naslov}
      </div>
      <div className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-3">
        {cena}
      </div>
      <p className="text-sm text-ink-muted leading-relaxed">{opis}</p>
    </div>
  )
}

// ── Radio pilule (npr. izbor roka) ──────────────────────────────────────────

export function RadioPilule<T extends string>({
  naziv,
  opcije,
  vrednost,
  onChange,
}: {
  naziv: string
  opcije: { id: T; naziv: string }[]
  vrednost: T
  onChange: (id: T) => void
}) {
  const refs = useRef<Array<HTMLButtonElement | null>>([])

  // Pun ARIA radiogroup obrazac: jedan Tab ulazi u grupu, strelice menjaju izbor.
  function naTastaturu(e: KeyboardEvent<HTMLDivElement>) {
    const i = opcije.findIndex((o) => o.id === vrednost)
    let sledeci = -1
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') sledeci = (i + 1) % opcije.length
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') sledeci = (i - 1 + opcije.length) % opcije.length
    if (sledeci < 0) return
    e.preventDefault()
    onChange(opcije[sledeci].id)
    refs.current[sledeci]?.focus()
  }

  return (
    <div role="radiogroup" aria-label={naziv} className="flex flex-wrap gap-2" onKeyDown={naTastaturu}>
      {opcije.map((opcija, i) => (
        <button
          key={opcija.id}
          ref={(el) => {
            refs.current[i] = el
          }}
          type="button"
          role="radio"
          aria-checked={vrednost === opcija.id}
          tabIndex={vrednost === opcija.id ? 0 : -1}
          onClick={() => onChange(opcija.id)}
          className={`px-4 py-2.5 rounded-full border text-sm transition-colors ${
            vrednost === opcija.id
              ? 'bg-wine border-wine text-ink-text'
              : 'border-ink-border-strong text-ink-muted hover:text-ink-text hover:border-wine-text'
          }`}
        >
          {opcija.naziv}
        </button>
      ))}
    </div>
  )
}
