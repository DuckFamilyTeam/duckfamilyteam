/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    images: {
          // AVIF kao IZLAZNI format (Next ga servira pregledačima koji ga podržavaju).
          // Napomena o ranjivosti GHSA-2xp9-vwfh-vxw4 (RCE kroz libheif u sharp-u):
          // pogođene su verzije >=10.0.0 <15.5.24 i <16.3.3, a ranjivo je
          // DEKODIRANJE AVIF ULAZA, ne izbor izlaznog formata. Zakrpa je privremeno
          // isključila optimizaciju AVIF ulaznih fajlova. Ovaj sajt je na 16.3.8,
          // svi izvori slika su lokalni (.webp, .png, .svg) i `remotePatterns`
          // nije podešen, pa ne postoji put kojim bi neko podmetnuo AVIF ulaz.
          // Merenje 2026-09-27 (/_next/image, w=828, q=75, lokalno): fotografija
          // (andjela-i-nikola hero) 52.136 → 34.971 B (-33%), Higgsfield
          // ilustracije 9.122→8.180 B i 12.156→8.064 B, bez regresije na
          // LCP/CLS/TBT (vidi 05_Odrzavanje_Backup/2026-09-27-cene-pravni-nextjs-vizuali.md).
          formats: ['image/avif', 'image/webp'],
          },
    async redirects() {
          return [
            { source: '/google-ads', destination: '/usluge/google-ads', permanent: true },
            { source: '/izrada-sajtova', destination: '/usluge/izrada-sajtova', permanent: true },
            { source: '/seo-optimizacija', destination: '/usluge/izrada-sajtova', permanent: true },
                ]
    },
    async headers() {
          const isDev = process.env.NODE_ENV !== 'production'
          // Cloudflare Turnstile (components/Turnstile.tsx) samo ako je ključ postavljen pri build-u.
          const cf = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? ' https://challenges.cloudflare.com' : ''
          // Napomena o 'unsafe-inline' u script-src: Next.js App Router ubacuje
          // sopstvene inline skripte za streaming payload (self.__next_f.push).
          // Jedina alternativa je nonce preko middleware-a, a nonce mora biti
          // jedinstven po zahtevu — što bi ceo ovaj statični sajt prebacilo iz
          // SSG u dinamičko renderovanje. Za marketinški sajt to je lošija
          // razmena nego zadržati 'unsafe-inline'.
          const csp = [
                  "default-src 'self'",
                  // va.vercel-scripts.com je nedostajao, pa je <Analytics /> iz
                  // @vercel/analytics bio tiho blokiran CSP-om — komponenta je
                  // stajala u layoutu, ali nijedan podatak nikad nije stigao.
                  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com${cf}`,
                  "style-src 'self' 'unsafe-inline'",
                  "img-src 'self' data: blob: https://www.google.com https://www.gstatic.com",
                  "font-src 'self' data:",
                  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://va.vercel-scripts.com",
                  `frame-src https://www.google.com${cf}`,
                  // Obe forme idu preko sopstvenih API ruta, pa Formspree više nije potreban.
                  "form-action 'self'",
                  "base-uri 'self'",
                  "object-src 'none'",
                  "frame-ancestors 'none'",
                  'upgrade-insecure-requests',
                ].join('; ')

          const permissionsPolicy = [
                  'camera=()',
                  'microphone=()',
                  'geolocation=()',
                  'browsing-topics=()',
                  'interest-cohort=()',
                  'payment=()',
                  'usb=()',
                ].join(', ')

      return [
        {
                  source: '/(.*)',
                  headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    { key: 'Content-Security-Policy', value: csp },
                    { key: 'Permissions-Policy', value: permissionsPolicy },
                    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
                    { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
                            ],
        },
            ]
    },
}

module.exports = nextConfig
