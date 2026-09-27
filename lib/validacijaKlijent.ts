/**
 * Validacija formi u browseru, bez Zod-a.
 *
 * Zašto posebno: Zod je ~22 KB (gzip) JavaScript-a, a forma za kontakt je u
 * futeru SVAKE stranice. Dok se validiralo Zod-om u browseru, taj paket se
 * preuzimao i parsirao na svakoj stranici pre nego što posetilac išta klikne
 * (Lighthouse, 2026-09-27: chunk sa Zod-om na svih 19 ruta).
 *
 * Ovo je samo brza povratna informacija korisniku. Merodavna provera je i dalje
 * Zod schema na serveru (lib/validation.ts, API rute) — ako se ova dva ikad
 * raziđu, server odbija i vraća poruku, pa se ništa neispravno ne prosleđuje.
 * Poruke su iste kao u lib/validation.ts.
 */

export type Rezultat<T> =
  | { success: true; data: T }
  | { success: false; errors: Record<string, string> }

export type KontaktPodaci = {
  name: string
  phone: string
  website: string
  message: string
  company: string
  source: string
  elapsed: number
}

export function proveriKontakt(ulaz: KontaktPodaci): Rezultat<KontaktPodaci> {
  const data: KontaktPodaci = {
    ...ulaz,
    name: ulaz.name.trim(),
    phone: ulaz.phone.trim(),
    website: ulaz.website.trim(),
    message: ulaz.message.trim(),
    source: ulaz.source.trim(),
  }
  const errors: Record<string, string> = {}

  if (data.name.length < 2) errors.name = 'Unesite ime, najmanje 2 slova.'
  else if (data.name.length > 100) errors.name = 'Ime je predugačko.'

  if (data.phone.length < 6) errors.phone = 'Unesite validan broj telefona.'
  else if (data.phone.length > 30) errors.phone = 'Broj telefona je predugačak.'
  else if (!/^[0-9+()\s-]+$/.test(data.phone))
    errors.phone = 'Telefon sme da sadrži samo brojeve i znake + ( ) -.'

  if (data.website.length > 200) errors.website = 'Adresa sajta je predugačka.'
  else if (data.website && !/^https?:\/\/.+\..+/.test(data.website))
    errors.website = 'Unesite validnu adresu sajta, sa http:// ili https://.'

  if (data.message.length > 2000) errors.message = 'Poruka je predugačka.'

  return Object.keys(errors).length ? { success: false, errors } : { success: true, data }
}

export type NewsletterPodaci = { email: string; consent: boolean; company: string; elapsed: number }

export function proveriNewsletter(ulaz: NewsletterPodaci): Rezultat<NewsletterPodaci> {
  const data = { ...ulaz, email: ulaz.email.trim() }
  const errors: Record<string, string> = {}

  if (data.email.length < 5) errors.email = 'Unesite email adresu.'
  else if (data.email.length > 200) errors.email = 'Email adresa je predugačka.'
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errors.email = 'Unesite validnu email adresu.'

  if (data.consent !== true) errors.consent = 'Potrebna je saglasnost za prijem email poruka.'

  return Object.keys(errors).length ? { success: false, errors } : { success: true, data }
}
