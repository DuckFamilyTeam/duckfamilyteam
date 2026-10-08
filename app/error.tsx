'use client'

import Link from 'next/link'

/**
 * Greška pri renderovanju stranice. Posetilac nikad ne vidi tehničku poruku ni
 * stack trace, samo objašnjenje i put nazad (skills/10, „Greške i logovanje“).
 * Navbar i futer su u stranicama, ne u layoutu, pa ih ovde nema.
 */
export default function Greska({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main
      id="glavni-sadrzaj"
      className="bg-ink-bg text-ink-text min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-md">
        <h1 className="font-display font-medium text-3xl md:text-4xl mb-4">Nešto nije u redu</h1>
        <p className="text-ink-muted mb-8">
          Stranica trenutno ne može da se prikaže. Pokušajte ponovo ili nas pozovite na{' '}
          <a href="tel:+381643877524" className="text-wine-text underline underline-offset-2">
            064 387 7524
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Pokušaj ponovo
          </button>
          <Link
            href="/"
            className="border border-ink-border-strong hover:border-wine-text text-ink-text px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Nazad na početnu
          </Link>
        </div>
      </div>
    </main>
  )
}
