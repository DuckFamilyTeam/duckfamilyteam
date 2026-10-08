'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ContactForm from './ContactForm'
import MapEmbed from './MapEmbed'
import { openCookieSettings } from './CookieConsent'
import { trackEmailClick, trackPhoneClick, trackReviewClick } from '@/lib/analytics'

const googleMapsUrl = 'https://www.google.com/maps?cid=13771670212645560743'
const googleReviewUrl = 'https://g.page/r/CachkcwXzR6_EBM/review'

interface FooterProps {
  // Svaka podstranica je ranije imala sopstvenu CTA kutiju ("Pokrenite kampanju...",
  // "Želite sličan rezultat?"...) odmah iznad ovog bloka — dva poziva na akciju
  // zaredom (vizuelna provera, krug 4, stavka Hijerarhija). Sad postoji samo JEDAN
  // CTA blok po stranici: stranica prosledi svoju poruku ovamo, umesto da pravi
  // drugu kutiju. Bez prop-a ostaje generičan naslov za početnu i ostale stranice.
  ctaHeading?: string
  ctaDescription?: string
  // Kontejner završnog bloka i mape mora da prati kontejner GLAVNOG sadržaja
  // stranice koja poziva Footer — sadržaj nije iste širine na svim stranicama
  // (početna i blog lista koriste max-w-7xl, članci max-w-4xl, sve ostale
  // podstranice max-w-5xl). Podrazumevano max-w-5xl jer to koristi većina
  // podstranica; početna, blog lista i članci ga eksplicitno menjaju.
  // (vizuelna provera krug 8: max-w-5xl svuda je popravio podstranice ali
  // pokvario početnu i blog listu, gde je sadržaj širi.)
  containerClassName?: string
}

export default function Footer({
  ctaHeading,
  ctaDescription,
  containerClassName = 'max-w-5xl',
}: FooterProps = {}) {
  const godina = new Date().getFullYear()
  const pathname = usePathname()

  // Stranica /kontakt ima sopstvenu formu u glavnom sadržaju. Footer se
  // renderuje na svakoj stranici, pa su se tamo pojavljivale dve identične
  // forme jedna ispod druge — posetilac ne zna koja je „prava“, a i sam upit
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
      {prikaziFormu && (
      <div className={`${containerClassName} mx-auto grid gap-12 md:gap-16 lg:grid-cols-2`}>
        {/* Left: Contact info */}
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-3">
            {/* Naslov završnog bloka je namerno JEDAN korak ispod H1 stranice
                (clamp, ne text-6xl): zatvaranje ne sme da nadjača otvaranje,
                vizuelna provera krug 7, ispravka 1. Odnos prema najmanjem H1
                na sajtu (md:text-5xl = 48px) ostaje ≥ 1,3:1 na svim širinama. */}
            <h2 className="font-display font-medium text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.15] tracking-tight">
              {ctaHeading ?? (
                <>
                  Vreme je da <br />
                  <span className="text-wine-text">pobedite.</span>
                </>
              )}
            </h2>
            {ctaDescription && (
              <p className="text-ink-muted text-base md:text-lg max-w-md">{ctaDescription}</p>
            )}
          </div>
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

        {/* Right: Contact form */}
          <div className="bg-ink-surface border border-ink-border p-8 md:p-14 rounded-[2rem] relative mt-8 lg:mt-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wine text-ink-text px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
              Ostavi poruku
            </div>
            <ContactForm />
          </div>
      </div>
      )}

      {/* Isti kontejner kao glavni sadržaj stranice (vidi containerClassName
          gore) — ranije je ovde bilo fiksno max-w-7xl ili max-w-5xl, pa je
          leva ivica skakala u odnosu na sadržaj na nekim stranicama
          (vizuelna provera krug 7 ispravka 2, krug 8 regresija). */}
      <div
        className={`${containerClassName} mx-auto rounded-[1.5rem] overflow-hidden border border-ink-border ${
          prikaziFormu ? 'mt-16' : ''
        }`}
      >
        <MapEmbed />
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-ink-border flex flex-col md:flex-row justify-between items-center gap-6 text-ink-muted text-xs font-mono uppercase tracking-widest text-center">
        <p>© {godina} Nikola Stanković, Duck Family Team. Sva prava zadržana.</p>
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
