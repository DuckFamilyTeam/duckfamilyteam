'use client'

import Link from 'next/link'
import ContactForm from './ContactForm'

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

function trackReviewClick() {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'gbp_review_click' })
}

const googleMapsUrl = 'https://www.google.com/maps?cid=13771670212645560743'
const googleReviewUrl = 'https://g.page/r/CachkcwXzR6_EBM/review'
const mapEmbedQuery = encodeURIComponent(
  'Duck Family Team - Online Marketing, Porodice Josipović 2, Sremčica, Beograd'
)

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-ink-bg pt-20 pb-12 px-6 md:px-12 text-ink-text border-t border-ink-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16">
        {/* Left: Contact info */}
        <div className="space-y-8 md:space-y-10">
          <h2 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight">
            Vreme je da <br />
            <span className="text-wine-bright">pobedite.</span>
          </h2>
          <div className="space-y-4">
            <p className="font-mono text-ink-muted text-xs uppercase tracking-widest">Direktna linija</p>
            <a
              href="tel:+381643877524"
              className="block font-display font-medium text-2xl md:text-4xl hover:text-wine-bright transition tracking-tight"
            >
              +381 64 387 7524
            </a>
            <p className="font-mono text-ink-muted pt-6 text-xs uppercase tracking-widest">Email</p>
            <a
              href="mailto:stankovic.s.nikola@gmail.com"
              className="block text-lg md:text-2xl font-medium hover:text-wine-bright transition break-all"
            >
              stankovic.s.nikola@gmail.com
            </a>
            <p className="font-mono text-ink-muted pt-6 text-xs uppercase tracking-widest">Adresa</p>
            <p className="text-lg md:text-xl font-medium text-ink-text">
              Porodice Josipović 2, Sremčica, Beograd
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-wine-bright hover:text-ink-text transition font-medium text-sm"
              >
                Pogledaj nas na Google mapi
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackReviewClick}
                className="inline-flex items-center gap-2 text-wine-bright hover:text-ink-text transition font-medium text-sm"
              >
                Ostavite recenziju
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

      <div className="max-w-7xl mx-auto mt-16 rounded-[1.5rem] overflow-hidden border border-ink-border">
        <iframe
          src={`https://www.google.com/maps?q=${mapEmbedQuery}&output=embed`}
          width="100%"
          height="320"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Duck Family Team - Online Marketing na Google mapi"
          className="grayscale-[40%]"
        />
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-ink-border flex flex-col md:flex-row justify-between items-center gap-6 text-ink-muted text-xs font-mono uppercase tracking-widest text-center">
        <p>© 2026 Duck Family Team, Online Marketing. Sva prava zadržana.</p>
        <div className="flex gap-8">
          <Link href="/" className="hover:text-ink-text transition">Početna</Link>
          <Link href="/blog" className="hover:text-ink-text transition">Blog</Link>
          <a
            href="https://www.instagram.com/duckfamilyteam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink-text transition"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
