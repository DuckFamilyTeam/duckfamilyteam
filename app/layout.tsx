import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/CookieConsent'
import Aurora from '@/components/Aurora'
import MotionRuntime from '@/components/MotionRuntime'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'
import './globals.css'

// latin-ext nosi č, ć, š, ž, đ — praktično svaka srpska rečenica ima bar jedno
// od tih slova, pa je taj podskup na ovom sajtu kritičan, ne opcioni.
const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

const siteUrl = 'https://www.duckfamilyteam.online'

// Jedan @id za firmu, da Google ne vidi dva nepovezana poslovna entiteta
// (ProfessionalService ovde i LocalBusiness na početnoj).
// Namerno bez `export`: Next dozvoljava da layout izvozi samo poznati skup
// imena (default, metadata, viewport…), pa je `export const ORGANIZATION_ID`
// obarao `tsc --noEmit` na generisanim tipovima u .next/types. Konstanta se
// ionako koristi samo u ovom fajlu.
const ORGANIZATION_ID = `${siteUrl}/#organizacija`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Google Ads Agencija Srbija | SEO & GA4 Analitika | Duck Family Team',
    template: '%s | Duck Family Team',
  },
  description:
    'Sertifikovani Google Ads stručnjaci iz Srbije. Povećajte prodaju uz precizno targetiranje, istraživanje ključnih reči i naprednu GA4 analitiku. Duck Family Team, transparentan rad i merljivi rezultati.',
  authors: [{ name: 'Duck Family Team', url: siteUrl }],
  creator: 'Duck Family Team',
  publisher: 'Duck Family Team',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // openGraph.images i twitter.images namerno nisu navedeni — sliku isporučuje
  // app/opengraph-image.tsx, pa se generiše iz koda i ne može da nedostaje.
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: siteUrl,
    siteName: 'Duck Family Team',
    title: 'Duck Family Team | Eksperti za Google Ads i SEO u Srbiji',
    description:
      'Pretvaramo klikove u kupce. Google Ads kampanje, Google Business profil i brzi sajtovi, sa merenjem koje pokazuje šta donosi upite.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duck Family Team | Google Ads & SEO Agencija',
    description:
      'Google Ads kampanje, Google Business profil i brzi sajtovi. Merljivi rezultati, bez skrivenih troškova.',
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'c13b37c4c11f0b33',
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#sajt`,
  name: 'Duck Family Team',
  url: siteUrl,
  description: 'Google Ads agencija u Srbiji. Specijalizovani za PPC, SEO i GA4 analitiku.',
  inLanguage: 'sr-Latn-RS',
  publisher: { '@id': ORGANIZATION_ID },
}

const googleMapsUrl = 'https://www.google.com/maps?cid=13771670212645560743'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORGANIZATION_ID,
  name: 'Duck Family Team - Online Marketing',
  alternateName: 'Duck Family Team',
  url: siteUrl,
  logo: `${siteUrl}/img/logo-za-nasu-agenciju.png`,
  image: `${siteUrl}/img/logo-za-nasu-agenciju.png`,
  description: 'Google Ads agencija u Srbiji. Specijalizovani za PPC, SEO i GA4 analitiku.',
  telephone: '+381643877524',
  email: 'stankovic.s.nikola@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Porodice Josipović 2',
    addressLocality: 'Sremčica',
    addressRegion: 'Beograd',
    postalCode: '11253',
    addressCountry: 'RS',
  },
  hasMap: googleMapsUrl,
  areaServed: 'RS',
  sameAs: ['https://www.instagram.com/duckfamilyteam/', googleMapsUrl],
  priceRange: '$$',
  serviceType: ['Google Ads', 'SEO Optimizacija', 'GA4 Analitika', 'Digitalni Marketing'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning je ovde obavezan: inline skripta u <head> doda
    // klasu `js` na <html> pre nego što React krene da hidratira, pa se server
    // i klijent nužno razlikuju baš u tom atributu. Isti obrazac koriste i
    // biblioteke za temu (next-themes). Ne utiče na decu, samo na ovaj element.
    <html
      lang="sr-Latn-RS"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Sve što se skriva pre ulazne animacije skriveno je pod `.js` klasom.
            Ova skripta je jedini način da se klasa postavi PRE prvog paint-a —
            zato je inline i blokirajuća, a ne `next/script`. Ako JavaScript ne
            radi, klase nema, ništa se ne skriva i ceo sadržaj je odmah vidljiv.
            Time je i stari <noscript> blok postao nepotreban. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-ink-bg text-ink-text">
        {/* Consent Mode v2 — mora da se izvrši pre gtag.js.
            Reklamni tagovi su uklonjeni sa sajta, pa se traži pristanak samo
            za analitiku; ad_* ostaje trajno denied dok se Ads ne vrati. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
try {
  if (localStorage.getItem('cookie_consent') === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {}
          `}
        </Script>

        {/* Traka napretka skrola i pozadinski slojevi stoje ispod sadržaja. */}
        <div className="scroll-progress" data-scroll-progress aria-hidden="true" />
        <Aurora />

        {children}

        {/* Custom cursor je uklonjen: sa svetlom koje prati miša i magnetnim
            dugmadima prsten je postao vizuelni šum, `mix-blend-mode: difference`
            je skup za GPU, a skrivanje sistemskog kursora smeta posetiocima
            kojima ovaj sajt prodaje — vlasnicima lokalnih firmi. */}
        <MotionRuntime />
        <CookieConsent />
        {/* Vercel Web Analytics — bez kolačića i bez ličnih podataka. */}
        <Analytics />
        {/* GA4 (Google Ads tag uklonjen — nalog se više ne koristi) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tags-config" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
