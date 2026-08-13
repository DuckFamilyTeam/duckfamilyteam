import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Unesite ime, najmanje 2 slova.')
    .max(100, 'Ime je predugačko.'),
  phone: z
    .string()
    .trim()
    .min(6, 'Unesite validan broj telefona.')
    .max(30, 'Broj telefona je predugačak.')
    .regex(/^[0-9+()\s-]+$/, 'Telefon sme da sadrži samo brojeve i znake + ( ) -.'),
  website: z
    .string()
    .trim()
    .max(200, 'Adresa sajta je predugačka.')
    .optional()
    .or(z.literal(''))
    .refine(
      (value) => !value || /^https?:\/\/.+\..+/.test(value),
      'Unesite validnu adresu sajta, sa http:// ili https://.'
    ),
  message: z
    .string()
    .trim()
    .max(2000, 'Poruka je predugačka.')
    .optional()
    .or(z.literal('')),
  /**
   * Honeypot. Polje je sakriveno od ljudi, pa svaka vrednost u njemu znači bot.
   * Zove se "company" jer automati popunjavaju polja po imenu atributa.
   *
   * Schema ga namerno propušta umesto da ga odbije: odluku donosi ruta, koja
   * botu vraća lažni uspeh da skripta ne nauči šta je zapelo. Da ovde stoji
   * `.max(0)`, parsiranje bi puklo pre toga i bot bi dobio 400 sa porukom.
   */
  company: z.string().max(200).optional(),
  /** Sa koje stranice je upit poslat — da se u inboxu zna odakle je stigao. */
  source: z.string().trim().max(200).optional().or(z.literal('')),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(5, 'Unesite email adresu.')
    .max(200, 'Email adresa je predugačka.')
    .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'Unesite validnu email adresu.'),
  consent: z.literal(true, {
    message: 'Potrebna je saglasnost za prijem email poruka.',
  }),
  /** Honeypot — vidi objašnjenje uz isto polje u contactSchema. */
  company: z.string().max(200).optional(),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>
