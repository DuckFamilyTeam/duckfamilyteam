import Link from 'next/link'

export default function Footer() {
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
            <p className="text-slate-400 text-xs uppercase tracking-widest font-black">Direktna Linija</p>
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
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase italic tracking-widest whitespace-nowrap">
            Ostavi Poruku
          </div>
          <form
            action="https://formspree.io/f/mgoppzqp"
            method="POST"
            className="space-y-4 md:space-y-6"
          >
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
              className="btn-duck w-full text-white p-5 md:p-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest"
            >
              Pokreni Moj Rast
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest text-center">
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
