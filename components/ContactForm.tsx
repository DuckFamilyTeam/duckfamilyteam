'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contactSchema } from '@/lib/validation'
import { trackLead } from '@/lib/analytics'

type Status = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
  'w-full p-4 md:p-5 bg-ink-bg border border-ink-border-strong rounded-xl outline-none focus:ring-2 focus:ring-wine-text focus:border-wine-text text-ink-text placeholder:text-ink-muted text-sm transition-colors'

const labelClass = 'block font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-2'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState('')
  const pathname = usePathname()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value ?? '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? '',
      website: (form.elements.namedItem('website') as HTMLInputElement)?.value ?? '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '',
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value ?? '',
      source: pathname,
    }

    const parsed = contactSchema.safeParse(data)
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        const field = issue.path[0]
        if (typeof field === 'string' && !fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      }
      setErrors(fieldErrors)
      setFormError('')
      setStatus('error')
      // Fokus na prvo polje sa greškom, da korisnik tastature ne traži gde je pukla forma.
      const firstInvalid = Object.keys(fieldErrors)[0]
      if (firstInvalid) {
        const el = form.elements.namedItem(firstInvalid)
        if (el instanceof HTMLElement) el.focus()
      }
      return
    }

    setErrors({})
    setFormError('')
    setStatus('sending')

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      const json = await res.json()

      if (res.ok && json.ok) {
        trackLead('kontakt_forma', { form_page: pathname })
        form.reset()
        setStatus('success')
      } else {
        setErrors(json.errors ?? {})
        setFormError(json.errors?.form ?? 'Slanje nije uspelo. Pokušajte ponovo.')
        setStatus('error')
      }
    } catch {
      setFormError('Došlo je do greške. Pozovite nas ili pokušajte ponovo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-16 text-center space-y-4" role="status" aria-live="polite">
        <p className="font-display font-medium text-3xl text-wine-text">Poruka poslata!</p>
        <p className="text-ink-muted text-sm">Hvala na poverenju. Javljamo se u najkraćem roku.</p>
        <p className="text-ink-muted text-sm">
          Ako vam se žuri, pozovite{' '}
          <a href="tel:+381643877524" className="text-wine-text hover:text-ink-text transition">
            +381 64 387 7524
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-4 md:space-y-6">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="kontakt-ime" className={labelClass}>
            Ime i prezime
          </label>
          <input
            id="kontakt-ime"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Vaše ime"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'kontakt-ime-greska' : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="kontakt-ime-greska" className="text-wine-text text-xs mt-1.5">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="kontakt-telefon" className={labelClass}>
            Telefon
          </label>
          <input
            id="kontakt-telefon"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="06x xxx xxxx"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? 'kontakt-telefon-greska' : undefined}
            className={fieldClass}
          />
          {errors.phone && (
            <p id="kontakt-telefon-greska" className="text-wine-text text-xs mt-1.5">
              {errors.phone}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="kontakt-sajt" className={labelClass}>
          Vaš sajt <span className="normal-case tracking-normal">(opciono)</span>
        </label>
        <input
          id="kontakt-sajt"
          type="url"
          name="website"
          autoComplete="url"
          inputMode="url"
          placeholder="https://vasadresa.rs"
          aria-invalid={errors.website ? true : undefined}
          aria-describedby={errors.website ? 'kontakt-sajt-greska' : undefined}
          className={fieldClass}
        />
        {errors.website && (
          <p id="kontakt-sajt-greska" className="text-wine-text text-xs mt-1.5">
            {errors.website}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="kontakt-poruka" className={labelClass}>
          Šta vam treba? <span className="normal-case tracking-normal">(opciono)</span>
        </label>
        <textarea
          id="kontakt-poruka"
          name="message"
          rows={4}
          placeholder="Ukratko, šta biste želeli da postignete"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'kontakt-poruka-greska' : undefined}
          className={`${fieldClass} resize-none`}
        />
        {errors.message && (
          <p id="kontakt-poruka-greska" className="text-wine-text text-xs mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — sakriveno od ljudi i od čitača ekrana, vidljivo samo botovima. */}
      <div aria-hidden="true" className="absolute w-px h-px -m-px overflow-hidden opacity-0">
        <label htmlFor="kontakt-company">Ne popunjavajte ovo polje</label>
        <input id="kontakt-company" type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-wine hover:bg-wine-bright text-ink-text p-5 rounded-xl font-medium text-lg transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Slanje...' : 'Zakažite besplatnu konsultaciju'}
      </button>
      <p className="text-ink-muted text-xs text-center leading-relaxed">
        Slanjem prihvatate{' '}
        <Link href="/politika-privatnosti" className="text-wine-text hover:text-ink-text transition">
          politiku privatnosti
        </Link>
        . Podatke koristimo isključivo da vam odgovorimo na upit.
      </p>
      <p role="alert" aria-live="assertive" className="text-wine-text text-sm font-medium text-center">
        {formError}
      </p>
    </form>
  )
}
