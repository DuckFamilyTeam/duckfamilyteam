import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import NewsletterForm from '@/components/NewsletterForm'

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

const posts = [
  {
    slug: 'google-business-profil',
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800',
    tag: 'GBP',
    title: 'Google Business Profil: vaš najjači, a najčešće zanemareni alat',
    excerpt:
      'Besplatan je i gradi poverenje pre nego što neko klikne na vaš sajt. Saznajte kako da ga pametno napravite i optimizujete, za male, srednje i velike firme.',
    date: '2026-07-23',
    readTime: '9 min',
  },
  {
    slug: 'astro-sajtovi',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tag: 'Web Development',
    title: 'Astro sajtovi: zašto su trenutno najbolja tehnologija za web?',
    excerpt:
      'Island Architecture, nulti JavaScript i Lighthouse score 100. Otkrijte zašto Google voli Astro sajtove i zašto vaš biznis treba jedan.',
    date: '2026-05-09',
    readTime: '8 min',
  },
  {
    slug: 'google-ads-trosak',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tag: 'Google Ads',
    title: 'Zašto vaši Google oglasi troše novac bez konverzija?',
    excerpt:
      'Otkrijte 3 najčešće greške koje prave početnici i kako da podesite Smart Bidding da radi za vaš profit.',
    date: '2026-04-01',
    readTime: '5 min',
  },
  {
    slug: 'seo-2026',
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    tag: 'SEO',
    title: 'SEO u 2026: da li su ključne reči i dalje bitne?',
    excerpt:
      'Google algoritam se menja. Fokus se pomera sa kucanja reči na nameru korisnika. Saznajte kako da dominirate.',
    date: '2026-03-15',
    readTime: '7 min',
  },
  {
    slug: 'ga4-vodic',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tag: 'Analitika',
    title: 'GA4 vodič za preduzetnike: šta zapravo treba da gledate?',
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
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <BackButton />

          {/* ── HERO ── */}
          <section className="mb-16 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              Blog
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6">
              Marketing bez filtera
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              Delimo strategije koje testiramo svakodnevno. Nema pametovanja, samo čisti podaci i saveti za veći profit.
            </p>
          </section>

          {/* ── POSTS GRID ── */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl overflow-hidden flex flex-col transition-colors"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  <h2 className="font-display font-medium text-xl mb-3 leading-snug">{post.title}</h2>
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

          {/* ── NEWSLETTER CTA ── */}
          <section className="bg-ink-surface border border-ink-border rounded-2xl p-10 md:p-16 text-center">
            <h2 className="font-display font-medium text-3xl md:text-4xl mb-4">
              Želite savete direktno u inbox?
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl mx-auto">
              Šaljemo jednu analizu tržišta mesečno. Bez spama, samo konkretni primeri kako da poboljšate prodaju.
            </p>
            {/* Ranije je ovde stajala forma sa action="https://formspree.io/f/…",
                koju CSP pravilo `form-action 'self'` blokira. Prijava sada ide
                preko sopstvene /api/newsletter rute, sa saglasnošću i honeypot-om. */}
            <NewsletterForm />
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
