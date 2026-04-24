# Duck Family Team — Next.js 14

Potpuno optimizovani Next.js sajt za Duck Family Team digitalnu agenciju.

## 🚀 Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000)

## 📁 Struktura projekta

```
duckfamilyteam/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata + Schema.org
│   ├── globals.css         # Globalni stilovi + Tailwind
│   ├── page.tsx            # Početna stranica
│   ├── sitemap.ts          # Automatski generisan sitemap.xml
│   ├── robots.ts           # robots.txt
│   ├── not-found.tsx       # 404 stranica
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── google-ads-trosak/
│           └── page.tsx    # Blog članak
├── components/
│   ├── Navbar.tsx          # Header navigacija (client component)
│   ├── Footer.tsx          # Footer sa contact formom
│   ├── AnimatedSection.tsx # Scroll reveal animacije
│   └── FaqAccordion.tsx    # FAQ accordion
├── public/
│   └── img/                # ⚠️ Kopiraj sve slike ovde!
└── next.config.js
```

## 🖼️ Slike — OBAVEZNO

Kopiraj sve slike iz originalnog sajta u `/public/img/`:

```
public/img/
├── logo-za-nasu-agenciju.png
├── andjela-i-nikola-u-radnoj-sobi-1.png
├── nikola-stankovic-slika-sertifikata.png
├── andjela-slika-sertifikata.png
└── og-image.png              ← Napravi OG sliku 1200×630px za socijalne mreže
```

## ☁️ Deploy na Vercel

1. Pushuji kod na GitHub
2. Uvezi projekat na [vercel.com](https://vercel.com)
3. Vercel automatski detektuje Next.js — samo klikni Deploy
4. Dodaj custom domain: `www.duckfamilyteam.online`

## ✅ SEO šta je dodato

- ✅ Server-side rendering (Next.js App Router)
- ✅ `<title>` i `<meta description>` za svaku stranicu
- ✅ Open Graph tagovi (Facebook, LinkedIn)
- ✅ Twitter Card tagovi
- ✅ Canonical URL-ovi
- ✅ Google site verification
- ✅ Schema.org — Organization, FAQPage, BlogPosting
- ✅ Automatski sitemap.xml (`/sitemap.xml`)
- ✅ robots.txt (`/robots.txt`)
- ✅ Next.js Image optimizacija (WebP, lazy loading)
- ✅ Next/Font (bez layout shift)
- ✅ Breadcrumbs na blog člancima
- ✅ Security headers (X-Frame-Options, XSS Protection)
- ✅ Scroll reveal animacije bez GSAP (manji bundle)
- ✅ FAQ accordion bez JS biblioteka

## 🏎️ Performanse

Ovaj sajt je optimizovan za Lighthouse 95+ skor:
- Fontovi se učitavaju lokalno (Next/Font)
- Slike su Next/Image sa lazy loadingom i WebP
- Nema CDN Tailwind u produkciji — samo compiled CSS
- Nema GSAP u produkciji — pure CSS/JS animacije
- Server Components po defaultu (minimum JS na klijentu)
