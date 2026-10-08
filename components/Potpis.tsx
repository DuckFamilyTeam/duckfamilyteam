/**
 * Potpis brenda: ručno iscrtana vinska linija.
 *
 * Dizajn sistem (resursi_brenda.md, „Signature element“) traži je ispod ključne
 * reči u naslovima i kao razdelnik sekcija. Do 2026-09-27 postojala je samo
 * ispod „zovu“ u heroju početne strane; na podstranicama je nije bilo nigde.
 * Ovde se koristi kao razdelnik odmah ispod H1 svake podstranice.
 *
 * Ista putanja kao na početnoj, crta se jednom pri učitavanju (globals.css,
 * `.potpis`), a bez JavaScripta i pod `prefers-reduced-motion` stoji iscrtana.
 */
export default function Potpis({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`potpis ${className}`}
      viewBox="0 0 120 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 8C20 2 35 12 55 7C75 2 90 12 118 6"
        stroke="#B03A47"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
