import type { ReactNode } from 'react'

/**
 * Naslov koji se sklapa reč po reč.
 *
 * Podela na reči se radi na serveru, u JSX-u — ceo tekst je u HTML-u od prve
 * sekunde, pa naslov ostaje čitljiv za Google i za čitače ekrana. CSS zatim
 * svakoj reči zada zakašnjenje preko `--d`.
 *
 * Bez ove podele na serveru (npr. deljenjem u `useEffect`-u) `<h1>` bi u
 * izvornom HTML-u bio jedan blok koji tek JavaScript rastavlja — nepotreban
 * rizik na stranici čiji je naslov najvažniji SEO element.
 */
export default function HeroTitle({
  reci,
  className = '',
}: {
  reci: Array<string | { node: ReactNode }>
  className?: string
}) {
  let index = 0
  return (
    <h1 className={className}>
      {reci.map((deo, i) => {
        // Ceo naslov je sklopljen za ~0,25 s. Ranije je poslednja reč kretala
        // posle 0,5 s, a podnaslov tek posle 0,62 s, pa je LCP na telefonu čekao
        // animaciju (LCP element je podnaslov, izmereno 2026-09-27).
        const delay = 40 + index * 35
        index += 1
        const style = { '--d': `${delay}ms` } as React.CSSProperties
        if (typeof deo === 'string') {
          return (
            <span key={i} className="word" style={style}>
              {deo}
              {i < reci.length - 1 ? ' ' : ''}
            </span>
          )
        }
        return (
          <span key={i} className="word" style={style}>
            {deo.node}
            {i < reci.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </h1>
  )
}
