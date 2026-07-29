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
})

export type ContactFormData = z.infer<typeof contactSchema>
