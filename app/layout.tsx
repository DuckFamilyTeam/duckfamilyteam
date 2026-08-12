import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/CookieConsent'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-display',
    display: 'swap',
    preload: true,
})

const plexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-sans',
    display: 'swap',
    preload: true,
})

const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-mono',
    display: 'swap',
    preload: false,
})

const siteUrl = 'https://www.duckfamilyteam.online'

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: 'Google Ads Agencija Srbija | SEO & GA4 Analitika | Duck Family Team',
          template: '%s | Duck Family Team',
    },
    description:
          'Sertifikovani Google Ads stručnjaci iz Srbije. Povećajte prodaju uz precizno targetiranje, istraživanje ključnih reči i naprednu GA4 analitiku. Duck Family Team, transparentan rad i merljivi rezultati.',
    keywords: [
          'Google Ads agencija',
          'Google Ads Srbija',
          'Google oglasi',
          'SEO optimizacija Srbija',
          'digitalni marketing Srbija',
          'GA4 analitika',
          'PPC stručnjak',
          'povećanje prodaje',
          'remarketing',
          'Duck Family Team',
        ],
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
    openGraph: {
          type: 'website',
          locale: 'sr_RS',
          url: siteUrl,
          siteName: 'Duck Family Team',
          title: 'Duck Family Team | Eksperti za Google Ads i SEO u Srbiji',
          description:
                  'Pretvaramo klikove u kupce. Sertifikovana agencija fokusirana na profitabilne Google Ads kampanje i SEO optimizaciju.',
          images: [
            {
                      url: '/img/og-image.png',
                      width: 1200,
                      height: 630,
                      alt: 'Duck Family Team, Google Ads i SEO Agencija',
            },
                ],
    },
    twitter: {
          card: 'summary_large_image',
          title: 'Duck Family Team | Google Ads & SEO Agencija',
          description: 'Pretvaramo klikove u kupce. Sertifikovana agencija za Google Ads i SEO.',
          images: ['/img/og-image.png'],
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
  name: 'Duck Family Team',
  url: siteUrl,
  description: 'Sertifikovana Google Ads agencija u Srbiji. Specijalizovani za PPC, SEO i GA4 analitiku.',
  inLanguage: 'sr-RS',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const googleMapsUrl = 'https://www.google.com/maps?cid=13771670212645560743'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Duck Family Team - Online Marketing',
  alternateName: 'Duck Family Team',
  url: siteUrl,
  logo: `${siteUrl}/img/logo-za-nasu-agenciju.png`,
  description:
    'Sertifikovana Google Ads agencija u Srbiji. Specijalizovani za PPC, SEO i GA4 analitiku.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
        <head>
        <link rel="icon" type="image/png" href="/img/logo-za-nasu-agenciju.png" />
        <link rel="apple-touch-icon" href="/img/logo-za-nasu-agenciju.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
          />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />

        </head
      >
      <body className="font-sans antialiased bg-ink-bg text-ink-text overflow-x-hidden">
        {/* Consent Mode v2 defaults, must run before gtag.js loads */}
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
          var stored = localStorage.getItem('cookie_consent');
          if (stored === 'granted') {
          gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'granted'
          });
          }
          } catch (e) {}
          `}
        </Script>
        
          {children}
        <CustomCursor />
        <CookieConsent />
        {/* Vercel Web Analytics — cookieless, no personal data, no consent banner needed */}
        <Analytics />
        {/* Google Ads + GA4 Tag */}
        {/* GA4 Tag (Google Ads uklonjen - nalog se vise ne koristi) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HW9597T7Y7"
          strategy="afterInteractive"
          />
        <Script id="google-tags-config" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HW9597T7Y7');
          `}
          
        </Script>
      </body>
    </html>
    )
}
