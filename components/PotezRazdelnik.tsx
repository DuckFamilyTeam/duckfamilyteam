/**
 * Mali wine potez iznad naslova sekcije.
 *
 * Isti rukopis kao `Potpis` (ispod H1) i `PodvucenaRec` (ispod ključne reči u
 * naslovu), samo kraći. Do 2026-10-09 je postojao samo unutar sekcije „Kako
 * radimo“ na `/o-nama`, gde je dizajn-kritičar potvrdio da radi kao razdelnik
 * (krug 12, ispravka 5); ovde se širi na glavne sekcije početne i stranica
 * usluga, da potez bude prepoznatljiv kroz ceo sajt, a ne izuzetak na jednoj
 * stranici.
 *
 * Bez animacije: `Potpis` se iscrtava pri učitavanju, ali 26 poteza koji se
 * sami crtaju dok se skroluje bio bi šum, i na slabijem telefonu nepotreban
 * posao za GPU.
 */
export default function PotezRazdelnik({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 10"
      className={`w-12 h-2.5 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 6C10 2 16 8 26 5C36 2 42 8 58 4"
        stroke="#8C2438"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
