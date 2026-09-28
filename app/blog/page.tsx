import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { blogPosts } from '@/lib/blogPosts'
import PodvucenaRec from '@/components/PodvucenaRec'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Ekspertski blog Duck Family Team agencije. Saveti za Google oglase, SEO optimizaciju, GA4 analitiku i Next.js sajtove koji donose pravi profit.',
  alternates: { canonical: 'https://www.duckfamilyteam.online/blog' },
  keywords: [
    'Google Ads blog',
    'SEO blog Srbija',
    'digitalni marketing saveti',
    'GA4 analitika vodič',
    'Google Ads optimizacija',
    'Next.js web development',
    'Duck Family Team blog',
  ],
  openGraph: {
    title: 'Duck Family Team blog, marketing koji donosi profit',
    description: 'Strategije iz prve ruke koje testiramo svakodnevno.',
    url: 'https://www.duckfamilyteam.online/blog',
  },
}

// Lista je preseljena u `lib/blogPosts.ts` da bi je koristila i pocetna strana.
const posts = blogPosts

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* ── HERO ── */}
          <section className="mb-16 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              Blog
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 text-balance">
              Marketing <PodvucenaRec>bez filtera</PodvucenaRec>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Delimo strategije koje testiramo svakodnevno. Nema pametovanja, samo čisti podaci i saveti za veći profit.
            </p>
          </section>

          {/* ── POSTS GRID ── */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl overflow-hidden flex flex-col transition-colors ${
                  i === 0 ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? 'h-56 md:h-72 lg:h-auto lg:min-h-[320px] lg:w-1/2 lg:shrink-0' : 'h-48'
                  }`}
                >
                  <Image
                    src={post.img}
                    unoptimized
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes={i === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                  />
                  <span className="absolute top-4 left-4 bg-wine text-ink-text text-[10px] font-mono uppercase px-3 py-1.5 rounded-full tracking-widest">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 font-mono text-ink-muted text-xs uppercase tracking-widest mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} čitanja</span>
                  </div>
                  <h2
                    className={`font-display font-medium mb-3 leading-snug ${
                      i === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}
                  >
                    {post.title}
                  </h2>
                  <p className="text-ink-muted text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                  <span className="text-sm font-medium flex items-center gap-2">
                    Pročitaj više
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </section>

          {/* ── NEWSLETTER ──
              Namerno traka od jednog reda, ne još jedna puna CTA kutija sa
              velikim naslovom: stajala je odmah iznad završnog Footer bloka,
              pa je posetilac video dva poziva na akciju zaredom (vizuelna
              provera, krug 7, ispravka 3). Footer ispod nosi jedini "veliki"
              poziv na akciju na stranici. */}
          <section className="border-t border-b border-ink-border py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
            <div className="md:max-w-xs">
              <p className="font-mono text-xs uppercase tracking-widest text-wine-text mb-1">
                Newsletter
              </p>
              <p className="text-ink-muted text-sm">
                Jedna analiza tržišta mesečno, bez spama.
              </p>
            </div>
            {/* Ranije je ovde stajala forma sa action="https://formspree.io/f/…",
                koju CSP pravilo `form-action 'self'` blokira. Prijava sada ide
                preko sopstvene /api/newsletter rute, sa saglasnošću i honeypot-om. */}
            <div className="w-full md:w-auto md:flex-1 md:max-w-md">
              <NewsletterForm />
            </div>
          </section>

        </div>
      </main>
      <Footer containerClassName="max-w-7xl" />
    </>
  )
}
