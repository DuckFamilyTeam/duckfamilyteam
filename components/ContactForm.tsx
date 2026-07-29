'use client'

import { useState } from 'react'
import { contactSchema } from '@/lib/validation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value ?? '',
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? '',
      website: (form.elements.namedItem('website') as HTMLInputElement)?.value ?? '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '',
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
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18049467991/PY7bCL26jsscENeM1J5D',
          })
        }
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'form_submit' })
        form.reset()
        setStatus('success')
      } else {
        setErrors(json.errors ?? {})
        setFormError(json.errors?.form ?? '')
        setStatus('error')
      }
    } catch {
      setFormError('Došlo je do greške. Pozovite nas ili pokušajte ponovo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-16 text-center space-y-4">
        <p className="font-display font-medium text-3xl text-wine-bright">Poruka poslata!</p>
        <p className="text-ink-muted text-sm">
          Hvala na poverenju. Javljamo se u najkraćem roku.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 md:space-y-6">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Vaše ime"
            className="w-full p-4 md:p-5 bg-ink-bg border border-ink-border rounded-xl outline-none focus:ring-2 focus:ring-wine text-ink-text placeholder:text-ink-muted text-sm"
          />
          {errors.name && <p className="text-wine-bright text-xs mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            className="w-full p-4 md:p-5 bg-ink-bg border border-ink-border rounded-xl outline-none focus:ring-2 focus:ring-wine text-ink-text placeholder:text-ink-muted text-sm"
          />
          {errors.phone && <p className="text-wine-bright text-xs mt-1.5">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <input
          type="text"
          name="website"
          placeholder="Vaš sajt (opciono)"
          className="w-full p-4 md:p-5 bg-ink-bg border border-ink-border rounded-xl outline-none focus:ring-2 focus:ring-wine text-ink-text placeholder:text-ink-muted text-sm"
        />
        {errors.website && <p className="text-wine-bright text-xs mt-1.5">{errors.website}</p>}
      </div>
      <textarea
        name="message"
        rows={4}
        placeholder="Vaši ciljevi?"
        className="w-full p-4 md:p-5 bg-ink-bg border border-ink-border rounded-xl outline-none focus:ring-2 focus:ring-wine text-ink-text placeholder:text-ink-muted text-sm resize-none"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-wine hover:bg-wine-bright text-ink-text p-5 rounded-xl font-medium text-lg transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Slanje...' : 'Zakaži besplatnu konsultaciju'}
      </button>
      {formError && (
        <p className="text-wine-bright text-sm font-medium text-center">{formError}</p>
      )}
    </form>
  )
}
