import type { ReactNode } from 'react'

/**
 * Ključna reč u naslovu, podvučena ručno iscrtanom vinskom linijom — potpis
 * brenda iz dizajn sistema (resursi_brenda.md: „ispod ključne reči u
 * naslovima"). Isti crtež i ista animacija kao „zovu" u heroju početne strane
 * (globals.css, `.squiggle`); bez JavaScripta i pod smanjenim pokretom linija
 * stoji iscrtana.
 */
export default function PodvucenaRec({ children }: { children: ReactNode }) {
  return (
    <span className="squiggle">
      {children}
      <svg viewBox="0 0 120 14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path
          d="M2 8C20 2 35 12 55 7C75 2 90 12 118 6"
          stroke="#B03A47"
          strokeWidth="3.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
