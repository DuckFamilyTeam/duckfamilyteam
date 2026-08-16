'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ContactForm from './ContactForm'
import MapEmbed from './MapEmbed'
import { openCookieSettings } from './CookieConsent'
import { trackEmailClick, trackPhoneClick, trackReviewClick } from '@/lib/analytics'

const googleMapsUrl = 'https://www.google.com/maps?cid=13771670212645560743'
const googleReviewUrl = 'https://g.page/r/CachkcwXzR6_EBM/review'

export default function Footer() {
  const godina = new Date().getFullYear()
  const pathname = usePathname()

  // Stranica /kontakt ima sopstvenu formu u glavnom sadržaju. Footer se
  // renderuje na svakoj stranici, pa su se tamo pojavljivale dve identične
  // forme jedna ispod druge — posetilac ne zna koja je „prava", a i sam upit
  // deluje kao da se traži dvaput.
  //
  // Provera ide preko putanje, a ne preko propa, da se ne bi zaboravila kad se
  // jednog dana doda još neka stranica sa sopstvenom formom.
  const prikaziFormu = pathname !== '/kontakt'

  return (
    <footer
      id="kontakt"
      className="bg-ink-bg pt-20 pb-12 px-6 md:px-12 text-ink-text border-t border-ink-border"
    >
      <div
        className={`max-w-7xl mx-auto grid gap-12 md:gap-16 ${
          prikaziFormu ? 'lg:grid-cols-2' : ''
        }`}
      >
        {/* Left: Contact info */}
        <div className="space-y-8 md:space-y-10">
          <h2 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight">
            Vreme je da <br />
            <span className="text-wine-text">pobedite.</span>
          </h2>
          <div className="space-y-4">
            <p className="font-mono text-ink-muted text-xs uppercase tracking-widest">
              Direktna linija
            </p>
            <a
              href="tel:+381643877524"
              onClick={() => trackPhoneClick('futer')}
              className="block font-display font-medium text-2xl md:text-4xl hover:text-wine-text transition tracking-tight"
            >
              +381 64 387 7524
            </a>
            <p className="font-mono text-ink-muted pt-6 text-xs uppercase tracking-widest">Email</p>
            <a
              href="mailto:stankovic.s.nikola@gmail.com"
              onClick={() => trackEmailClick('futer')}
              className="block text-lg md:text-2xl font-medium hover:text-wine-text transition break-all"
            >
              stankovic.s.nikola@gmail.com
            </a>
            <p className="font-mono text-ink-muted pt-6 text-xs uppercase tracking-widest">
              Adresa
            </p>
            <p className="text-lg md:text-xl font-medium text-ink-text">
              Porodice Josipović 2, Sremčica, Beograd
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-wine-text hover:text-ink-text transition font-medium text-sm"
              >
                Pogledaj nas na Google mapi
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackReviewClick}
                className="inline-flex items-center gap-2 text-wine-text hover:text-ink-text transition font-medium text-sm"
              >
                Ostavite recenziju
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact form — izostavljena na /kontakt, vidi gore. */}
        {prikaziFormu && (
          <div className="bg-ink-surface border border-ink-border p-8 md:p-14 rounded-[2rem] relative mt-8 lg:mt-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wine text-ink-text px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
              Ostavi poruku
            </div>
            <ContactForm />
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto mt-16 rounded-[1.5rem] overflow-hidden border border-ink-border">
        <MapEmbed />
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-ink-border flex flex-col md:flex-row justify-between items-center gap-6 text-ink-muted text-xs font-mono uppercase tracking-widest text-center">
        <p>© {godina} Duck Family Team, Online Marketing. Sva prava zadržana.</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          <Link href="/" className="hover:text-ink-text transition">
            Početna
          </Link>
          <Link href="/blog" className="hover:text-ink-text transition">
            Blog
          </Link>
          <Link href="/politika-privatnosti" className="hover:text-ink-text transition">
            Privatnost
          </Link>
          <Link href="/politika-kolacica" className="hover:text-ink-text transition">
            Kolačići
          </Link>
          <button
            type="button"
            onClick={openCookieSettings}
            className="uppercase tracking-widest hover:text-ink-text transition"
          >
            Podešavanja kolačića
          </button>
          <a
            href="https://www.instagram.com/duckfamilyteam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink-text transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
