'use client'

import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, label, summary'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>()
  // Whether the fake cursor is currently standing in for the real one. Only true
  // while we're confident we're actively receiving pointer positions.
  const active = useRef(false)

  useEffect(() => {
    // Skip entirely on touch/coarse-pointer devices — no custom cursor, no listeners, no RAF loop.
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isFinePointer || prefersReducedMotion) return

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    const html = document.documentElement

    // Hand the OS cursor back only once we actually have a live pointer position to draw.
    const engage = () => {
      if (active.current) return
      active.current = true
      html.classList.add('has-custom-cursor')
      ring.style.opacity = '1'
      dot.style.opacity = '1'
    }

    // The fake cursor is only as good as our ability to track the pointer. The
    // moment that tracking can be interrupted — pointer leaves the document (into
    // the Google Maps iframe in the footer, or off into the browser chrome), the
    // tab loses focus, or the tab is backgrounded — we must immediately give control
    // back to the real OS cursor. Otherwise the visitor is left with nothing visible
    // at all: the native cursor is hidden via CSS and the fake one has stopped moving.
    const disengage = () => {
      stopLoop()
      if (!active.current) return
      active.current = false
      html.classList.remove('has-custom-cursor')
      ring.style.opacity = '0'
      dot.style.opacity = '0'
    }

    const handleMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      engage()
      startLoop()
    }

    const handleOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (target.closest?.(INTERACTIVE_SELECTOR)) {
        ring.classList.add('cursor-active')
        dot.classList.add('cursor-active')
      }
    }

    const handleOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (target.closest?.(INTERACTIVE_SELECTOR)) {
        ring.classList.remove('cursor-active')
        dot.classList.remove('cursor-active')
      }
    }

    // relatedTarget === null means the pointer left the page entirely — into browser
    // chrome, off-screen, or into an embedded iframe (the Google Maps embed in the
    // footer is the one on this site). We stop receiving pointermove in every one of
    // those cases, so fall back to the real cursor right away instead of freezing.
    const handleDocPointerOut = (e: PointerEvent) => {
      if (e.relatedTarget === null) disengage()
    }

    const handleBlur = () => disengage()
    const handleVisibility = () => {
      if (document.hidden) disengage()
    }

    // The loop only runs while the ring still has ground to cover. Previously it
    // rescheduled itself unconditionally and burned a frame at 60fps for as long
    // as the page stayed open — including with the pointer parked and the cursor
    // disengaged. Now a settled ring stops the loop, and the next pointermove
    // starts it again.
    const tick = () => {
      const dx = pos.current.x - ringPos.current.x
      const dy = pos.current.y - ringPos.current.y

      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        ringPos.current.x = pos.current.x
        ringPos.current.y = pos.current.y
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`
        rafId.current = undefined
        return
      }

      // Ease toward the real pointer position — cheap lerp, no external deps.
      ringPos.current.x += dx * 0.2
      ringPos.current.y += dy * 0.2
      ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`
      rafId.current = requestAnimationFrame(tick)
    }

    function startLoop() {
      if (rafId.current === undefined) rafId.current = requestAnimationFrame(tick)
    }

    function stopLoop() {
      if (rafId.current !== undefined) {
        cancelAnimationFrame(rafId.current)
        rafId.current = undefined
      }
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    document.addEventListener('pointerover', handleOver, { passive: true })
    document.addEventListener('pointerout', handleOut, { passive: true })
    document.addEventListener('pointerout', handleDocPointerOut, { passive: true })
    window.addEventListener('blur', handleBlur)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      disengage()
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerover', handleOver)
      document.removeEventListener('pointerout', handleOut)
      document.removeEventListener('pointerout', handleDocPointerOut)
      window.removeEventListener('blur', handleBlur)
      document.removeEventListener('visibilitychange', handleVisibility)
      stopLoop()
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  )
}
