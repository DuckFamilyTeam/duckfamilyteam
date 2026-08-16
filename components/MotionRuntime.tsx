'use client'

import { useEffect } from 'react'

/**
 * Jedina klijentska komponenta zadužena za kretanje na sajtu.
 *
 * Zašto jedna umesto komponente po efektu: svaki `AnimatedSection` je ranije bio
 * zaseban client component sa sopstvenim `IntersectionObserver`-om. Na početnoj
 * strani ih je bilo trinaest. Ovde postoji jedan observer za sve, i jedna
 * `requestAnimationFrame` petlja za sve što prati skrol ili miša — petlja se
 * gasi čim nema šta da se pomera, pa u mirovanju ne troši nijedan frame.
 *
 * Sve što se animira je `transform`, `opacity` ili `filter` — svojstva koja
 * preskaču layout i paint.
 */
export default function MotionRuntime() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const cleanups: Array<() => void> = []

    // ── ① Ulaz sekcija ────────────────────────────────────────────────
    const targets = document.querySelectorAll<HTMLElement>('[data-rv]')
    if (reduce || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('rv-in'))
    } else {
      const timers: Array<ReturnType<typeof setTimeout>> = []
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const el = entry.target as HTMLElement
            const delay = Number(el.dataset.rvDelay || 0)
            if (delay > 0) timers.push(setTimeout(() => el.classList.add('rv-in'), delay))
            else el.classList.add('rv-in')
            io.unobserve(el)
          })
        },
        { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
      )
      targets.forEach((el) => io.observe(el))
      cleanups.push(() => {
        io.disconnect()
        timers.forEach(clearTimeout)
      })
    }

    // ── ② Brojači ─────────────────────────────────────────────────────
    // Konačna vrednost je već u HTML-u (server je renderovao) — JS je samo
    // animira unazad ka nuli i nazad. Bez JS-a se vidi tačan broj.
    const counters = document.querySelectorAll<HTMLElement>('[data-count]')
    if (!reduce && counters.length && typeof IntersectionObserver !== 'undefined') {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const el = entry.target as HTMLElement
            const to = Number(el.dataset.count)
            const decimals = Number(el.dataset.decimals || 0)
            const suffix = el.dataset.suffix || ''
            if (!Number.isFinite(to)) return
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / 1400, 1)
              const value = to * (1 - Math.pow(1 - p, 4))
              el.textContent = value.toFixed(decimals).replace('.', ',') + suffix
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            cio.unobserve(el)
          })
        },
        { threshold: 0.5 },
      )
      counters.forEach((el) => cio.observe(el))
      cleanups.push(() => cio.disconnect())
    }

    // ── ③ Jedna rAF petlja za skrol i miša ────────────────────────────
    const progress = document.querySelector<HTMLElement>('[data-scroll-progress]')
    const header = document.querySelector<HTMLElement>('[data-header]')
    const spot = document.querySelector<HTMLElement>('[data-spotlight]')
    const parallax = document.querySelectorAll<HTMLElement>('[data-parallax]')
    const stepsFill = document.querySelector<HTMLElement>('[data-steps-fill]')
    const steps = document.querySelector<HTMLElement>('[data-steps]')
    const stickyCta = document.querySelector<HTMLElement>('[data-sticky-cta]')

    let pointerX = 0
    let pointerY = 0
    let easedX = 0
    let easedY = 0
    let queued = false

    const frame = () => {
      queued = false
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight

      if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`
      if (header) header.dataset.stuck = y > 40 ? 'true' : 'false'
      if (stickyCta) {
        const show = y > window.innerHeight * 1.15 && y < max - 400
        stickyCta.classList.toggle('on', show)
      }

      if (reduce) return

      if (y < window.innerHeight * 1.6) {
        parallax.forEach((el) => {
          const rate = Number(el.dataset.parallax || 0.1)
          el.style.transform = `translate3d(0, ${(-y * rate).toFixed(1)}px, 0)`
        })
      }

      if (stepsFill && steps) {
        const rect = steps.getBoundingClientRect()
        const p = Math.min(Math.max((window.innerHeight * 0.78 - rect.top) / (rect.height * 0.86), 0), 1)
        stepsFill.style.transform = `scaleY(${p.toFixed(3)})`
      }

      if (spot && fine) {
        easedX += (pointerX - easedX) * 0.09
        easedY += (pointerY - easedY) * 0.09
        spot.style.transform = `translate3d(${easedX.toFixed(1)}px, ${easedY.toFixed(1)}px, 0) translate(-50%, -50%)`
        // Petlja se nastavlja samo dok prsten stvarno ima kuda da stigne.
        if (Math.abs(pointerX - easedX) > 0.5 || Math.abs(pointerY - easedY) > 0.5) request()
      }
    }

    const request = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(frame)
    }

    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request, { passive: true })
    cleanups.push(() => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    })

    if (fine && !reduce) {
      const onMove = (e: PointerEvent) => {
        pointerX = e.clientX
        pointerY = e.clientY
        request()
      }
      window.addEventListener('pointermove', onMove, { passive: true })
      cleanups.push(() => window.removeEventListener('pointermove', onMove))
    }
    request()

    // ── ④ 3D nagib kartica i sjaj koji prati kursor ───────────────────
    if (fine && !reduce) {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
        let raf: number | undefined
        const onMove = (e: PointerEvent) => {
          if (raf !== undefined) return
          raf = requestAnimationFrame(() => {
            raf = undefined
            const rect = card.getBoundingClientRect()
            const px = (e.clientX - rect.left) / rect.width
            const py = (e.clientY - rect.top) / rect.height
            card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
            card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
            card.style.transform =
              `perspective(1200px) rotateX(${((0.5 - py) * 8).toFixed(2)}deg) ` +
              `rotateY(${((px - 0.5) * 10).toFixed(2)}deg) translateZ(8px)`
          })
        }
        const onLeave = () => {
          if (raf !== undefined) cancelAnimationFrame(raf)
          raf = undefined
          card.style.transform = ''
        }
        card.addEventListener('pointermove', onMove, { passive: true })
        card.addEventListener('pointerleave', onLeave)
        cleanups.push(() => {
          card.removeEventListener('pointermove', onMove)
          card.removeEventListener('pointerleave', onLeave)
        })
      })

      // ── ⑤ Magnetna dugmad ───────────────────────────────────────────
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
        let raf: number | undefined
        const onMove = (e: PointerEvent) => {
          if (raf !== undefined) return
          raf = requestAnimationFrame(() => {
            raf = undefined
            const rect = el.getBoundingClientRect()
            const dx = (e.clientX - rect.left - rect.width / 2) * 0.22
            const dy = (e.clientY - rect.top - rect.height / 2) * 0.22
            el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`
          })
        }
        const onLeave = () => {
          if (raf !== undefined) cancelAnimationFrame(raf)
          raf = undefined
          // Povratak je opružan — dugme se „vraća na mesto", ne teleportuje.
          el.style.transition = 'transform 420ms cubic-bezier(0.34, 1.56, 0.64, 1)'
          el.style.transform = ''
          window.setTimeout(() => { el.style.transition = '' }, 440)
        }
        el.addEventListener('pointermove', onMove, { passive: true })
        el.addEventListener('pointerleave', onLeave)
        cleanups.push(() => {
          el.removeEventListener('pointermove', onMove)
          el.removeEventListener('pointerleave', onLeave)
        })
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}
