'use client'

import { useState } from 'react'
import Link from 'next/link'
import { proveriNewsletter } from '@/lib/validacijaKlijent'
import { trackLead } from '@/lib/analytics'
import Turnstile, { turnstileUkljucen } from '@/components/Turnstile'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  // Trenutak prikaza forme — ruta odbacuje slanje brže od ljudskog.
  const [prikazanaU] = useState(() => Date.now())
  // Turnstile token (prazan dok provera traje ili ako je isključena) i signal za nov token posle slanja.
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileReset, setTurnstileReset] = useState(0)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '',
      consent: (form.elements.namedItem('consent') as HTMLInputElement)?.checked ?? false,
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value ?? '',
      elapsed: Date.now() - prikazanaU,
      turnstileToken,
    }

    // Brza provera u browseru; merodavna je Zod schema na serveru (vidi lib/validacijaKlijent.ts).
    const parsed = proveriNewsletter(data)
    if (!parsed.success) {
      setError(Object.values(parsed.errors)[0] ?? 'Proverite unete podatke.')
      setStatus('error')
      return
    }

    if (turnstileUkljucen && !turnstileToken) {
      setError('Automatska provera još traje. Sačekajte sekundu i pošaljite ponovo.')
      setStatus('error')
      return
    }

    setError('')
    setStatus('sending')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      const json = await res.json()

      if (res.ok && json.ok) {
        trackLead('newsletter')
        form.reset()
        setStatus('success')
      } else {
        setError(json.errors?.form ?? json.errors?.email ?? 'Prijava nije uspela.')
        setStatus('error')
      }
    } catch {
      setError('Došlo je do greške. Pokušajte ponovo.')
      setStatus('error')
    } finally {
      setTurnstileReset((n) => n + 1)
    }
  }

  if (status === 'success') {
    return (
      <p role="status" aria-live="polite" className="text-ink-text text-base">
        Prijava je zabeležena. Hvala, javljamo se kad izađe nov tekst.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative w-full max-w-md mx-auto space-y-4">
      {/* Jedan red i na 390 px, i dugme uokvireno umesto punog wine bloka:
          ispod je i Footer-ov wine CTA, pa su na kraju članka stajala dva
          puna dugmeta zaredom (vizuelna provera, krug 12, ispravka 3c). */}
      <div className="flex flex-row gap-2 sm:gap-3">
        <div className="flex-1 text-left">
          <label htmlFor="newsletter-email" className="sr-only">
            Email adresa
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="vasa@adresa.rs"
            aria-invalid={status === 'error' ? true : undefined}
            aria-describedby={status === 'error' ? 'newsletter-greska' : undefined}
            className="w-full p-4 bg-ink-bg border border-ink-border-strong rounded-xl outline-none focus:ring-2 focus:ring-wine-text focus:border-wine-text aria-[invalid=true]:border-wine-text aria-[invalid=true]:border-2 text-ink-text placeholder:text-ink-muted text-sm transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="border border-ink-border-strong hover:border-wine hover:text-wine-text text-ink-text px-4 sm:px-6 py-4 rounded-xl font-medium text-sm whitespace-nowrap transition-colors disabled:opacity-60"
        >
          {status === 'sending' ? 'Slanje…' : 'Prijavi se'}
        </button>
      </div>

      <label
        htmlFor="newsletter-consent"
        className="flex items-start gap-3 text-left text-ink-muted text-xs leading-relaxed cursor-pointer"
      >
        <input
          id="newsletter-consent"
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 flex-shrink-0 accent-wine"
        />
        <span>
          Saglasan sam da primam povremene email poruke o novim tekstovima. Odjava je moguća u
          svakom trenutku. Detalji u{' '}
          {/* Podvlačenje iz istog razloga kao u ContactForm: kontrast linka prema okolnom tekstu je 1.16:1. */}
          <Link href="/politika-privatnosti" className="text-wine-text underline hover:text-ink-text transition">
            politici privatnosti
          </Link>
          .
        </span>
      </label>

      <Turnstile onToken={setTurnstileToken} resetSignal={turnstileReset} />

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute w-px h-px -m-px overflow-hidden opacity-0">
        <label htmlFor="newsletter-company">Ne popunjavajte ovo polje</label>
        <input id="newsletter-company" type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p id="newsletter-greska" role="alert" className="text-wine-text text-xs">
          {error}
        </p>
      )}
    </form>
  )
}
