/**
 * Cloudflare Turnstile, serverska provera tokena.
 *
 * Uključuje se SAMO kad su postavljene obe promenljive (Vercel → Settings →
 * Environment Variables): `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (javan, ide u browser)
 * i `TURNSTILE_SECRET_KEY` (samo server). Ako fali bilo koja, provera se
 * preskače, jer bi sa samo tajnim ključem server tražio token koji browser
 * nikad ne šalje, pa bi svaka forma pala. Vidi `.env.example`.
 *
 * Ostali slojevi zaštite (honeypot, minimalno vreme popunjavanja, rate limit,
 * provera porekla) rade i bez ovoga; Turnstile je jedini koji zaustavlja bota
 * koji uredno popuni vidljiva polja i sačeka par sekundi.
 */

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export function turnstileUkljucen(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)
}

/**
 * `true` ako je token ispravan ili ako je provera isključena.
 *
 * Mrežna greška ili istek vremena prema Cloudflare-u vraćaju `true` (fail-open):
 * za sajt kome forma donosi klijente gori je izgubljen upit nego jedna spam
 * poruka koja prođe dok Cloudflare ne odgovara, a ostali slojevi i dalje rade.
 * Izričito odbijen token (`success: false`) uvek vraća `false`.
 */
export async function proveriTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  if (!turnstileUkljucen()) return true
  if (!token) return false

  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY as string,
    response: token,
  })
  if (ip && ip !== 'nepoznat') body.set('remoteip', ip)

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      body,
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return true
    const json = (await res.json()) as { success?: boolean }
    return json.success === true
  } catch {
    return true
  }
}
