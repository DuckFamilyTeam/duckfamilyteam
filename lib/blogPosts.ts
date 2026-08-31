export type BlogPost = {
  slug: string
  img: string
  tag: string
  title: string
  excerpt: string
  /** GGGG-MM-DD */
  date: string
  readTime: string
}

/**
 * Jedan izvor istine za listu blog postova.
 *
 * Koriste ga i `/blog` i sekcija „Iz bloga" na početnoj. Ranije je lista
 * postojala samo u `app/blog/page.tsx`, pa početna nije linkovala nijedan
 * tekst — Search Console je 2026-08-19 pokazao posledicu: `/blog` i tri posta
 * stajali su kao „Otkrivena, trenutno nije indeksirana", jer su tekstovi bili
 * dostupni samo preko čvorišta koje ni samo nije indeksirano.
 *
 * Redosled je hronološki, najnoviji prvi. Početna prikazuje prva tri.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'cena-vodjenja-google-business-profila',
    img: '/img/blog/google-business-profil.svg',
    tag: 'GBP',
    title: 'Cena vođenja Google Business Profila u Srbiji: od čega zavisi mesečna cena',
    excerpt:
      'Google Business Profile je besplatan alat, ali vođenje nije. Šta pomera mesečnu cenu, kada se isplati raditi sami, i koliko mi naplaćujemo.',
    date: '2026-08-31',
    readTime: '6 min',
  },
  {
    slug: 'koliko-kosta-google-ads',
    img: '/img/blog/koliko-kosta-google-ads.jpg',
    tag: 'Google Ads',
    title: 'Koliko košta Google Ads u Srbiji, i kako se budžet stvarno računa',
    excerpt:
      'Prosečna cena klika za Srbiju ne postoji. Kako da izvučete svoju iz Keyword Planner-a, i iz čega se sastoji mesečni trošak kampanje.',
    date: '2026-08-19',
    readTime: '9 min',
  },
  {
    slug: 'google-business-profil',
    img: '/img/blog/google-business-profil.svg',
    tag: 'GBP',
    title: 'Google Business Profil: vaš najjači, a najčešće zanemareni alat',
    excerpt:
      'Besplatan je i gradi poverenje pre nego što neko klikne na vaš sajt. Saznajte kako da ga pametno napravite i optimizujete, za male, srednje i velike firme.',
    date: '2026-07-23',
    readTime: '9 min',
  },
  {
    slug: 'astro-sajtovi',
    img: '/img/blog/astro-sajtovi.svg',
    tag: 'Web Development',
    title: 'Astro sajtovi: zašto su trenutno najbolja tehnologija za web?',
    excerpt:
      'Island Architecture, nulti JavaScript i Lighthouse score 100. Otkrijte zašto Google voli Astro sajtove i zašto vaš biznis treba jedan.',
    date: '2026-05-09',
    readTime: '8 min',
  },
  {
    slug: 'google-ads-trosak',
    img: '/img/blog/google-ads-trosak.svg',
    tag: 'Google Ads',
    title: 'Zašto vaši Google oglasi troše novac bez konverzija?',
    excerpt:
      'Otkrijte 3 najčešće greške koje prave početnici i kako da podesite Smart Bidding da radi za vaš profit.',
    date: '2026-04-01',
    readTime: '5 min',
  },
  {
    slug: 'seo-2026',
    img: '/img/blog/seo-2026.svg',
    tag: 'SEO',
    title: 'SEO u 2026: da li su ključne reči i dalje bitne?',
    excerpt:
      'Google algoritam se menja. Fokus se pomera sa kucanja reči na nameru korisnika. Saznajte kako da dominirate.',
    date: '2026-03-15',
    readTime: '7 min',
  },
  {
    slug: 'ga4-vodic',
    img: '/img/blog/ga4-vodic.svg',
    tag: 'Analitika',
    title: 'GA4 vodič za preduzetnike: šta zapravo treba da gledate?',
    excerpt:
      'Ne dozvolite da vas gomila brojeva zbuni. Fokusirajte se na ove 3 metrike koje direktno pokazuju koliko zarađujete.',
    date: '2026-02-28',
    readTime: '6 min',
  },
]
