'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const navLinks = [
    { label: 'Usluge', href: pathname === '/' ? '#usluge' : '/#usluge' },
    { label: 'Naš Proces', href: pathname === '/' ? '#proces' : '/#proces' },
    { label: 'Portfolio', href: pathname === '/' ? '#portfolio' : '/#portfolio' },
    { label: 'Cene', href: pathname === '/' ? '#cene' : '/#cene' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: pathname === '/' ? '#kontakt' : '/#kontakt' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-xl border-b border-slate-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3" onClick={closeMobile}>
            <Image
              src="/img/logo-za-nasu-agenciju.png"
              alt="Duck Family Team logo"
              width={48}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
            <span className="text-xl font-extrabold uppercase tracking-tighter italic text-slate-800">
              Duck<span className="text-[#248a84]">FamilyTeam</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-bold transition-colors duration-200 ${
                  (link.href === '/blog' && pathname.startsWith('/blog'))
                    ? 'text-[#248a84]'
                    : 'text-slate-600 hover:text-[#248a84]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={pathname === '/' ? '#kontakt' : '/#kontakt'}
              className="btn-duck text-white px-7 py-2.5 rounded-full text-sm font-bold"
            >
              Zakaži Konsultacije
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-2xl text-slate-800 focus:outline-none p-1"
            aria-label="Otvori meni"
            aria-expanded={mobileOpen}
          >
            <span className="block w-6 h-0.5 bg-slate-800 mb-1.5 transition-all duration-300" style={mobileOpen ? { transform: 'rotate(45deg) translate(3px, 8px)' } : {}} />
            <span className="block w-6 h-0.5 bg-slate-800 mb-1.5 transition-all duration-300" style={mobileOpen ? { opacity: 0 } : {}} />
            <span className="block w-6 h-0.5 bg-slate-800 transition-all duration-300" style={mobileOpen ? { transform: 'rotate(-45deg) translate(3px, -8px)' } : {}} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: mobileOpen ? '400px' : '0' }}
        >
          <div className="flex flex-col gap-2 mt-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="text-lg font-bold text-slate-600 border-b border-slate-50 py-3 hover:text-[#248a84] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={pathname === '/' ? '#kontakt' : '/#kontakt'}
              onClick={closeMobile}
              className="btn-duck text-white px-7 py-4 rounded-2xl text-center text-sm font-bold mt-2"
            >
              Zakaži Konsultacije
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
