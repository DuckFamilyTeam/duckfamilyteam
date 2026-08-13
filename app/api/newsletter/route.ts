import { NextRequest, NextResponse } from 'next/server'
import { newsletterSchema } from '@/lib/validation'
import { checkRateLimit, clientIp, isSameOrigin } from '@/lib/rateLimit'

/**
 * Prijave na newsletter idu na zaseban Formspree endpoint ako je podešen.
 * Ako nije, padaju na isti kao kontakt forma — ali sa jasnim `_subject`, da se
 * u inboxu bar razlikuju od pravih upita. Preporuka: napraviti zasebnu formu
 * na Formspree-u i upisati je u FORMSPREE_NEWSLETTER_ENDPOINT.
 */
const FORMSPREE_ENDPOINT =
  process.env.FORMSPREE_NEWSLETTER_ENDPOINT ??
  process.env.FORMSPREE_CONTACT_ENDPOINT ??
  'https://formspree.io/f/mgoppzqp'

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ ok: false, errors: { form: 'Neispravan zahtev.' } }, { status: 403 })
  }

  const { allowed, retryAfterSeconds } = checkRateLimit(`newsletter:${clientIp(req.headers)}`, {
    limit: 3,
    windowMs: 10 * 60 * 1000,
  })
  if (!allowed) {
    return NextResponse.json(
      { ok: false, errors: { form: 'Previše pokušaja. Pokušajte ponovo za koji minut.' } },
      { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, errors: { form: 'Neispravan zahtev.' } }, { status: 400 })
  }

  const parsed = newsletterSchema.safeParse(body)
  if (!parsed.success) {
    const errors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0]
      if (typeof field === 'string' && !errors[field]) {
        errors[field] = issue.message
      }
    }
    return NextResponse.json({ ok: false, errors }, { status: 400 })
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true })
  }

  try {
    const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        email: parsed.data.email,
        _subject: 'Prijava na newsletter',
        tip: 'newsletter',
        saglasnost: 'da',
      }),
    })

    if (!formspreeRes.ok) {
      return NextResponse.json(
        { ok: false, errors: { form: 'Prijava nije uspela. Pokušajte ponovo.' } },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: 'Prijava nije uspela. Pokušajte ponovo.' } },
      { status: 502 },
    )
  }
}
