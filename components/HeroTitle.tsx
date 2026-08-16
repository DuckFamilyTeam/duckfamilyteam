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
        const delay = 120 + index * 58
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
