'use client'

import Link from 'next/link'
import { useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mgoppzqp', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        // Google Ads konverzija: Slanje forme
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18049467991/PY7bCL26jsscENeM1J5D',
          })
        }
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer id="kontakt" className="bg-slate-900 rounded-t-[3rem] md:rounded-t-[6rem] pt-20 pb-12 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16">
        {/* Left: Contact info */}
        <div className="space-y-8 md:space-y-10">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter italic">
            Vreme je da <br />
            <span className="text-teal-400">pobedite.</span>
          </h2>
          <div className="space-y-4">
            <p className="text-slate-300 text-xs uppercase tracking-widest font-black">Direktna Linija</p>
            <a
              href="tel:+381643877524"
              className="block text-2xl md:text-4xl font-bold hover:text-teal-400 transition tracking-tighter"
            >
              +381 64 387 7524
            </a>
            <p className="text-slate-400 pt-6 text-xs uppercase tracking-widest font-black">Email</p>
            <a
              href="mailto:stankovic.s.nikola@gmail.com"
              className="block text-lg md:text-2xl font-bold hover:text-teal-400 transition break-all"
            >
              stankovic.s.nikola@gmail.com
            </a>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="bg-white p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl text-slate-900 relative mt-8 lg:mt-0">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-700 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase italic tracking-widest whitespace-nowrap">
            Ostavi Poruku
          </div>
          {status === 'success' ? (
            <div className="py-16 text-center space-y-4">
              <p className="text-3xl font-black italic tracking-tighter text-teal-700">Poruka poslata!</p>
              <p className="text-slate-500 font-medium text-sm">
                Hvala na poverenju. Javljamo se u najkraćem roku.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Vaše Ime"
                  className="w-full p-4 md:p-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-teal-500 font-medium italic text-sm"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  className="w-full p-4 md:p-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-teal-500 font-medium italic text-sm"
                  required
                />
              </div>
              <input
                type="url"
                name="website"
                placeholder="Vaš Sajt (opciono)"
                className="w-full p-4 md:p-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-teal-500 font-medium italic text-sm"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Vaši ciljevi?"
                className="w-full p-4 md:p-5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-teal-500 font-medium italic text-sm resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-duck w-full text-white p-5 md:p-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest disabled:opacity-60"
              >
                {status === 'sending' ? 'Slanje...' : 'Pokreni Moj Rast'}
              </button>
              {status === 'error' && (
                <p className="text-red-600 text-sm font-bold text-center">
                  Došlo je do greške. Pozovite nas ili pokušajte ponovo.
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-300 text-[10px] font-bold uppercase tracking-widest text-center">
        <p>© 2026 Duck Family Team. Sva prava zadržana.</p>
        <div className="flex gap-8">
          <Link href="/" className="hover:text-teal-400 transition">Početna</Link>
          <Link href="/blog" className="hover:text-teal-400 transition">Blog</Link>
          <a
            href="https://www.instagram.com/duckfamilyteam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
