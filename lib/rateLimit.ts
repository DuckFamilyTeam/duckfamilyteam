/**
 * Jednostavan rate limit u memoriji procesa.
 *
 * Ograničenje kojeg treba biti svestan: na Vercelu svaka serverless instanca
 * ima svoju memoriju, pa ovo ne daje globalno tačan limit — zaustavlja
 * jednostavne botove i slučajno dupliranje, ali ne i distribuiranu poplavu.
 * Za tvrdu garanciju treba deljeno skladište (Vercel KV ili Upstash Redis).
 */

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

/**
 * Sprečava da Map raste bez granice na dugovečnoj instanci.
 *
 * `forEach` umesto `for...of`: tsconfig.json nema `target`, pa tsc pada na ES5
 * i ne dozvoljava iteraciju nad Map-om bez `downlevelIteration`.
 */
function sweep(now: number): void {
  if (buckets.size < 500) return
  buckets.forEach((bucket, key) => {
    if (bucket.resetAt <= now) buckets.delete(key)
  })
}

export function checkRateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now()
  sweep(now)

  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, retryAfterSeconds: 0 }
  }

  bucket.count += 1
  if (bucket.count > limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    }
  }

  return { allowed: true, retryAfterSeconds: 0 }
}

/** IP pošiljaoca iz zaglavlja koja Vercel postavlja ispred aplikacije. */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]!.trim()
  return headers.get('x-real-ip') ?? 'nepoznat'
}

/**
 * Odbija zahteve koji ne dolaze sa sopstvenog sajta. Nije zaštita od odlučnog
 * napadača (zaglavlje se može falsifikovati van browsera), ali odseca
 * prosleđivanje forme sa tuđih stranica i najveći deo skriptovanog spama.
 */
export function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get('origin')
  // Nema Origin zaglavlja kod običnog same-origin POST-a iz nekih klijenata —
  // tada se oslanjamo na ostale provere umesto da odbijemo legitiman upit.
  if (!origin) return true

  try {
    return new URL(origin).host === new URL(req.url).host
  } catch {
    return false
  }
}
