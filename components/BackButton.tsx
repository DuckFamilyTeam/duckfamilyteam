'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function BackButton() {
  const router = useRouter()
  const [canGoBack, setCanGoBack] = useState(false)

  useEffect(() => {
    // window.history.length > 1 means there is somewhere to go back to
    // (works across a full page reload, unlike a client-side "came from this app" flag)
    setCanGoBack(window.history.length > 1)
  }, [])

  const handleBack = useCallback(() => {
    if (canGoBack) {
      router.back()
    } else {
      router.push('/')
    }
  }, [canGoBack, router])

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Nazad na prethodnu stranu"
      className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink-text border border-ink-border hover:border-wine rounded-full pl-3 pr-4 py-2 transition-colors mb-6"
    >
      <svg
        className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
      Nazad
    </button>
  )
}
