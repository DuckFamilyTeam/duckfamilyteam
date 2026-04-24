import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Blog | Saveti za Google Ads i SEO',
  description:
    'Ekspertski blog Duck Family Team agencije. Saveti za Google oglase, SEO optimizaciju i GA4 analitiku koji donose pravi profit.',
  alternates: { canonical: 'https://www.duckfamilyteam.online/blog' },
  openGraph: {
    title: 'Duck Family Team Blog — Marketing koji donosi profit',
    description: 'Strategije iz prve ruke koje testiramo svakodnevno.',
    url: 'https://www.duckfamilyteam.online/blog',
  },
}

const posts = [
  {
    slug: 'google-ads-trosak',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tag: 'Google Ads',
    tagColor: 'bg-teal-500',
    title: 'Zašto vaši Google oglasi troše novac bez konverzija?',
    excerpt:
      'Otkrijte 3 najčešće greške koje prave početnici i kako da podesite Smart Bidding da radi za vaš profit.',
    date: '2026-04-01',
    readTime: '5 min',
  },
  {
    slug: null,
    img: 'https://www.vazoola.com/hs-fs/hubfs/The%20SEO%20Ecosystem%20in%202026.webp?width=864&height=486&name=The%20SEO%20Ecosystem%20in%202026.webp',
    tag: 'SEO',
    tagColor: 'bg-blue-600',
    title: 'SEO u 2026: Da li su ključne reči i dalje bitne?',
    excerpt:
      'Google algoritam se menja. Fokus se pomera sa "kucanja reči" na "nameru korisnika". Saznajte kako da dominirate.',
    date: '2026-03-15',
    readTime: '7 min',
  },
  {
    slug: null,
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tag: 'Analitika',
    tagColor: 'bg-slate-900',
    title: 'GA4 vodič za preduzetnike: Šta zapravo treba da gledate?',
    excerpt:
      'Ne dozvolite da vas gomila brojeva zbuni. Fokusirajte se na ove 3 metrike koje direktno pokazuju koliko zarađujete.',
    date: '2026-02-28',
    readTime: '6 min',
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                Marketing{' '}
                <span className="duck-gradient-text italic">Bez Filtera.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-medium">
                Delimo strategije koje testiramo svakodnevno. Nema "pametovanja", samo čisti podaci i saveti za veći profit.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Posts grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 100}>
                <article className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                  <div className="h-64 bg-slate-200 relative overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className={`absolute top-6 left-6 ${post.tagColor} text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest italic`}>
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} čitanja</span>
                    </div>
                    <h2 className="text-2xl font-black text-slate-800 mb-4 leading-tight">{post.title}</h2>
                    <p className="text-slate-500 text-sm italic mb-6 flex-1">{post.excerpt}</p>
                    {post.slug ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#248a84] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                      >
                        Pročitaj više
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ) : (
                      <span className="text-slate-300 font-black text-xs uppercase tracking-widest">Uskoro...</span>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-32 px-6">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/10 blur-3xl" />
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 italic">
                Želite savete direktno u inbox?
              </h2>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium">
                Šaljemo jednu analizu tržišta mesečno. Bez spama, samo konkretni primeri kako da poboljšate prodaju.
              </p>
              <form
                action="https://formspree.io/f/mgoppzqp"
                method="POST"
                className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Vaša email adresa"
                  className="flex-1 p-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-teal-500 italic font-medium"
                  required
                />
                <button type="submit" className="btn-duck text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest">
                  Prijavi se
                </button>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
