'use client'

import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label, summary'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>()

  useEffect(() => {
    // Skip entirely on touch/coarse-pointer devices — no custom cursor, no listeners, no RAF loop.
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || prefersReducedMotion) return

    document.documentElement.classList.add('has-custom-cursor')

    const el = dotRef.current
    if (!el) return

    let hasMoved = false

    const handleMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      if (!hasMoved) {
        hasMoved = true
        current.current.x = e.clientX
        current.current.y = e.clientY
        el.style.opacity = '1'
      }
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(INTERACTIVE_SELECTOR)) {
        el.classList.add('cursor-active')
      }
    }

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(INTERACTIVE_SELECTOR)) {
        el.classList.remove('cursor-active')
      }
    }

    const handleLeave = () => {
      el.style.opacity = '0'
    }

    const tick = () => {
      // Ease toward the real pointer position — cheap lerp, no external deps.
      current.current.x += (pos.current.x - current.current.x) * 0.2
      current.current.y += (pos.current.y - current.current.y) * 0.2
      el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      rafId.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseover', handleOver, { passive: true })
    document.addEventListener('mouseout', handleOut, { passive: true })
    document.addEventListener('mouseleave', handleLeave)
    rafId.current = requestAnimationFrame(tick)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      document.removeEventListener('mouseleave', handleLeave)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return <div ref={dotRef} className="custom-cursor" aria-hidden="true" />
}
