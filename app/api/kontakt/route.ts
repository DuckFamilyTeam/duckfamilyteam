import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgoppzqp'

export async function POST(req: NextRequest) {
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

  try {
    const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(parsed.data),
    })

    if (!formspreeRes.ok) {
      return NextResponse.json({ ok: false, errors: { form: 'Slanje nije uspelo. Pokušajte ponovo.' } }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, errors: { form: 'Slanje nije uspelo. Pokušajte ponovo.' } }, { status: 502 })
  }
}
