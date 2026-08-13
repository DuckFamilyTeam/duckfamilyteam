'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Sekcija koja se pojavljuje pri skrolovanju.
 *
 * Dve stvari koje su ranije nedostajale:
 *  - Bez JavaScripta sadržaj je ostajao na opacity:0 zauvek. Sada nosi
 *    `data-animated-section`, a <noscript> blok u layoutu ga vraća u vidljivo
 *    stanje kad skripte ne rade.
 *  - `prefers-reduced-motion` se nije poštovao. Sada se animacija u tom slučaju
 *    potpuno preskače i sadržaj je odmah vidljiv.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    // Ako IntersectionObserver ne postoji, prikaži odmah umesto da sadržaj nestane.
    if (typeof IntersectionObserver === 'undefined') {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
      return
    }

    let timer: ReturnType<typeof setTimeout> | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => {
      if (timer) clearTimeout(timer)
      observer.disconnect()
    }
  }, [delay])

  return (
    <div
      ref={ref}
      data-animated-section=""
      className={className}
      style={
        reducedMotion
          ? undefined
          : {
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }
      }
    >
      {children}
    </div>
  )
}
