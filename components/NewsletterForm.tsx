'use client'

import { useState } from 'react'
import Link from 'next/link'
import { newsletterSchema } from '@/lib/validation'
import { trackLead } from '@/lib/analytics'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '',
      consent: (form.elements.namedItem('consent') as HTMLInputElement)?.checked ?? false,
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value ?? '',
    }

    const parsed = newsletterSchema.safeParse(data)
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Proverite unete podatke.')
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
    }
  }

  if (status === 'success') {
    return (
      <p role="status" aria-live="polite" className="text-ink-text text-base">
        Prijava je zabeležena. Hvala — javljamo se kad izađe nov tekst.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative w-full max-w-md mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
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
            className="w-full p-4 bg-ink-bg border border-ink-border-strong rounded-xl outline-none focus:ring-2 focus:ring-wine-text focus:border-wine-text text-ink-text placeholder:text-ink-muted text-sm transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-wine hover:bg-wine-bright text-ink-text px-6 py-4 rounded-xl font-medium text-sm whitespace-nowrap transition-colors disabled:opacity-60"
        >
          {status === 'sending' ? 'Slanje...' : 'Prijavi se'}
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
