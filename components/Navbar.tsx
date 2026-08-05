'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  const serviceLinks = [
    { label: 'Google Ads kampanje', href: '/usluge/google-ads' },
    { label: 'Izrada sajtova', href: '/usluge/izrada-sajtova' },
    { label: 'Google Business profil', href: '/usluge/google-business-profil' },
  ]

  const navLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'Rezultati', href: '/rezultati' },
    { label: 'Cene', href: '/cene' },
    { label: 'O nama', href: '/o-nama' },
    { label: 'Kontakt', href: '/kontakt' },
  ]

  const googleReviewUrl = 'https://maps.google.com/?cid=13771670212645560743&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&source=embed'

  return (
    <header className="fixed w-full top-0 z-[100] bg-ink-bg/95 backdrop-blur-xl border-b border-ink-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" onClick={closeMobile}>
            <span className="bg-ink-text rounded-xl p-1 flex-shrink-0">
              <Image
                src="/img/logo-za-nasu-agenciju.png"
                alt="Duck Family Team logo"
                width={40}
                height={40}
                className="h-8 w-8 md:h-9 md:w-9"
                priority
              />
            </span>
            <span className="font-display font-medium text-lg md:text-xl text-ink-text tracking-tight whitespace-nowrap">
              Duck<span className="text-wine-bright">Family</span>Team
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-sans font-medium whitespace-nowrap transition-colors duration-200 ${
                  pathname.startsWith('/usluge') ? 'text-ink-text' : 'text-ink-muted hover:text-ink-text'
                }`}
              >
                Usluge
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
                <div className="bg-ink-surface border border-ink-border rounded-xl p-2 min-w-[240px] shadow-lg">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2.5 rounded-lg text-sm text-ink-muted hover:text-ink-text hover:bg-ink-surface-hover transition-colors whitespace-nowrap"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-sans font-medium whitespace-nowrap transition-colors duration-200 ${
                  pathname.startsWith(link.href) && link.href !== '/'
                    ? 'text-ink-text'
                    : 'text-ink-muted hover:text-ink-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans font-medium whitespace-nowrap text-ink-muted hover:text-ink-text transition-colors duration-200"
            >
              Recenzije
            </a>
            <a
              href="tel:+381643877524"
              className="inline-flex items-center gap-2 bg-wine hover:bg-wine-bright text-ink-text px-6 py-3 rounded-full text-sm font-sans font-semibold whitespace-nowrap transition-colors duration-200"
            >
              Pozovite nas
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-2xl text-ink-text focus:outline-none p-1 flex-shrink-0"
            aria-label="Otvori meni"
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-6 h-0.5 bg-ink-text mb-1.5 transition-all duration-300"
              style={mobileOpen ? { transform: 'rotate(45deg) translate(3px, 8px)' } : {}}
            />
            <span
              className="block w-6 h-0.5 bg-ink-text mb-1.5 transition-all duration-300"
              style={mobileOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-6 h-0.5 bg-ink-text transition-all duration-300"
              style={mobileOpen ? { transform: 'rotate(-45deg) translate(3px, -8px)' } : {}}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: mobileOpen ? '90vh' : '0', overflowY: mobileOpen ? 'auto' : 'hidden' }}
        >
          <div className="flex flex-col gap-1 mt-4 pb-4">
            <div className="font-mono text-xs uppercase tracking-widest text-ink-muted pt-2 pb-1">
              Usluge
            </div>
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={closeMobile}
                className="text-lg font-sans font-medium text-ink-muted border-b border-ink-border py-3 hover:text-ink-text transition-colors"
              >
                {service.label}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="text-lg font-sans font-medium text-ink-muted border-b border-ink-border py-3 hover:text-ink-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="text-lg font-sans font-medium text-ink-muted border-b border-ink-border py-3 hover:text-ink-text transition-colors"
            >
              Recenzije
            </a>
            <a
              href="tel:+381643877524"
              onClick={closeMobile}
              className="inline-flex items-center justify-center bg-wine hover:bg-wine-bright text-ink-text px-6 py-5 rounded-2xl text-center text-base font-sans font-semibold mt-4"
            >
              Pozovite nas: +381 64 387 7524
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
