'use client'

import { trackPhoneClick } from '@/lib/analytics'

const TELEFON = '+381643877524'
const TELEFON_PRIKAZ = '064 387 7524'

/**
 * Klikabilan broj telefona za telo stranice.
 *
 * Do sada je broj postojao samo u meniju i u futeru — na sajtu čiji je naslov
 * „Klijenti koji zovu" i koji prodaje „kampanje koje dovode pozive". Svaki klik
 * se meri, što ranije nije bio slučaj nigde.
 */
export default function PhoneCta({
  location,
  className = '',
  label,
}: {
  location: string
  className?: string
  label?: string
}) {
  return (
    <a
      href={`tel:${TELEFON}`}
      onClick={() => trackPhoneClick(location)}
      className={`inline-flex items-center justify-center gap-2.5 border border-ink-border-strong hover:border-wine-text text-ink-text font-semibold text-center transition-colors ${className}`}
    >
      <svg
        className="w-4 h-4 flex-shrink-0 text-wine-text"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      {label ?? `Pozovite ${TELEFON_PRIKAZ}`}
    </a>
  )
}
