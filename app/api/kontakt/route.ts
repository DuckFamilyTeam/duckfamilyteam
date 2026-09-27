import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'
import { checkRateLimit, clientIp, isSameOrigin } from '@/lib/rateLimit'

const FORMSPREE_ENDPOINT =
  process.env.FORMSPREE_CONTACT_ENDPOINT ?? 'https://formspree.io/f/mgoppzqp'

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ ok: false, errors: { form: 'Neispravan zahtev.' } }, { status: 403 })
  }

  const { allowed, retryAfterSeconds } = checkRateLimit(`kontakt:${clientIp(req.headers)}`, {
    limit: 5,
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

  const parsed = contactSchema.safeParse(body)
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

  // Honeypot je popunjen — bot. Vraćamo uspeh da skripta ne uči šta je zapelo,
  // ali ne prosleđujemo ništa dalje.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true })
  }

  // Poslato brže nego što čovek može da popuni formu — isto kao honeypot.
  if (typeof parsed.data.elapsed === 'number' && parsed.data.elapsed < 3000) {
    return NextResponse.json({ ok: true })
  }

  const { company: _honeypot, elapsed: _elapsed, source, ...contact } = parsed.data

  try {
    const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...contact,
        // Razdvaja ozbiljne upite od newsletter prijava u istom inboxu.
        // CR/LF se izbacuju iz svega što ide u zaglavlje poruke (subject), da se
        // kroz polje ne bi ubacilo dodatno zaglavlje (email header injection).
        _subject: `Upit sa sajta${source ? `: ${source.replace(/[\r\n]+/g, ' ')}` : ''}`,
        stranica: source || '/',
      }),
    })

    if (!formspreeRes.ok) {
      return NextResponse.json(
        { ok: false, errors: { form: 'Slanje nije uspelo. Pokušajte ponovo.' } },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: 'Slanje nije uspelo. Pokušajte ponovo.' } },
      { status: 502 },
    )
  }
}
