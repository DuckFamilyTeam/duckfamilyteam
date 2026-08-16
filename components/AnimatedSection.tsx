import type { ReactNode } from 'react'

type Smer = 'up' | 'left' | 'right' | 'zoom' | 'clip'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  smer?: Smer
}

/**
 * Sekcija koja se pojavljuje pri skrolovanju.
 *
 * Ranije je ovo bila klijentska komponenta: svaka instanca je nosila sopstveni
 * `useState`, `useEffect` i `IntersectionObserver`, a početno `opacity: 0` se
 * postavljalo inline u Reactu — što znači da sadržaja nije bilo do hidratacije.
 *
 * Sada je serverska komponenta koja ispisuje samo `data-rv` atribut. Skrivanje
 * radi CSS pod `.js` klasom (vidi globals.css), a jedan zajednički observer u
 * MotionRuntime-u otkriva sve odjednom. Posledice:
 *  - bez JavaScripta je sadržaj odmah vidljiv, bez `<noscript>` zakrpe,
 *  - Googlebot vidi kompletan HTML od prvog bajta,
 *  - trinaest klijentskih komponenti na početnoj strani je postalo nula.
 *
 * API je namerno ostao isti (`className`, `delay`), da postojeće stranice ne
 * moraju da se diraju.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  smer = 'up',
}: AnimatedSectionProps) {
  return (
    <div className={className} data-rv={smer} data-rv-delay={delay || undefined}>
      {children}
    </div>
  )
}
