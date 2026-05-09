'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

// Embedded Marketing Knowledge Base
const KNOWLEDGE_BASE = {
  roas: {
    keywords: ['roas', 'return on ad spend', 'povrat na ulaganje u oglase'],
    answer: `**Šta je ROAS?**

ROAS (Return on Ad Spend) je metrika koja pokazuje koliko prihoda dobijate za svaki dinar uložen u oglase.

**Formula:**
ROAS = Prihod od oglasa / Trošak oglasa

**Primer:**
Ako ste potrošili 5,000 RSD na Google Ads i zaradili 25,000 RSD:
ROAS = 25,000 / 5,000 = 5:1 (ili 500%)

To znači da za svaki uloženi dinar dobijate 5 dinara nazad.

**Šta je dobro:**
• ROAS 4:1 ili više je odličan rezultat
• ROAS 2:1-4:1 je solidan
• ROAS ispod 2:1 zahteva optimizaciju

**Razlika od ROI:** ROAS gleda samo prihod, dok ROI računa čisti profit nakon svih troškova.

Želite da optimizujemo vaš ROAS? Kontaktirajte Duck Family Team!`,
  },
  roi: {
    keywords: ['roi', 'return on investment', 'povrat investicije'],
    answer: `**Šta je ROI?**

ROI (Return on Investment) pokazuje profitabilnost investicije izraženu u procentima.

**Formula:**
ROI = (Profit - Ulaganje) / Ulaganje × 100%

**Primer:**
Uložili ste 10,000 RSD u Google Ads kampanju. Zaradili ste 50,000 RSD, a proizvodni troškovi su 20,000 RSD.

Profit = 50,000 - 20,000 - 10,000 = 20,000 RSD
ROI = 20,000 / 10,000 × 100% = 200%

**Razlika ROI vs ROAS:**
• **ROI** računa čisti profit (oduzima SVE troškove)
• **ROAS** gleda samo prihod od oglasa

ROI > 100% znači da zarađujete više nego što trošite! 📈`,
  },
  googleAds: {
    keywords: ['google ads', 'google oglašavanje', 'kako se reklamirati', 'ppc', 'pay per click'],
    answer: `**Kako se reklamirati na Google-u?**

Google Ads je platforma gde plaćate samo kada neko KLIKNE na vaš oglas (PPC - Pay Per Click).

**Koraci:**
1️⃣ Kreirajte Google Ads nalog
2️⃣ Definišite cilj (prodaja, leadovi, saobraćaj)
3️⃣ Izaberite tip kampanje (Search, Display, Video, Shopping)
4️⃣ Targetirajte publiku (lokacija, jezik, demografija)
5️⃣ Odaberite ključne reči koje ljudi kucaju
6️⃣ Postavite budžet (minimum 30,000-50,000 RSD mesečno)
7️⃣ Napišite privlačan oglas
8️⃣ Pratite rezultate i optimizujte

**Vrste kampanja:**
• **Search Ads** - Tekstualni oglasi u pretrazi
• **Display Ads** - Banner oglasi na web sajtovima
• **Video Ads** - Oglasi na YouTube-u
• **Shopping Ads** - Proizvodi sa slikama i cenama
• **Performance Max** - AI automatizovane kampanje

Duck Family Team može da vam postavi kompletnu kampanju! 🎯`,
  },
  seo: {
    keywords: ['seo', 'optimizacija', 'organski', 'ranking', 'pozicija'],
    answer: `**Šta je SEO?**

SEO (Search Engine Optimization) je optimizacija sajta da bi se pojavio visoko u organskim (besplatnim) Google rezultatima.

**Tipovi SEO-a:**
🔹 **On-Page SEO** - Optimizacija sadržaja, naslova, meta tagova
🔹 **Off-Page SEO** - Linkbuilding, društvene mreže
🔹 **Technical SEO** - Brzina sajta, struktura, sitemap

**Koliko traje?**
Prvi rezultati se vide nakon 3-6 meseci. SEO je dugoročna investicija.

**SEO vs Google Ads:**
• **SEO:** Besplatan saobraćaj, ali sporo (3-6 meseci)
• **Google Ads:** Plaćen, ali BRZO (rezultati odmah)

**Najbolja strategija:** Kombinacija oba! Google Ads za brze rezultate, SEO za dugoročnu stabilnost.`,
  },
  ga4: {
    keywords: ['ga4', 'google analytics', 'analitika', 'metrike'],
    answer: `**Google Analytics 4 (GA4)**

GA4 je nova verzija Google Analytics-a koja prati korisničko ponašanje kroz događaje.

**Ključne metrike:**
📊 **Sessions** - Broj poseta sajtu
👥 **Users** - Broj korisnika
📉 **Bounce Rate** - % ljudi koji napuste sajt bez interakcije
⚡ **Engagement Rate** - Posete >10s ili sa konverzijom
🎯 **Conversions** - Glavni ciljevi (kupovina, forma, poziv)

**Zašto je važan?**
GA4 pokazuje šta radi, a šta ne. Bez GA4, bacate novac u mrak.

**Povezivanje sa Google Ads:**
Omogućava precizno praćenje ROI-a i optimizaciju kampanja na osnovu stvarnih konverzija.

Duck Family Team postavlja i konfiguracije GA4 za maksimalno praćenje! 📈`,
  },
  budzet: {
    keywords: ['budžet', 'cena', 'koliko košta', 'trošak', 'ulaganje'],
    answer: `**Koliki budžet za Google Ads?**

**Minimalni budžeti:**
💰 **Mali biznisi:** 30,000-50,000 RSD mesečno
💰 **Srednji biznisi:** 100,000-300,000 RSD mesečno
💰 **Velike kompanije:** 500,000+ RSD mesečno

**Zašto je važan budžet?**
Veći budžet = više podataka = bolja optimizacija = bolji ROAS

**Troškovi agencije:**
Agencije obično naplaćuju 15-20% od ad spend-a ili fiksnu mesečnu naknadu.

**Investicija se vraća** kroz bolje performanse!

**Napomena:** U konkurentnim industrijama (advokati, osiguranje, nekretnine) potreban je veći budžet za vidljive rezultate.

Kontaktirajte nas za besplatnu analizu budžeta! 💬`,
  },
  quality_score: {
    keywords: ['quality score', 'skor kvaliteta', 'ocena'],
    answer: `**Quality Score**

Google-ova ocena kvaliteta oglasa od 1-10.

**Šta utiče na Quality Score:**
✅ Relevantnost oglasa za ključnu reč
✅ CTR (Click-Through Rate) - Koliko ljudi klikće
✅ Kvalitet landing page-a

**Zašto je važan?**
Viši Quality Score = Niži CPC + Bolji položaj oglasa

**Kako poboljšati:**
1. Napravite relevantne oglase
2. Koristite ključne reči u tekstu oglasa
3. Optimizujte landing page (brz, mobilno prilagođen)
4. Poboljšajte CTR sa boljim tekstom

Quality Score 7+ je odličan! 🌟`,
  },
  smartBidding: {
    keywords: ['smart bidding', 'automatsko nadmetanje', 'bidding strategija'],
    answer: `**Smart Bidding**

Automatizovana strategija nadmetanja koja koristi mašinsko učenje (AI) da maksimizuje rezultate.

**Tipovi Smart Bidding:**
🤖 **Target CPA** - Ciljaj određeni trošak po konverziji
🤖 **Target ROAS** - Ciljaj određeni povrat na ulaganje
🤖 **Maximize Conversions** - Dobij maksimalan broj konverzija
🤖 **Maximize Conversion Value** - Maksimizuj vrednost konverzija

**Prednosti:**
✅ AI uči ko je najspremniji da kupi
✅ Automatska optimizacija u realnom vremenu
✅ Štedi vreme

**Kada koristiti:**
Potrebno je minimum 30-50 konverzija mesečno da bi Smart Bidding efikasno radio.

Duck Family Team postavlja napredne Smart Bidding strategije! 🚀`,
  },
  landing_page: {
    keywords: ['landing page', 'stranica', 'optimizacija stranice', 'konverzija'],
    answer: `**Landing Page Optimizacija**

Landing page je POLOVINA uspešne kampanje!

**Mora biti:**
⚡ **Brza** - Load time ispod 3 sekunde
📱 **Mobilno prilagođena** - 70%+ saobraćaja je sa telefona
🎯 **Relevantna** - Oglasu mora da odgovara sadržaj stranice
🔥 **Sa jasnim CTA** - "Kupi sada", "Zakaži termin", "Preuzmi"
⭐ **Sa social proof-om** - Recenzije, sertifikati, brojevi

**A/B Testing:**
Testiranje različitih verzija landing page-a da vidite šta bolje radi.

**Rezultat:**
Dobra landing page može da poveća konverzije za 200-300%!

Mi u Duck Family Team pravimo landing page-ove koji KONVERTUJU! 💯`,
  },
  remarketing: {
    keywords: ['remarketing', 'retargeting', 'ponovno targetiranje'],
    answer: `**Remarketing (Retargeting)**

Prikazivanje oglasa ljudima koji su VEĆ POSETILI vaš sajt ali nisu kupili.

**Zašto funkcioniše?**
👁️ Ljudi retko kupuju pri prvoj poseti
🔥 Remarketing podsećanje povećava konverzije za 50-200%
💰 Jeftiniji CPC jer targetirate "toplu" publiku

**Tipovi:**
• **Standard Remarketing** - Display oglasi posle posete
• **Dynamic Remarketing** - Oglasi sa proizvodima koje su gledali
• **Video Remarketing** - YouTube oglasi
• **Search Remarketing (RLSA)** - Prilagođeni Search oglasi

**Najbolja praksa:**
Kreirajte različite oglase za ljude koji su:
- Samo posetili sajt
- Dodali u korpu ali nisu kupili
- Već kupili (upsell)

Remarketing je OBAVEZAN deo svake ozbiljne strategije! 🎯`,
  },
  ctr: {
    keywords: ['ctr', 'click through rate', 'procenat klikova'],
    answer: `**CTR (Click-Through Rate)**

Procenat ljudi koji KLIKNU na vaš oglas nakon što ga vide.

**Formula:**
CTR = (Broj klikova / Broj prikazivanja) × 100%

**Primer:**
Oglas je prikazan 1,000 puta, kliknulo je 50 ljudi:
CTR = 50 / 1,000 × 100% = 5%

**Šta je dobro:**
✅ CTR 5%+ za Search Ads je odličan
✅ CTR 2-5% je solidan
✅ CTR 0.5-1% za Display Ads je normalan

**Kako poboljšati CTR:**
1. Piši privlačnije oglase
2. Koristi brojeve i emocije
3. Dodaj "Call to Action" (Kupi sada, Saznaj više)
4. Testiraj različite verzije oglasa

Viši CTR = Bolji Quality Score = Niži CPC! 🚀`,
  },
  cpc: {
    keywords: ['cpc', 'cost per click', 'trošak po kliku'],
    answer: `**CPC (Cost Per Click)**

Prosečan trošak koji plaćate za jedan klik na oglas.

**Formula:**
CPC = Ukupan trošak / Broj klikova

**Primer:**
Potrošili ste 10,000 RSD, dobili 200 klikova:
CPC = 10,000 / 200 = 50 RSD po kliku

**Šta utiče na CPC:**
📊 Quality Score (viši = niži CPC)
🎯 Konkurencija (više konkurencije = viši CPC)
📍 Targeting (uži targeting = viši CPC)
⏰ Vreme dana i sezona

**Prosečan CPC u Srbiji:**
• Search Ads: 20-100 RSD
• Display Ads: 5-30 RSD
• Shopping Ads: 15-80 RSD

**Važno:** Nizak CPC nije cilj - cilj je PROFITABILNOST (ROI/ROAS)!`,
  },
  nextjs: {
    keywords: ['next.js', 'nextjs', 'next js', 'react sajt', 'react website'],
    answer: `**Next.js Sajtovi**

Next.js je React framework koji koristi Duck Family Team za izradu ultra-performantnih web sajtova.

**Zašto Next.js?**
⚡ **Server-Side Rendering (SSR)** - Stranice se generišu na serveru = brže učitavanje
🔍 **Odličan za SEO** - Google bot vidi kompletan sadržaj odmah
📱 **Mobile-first** - Savršeno prilagođen svim uređajima
🚀 **Vercel deployment** - Hosting na najbržoj infrastrukturi

**Kada koristiti Next.js?**
✅ E-commerce prodavnice
✅ Biznisi sa dinamičnim sadržajem
✅ Sajtovi koji zahtevaju autentifikaciju
✅ Kompleksniji projekti sa bazom podataka

**Lighthouse Score:** Naši Next.js sajtovi postižu 90-100/100!

**Primeri koje smo uradili:**
🔹 Mobilni Vulkanizer Milan - www.mobilnivulkanizermilan.com
🔹 Tepih Servis Jevtić - www.tepihservisjevtic.rs

Kontaktirajte nas za izradu vašeg Next.js sajta! 🦆`,
  },
  astro: {
    keywords: ['astro', 'astro sajt', 'astro framework', 'island architecture', 'static site'],
    answer: `**Astro Sajtovi**

Astro je revolucionarni web framework koji šalje NULA JavaScript-a klijentu po defaultu!

**Zašto je Astro poseban?**
🏝️ **Island Architecture** - Samo interaktivni delovi dobijaju JS
⚡ **Lighthouse Score 100/100** - Savršene performanse bez izuzetka
🔍 **Google ga obožava** - Najbrži sajtovi = najviše pozicije
📦 **Zero JS by default** - Drastično manji bundle size

**Astro vs Next.js:**
| | Astro | Next.js |
|---|---|---|
| Performanse | ★★★★★ | ★★★★ |
| SEO | ★★★★★ | ★★★★★ |
| Dinamičnost | ★★★ | ★★★★★ |
| Blog/Portfolio | ★★★★★ | ★★★★ |

**Kada koristiti Astro?**
✅ Prezentacioni sajtovi
✅ Blogovi i informativni sajtovi
✅ Landing page-ovi
✅ Lokalni biznisi (max brzina = max SEO)

**Naši Astro projekti:**
🔹 Dubinsko Pranje Vetar - dubinsko-pranje-vetar.vercel.app
🔹 Shara Mara Nails Studio - shara-mara-nails-studio.vercel.app

Astro je trenutno BEST CHOICE za lokalne biznise! 🚀`,
  },
  vercel: {
    keywords: ['vercel', 'hosting', 'deployment', 'deploy', 'server'],
    answer: `**Vercel — Najbrži Hosting na Svetu**

Vercel je platforma na kojoj Duck Family Team hostuje sve sajtove. Kreatori Next.js-a!

**Zašto Vercel?**
🌍 **CDN mreža** - Serveri po celom svetu = ultra brzo učitavanje
⚡ **Edge Network** - Sadržaj serviran iz najbližeg servera korisniku
🔄 **Auto-deploy** - Svaka promena na GitHubu = automatski deploy
🆓 **Besplatni SSL** - HTTPS sertifikat bez dodatnih troškova
📊 **Analytics** - Ugrađena analitika performansi

**Vercel prednosti za SEO:**
✅ Automatski HTTPS (Google rangira HTTPS više)
✅ Ultra brzo učitavanje (Core Web Vitals)
✅ 99.99% uptime garantovan
✅ Globalni CDN za brzo učitavanje svuda

**Cena:** Besplatan plan je sasvim dovoljan za većinu malih i srednjih biznisa!

Duck Family Team koristi Vercel za SVE sajtove koje prave. Proverite naše primere na Vercel-u! 🦆`,
  },
  izrada_sajta: {
    keywords: ['izrada sajta', 'pravimo sajt', 'napraviti sajt', 'web sajt', 'website', 'sajt za biznis', 'koliko košta sajt', 'cena sajta', 'web development', 'web dizajn'],
    answer: `**Izrada Web Sajtova — Duck Family Team**

Pravimo ultrabzе, SEO optimizovane sajtove koji donose klijente!

**Šta dobijate:**
🚀 **Ultrabrz sajt** - Lighthouse Score 95-100/100
🔍 **SEO od prvog dana** - Meta opisi, ključne reči, Schema markup
📱 **Mobile-first** - 70%+ saobraćaja je sa telefona
🎨 **Moderan dizajn** - Profesionalan izgled koji ostavlja utisak
☁️ **Vercel hosting** - Najbrža infrastruktura
✅ **Google Ready** - Sve što Google traži za visoke pozicije

**Tehnologije:**
⚛️ **Next.js** - Za dinamičnije sajtove i e-commerce
🌟 **Astro** - Za prezentacione sajtove (max brzina)

**Naši radovi:**
🔗 mobilnivulkanizermilan.com (Next.js) — TOP #1 Google
🔗 tepihservisjevtic.rs (Next.js) — TOP #2 Google
🔗 dubinsko-pranje-vetar.vercel.app (Astro) — TOP #1 Google
🔗 shara-mara-nails-studio.vercel.app (Astro)

**Cena** zavisi od obima projekta. Kontaktirajte nas za besplatnu konsultaciju!

📞 +381 64 387 7524`,
  },
  instagram_ads: {
    keywords: ['instagram', 'instagram oglašavanje', 'instagram reklame', 'instagram kampanja', 'stories', 'reels', 'meta ads', 'facebook'],
    answer: `**Instagram Oglašavanje**

Instagram je platforma sa 1+ milijardu korisnika. Vaša ciljana publika je tamo!

**Vrste Instagram oglasa:**
📸 **Feed oglasi** - Slike i video u feed-u
📱 **Stories** - 15-sekundi video/slika (visok engagement)
🎬 **Reels Ads** - Kratki video format koji eksplodira
🛍️ **Shopping oglasi** - Direktna prodaja iz Instagram-a

**Kako funkcioniše targetiranje:**
🎯 Demografija (starost, pol, lokacija)
❤️ Interesovanja i ponašanje
👥 Lookalike publika (slična vašim kupcima)
🔄 Retargeting (ko je posetio vaš sajt)

**Instagram vs Google Ads:**
| | Instagram | Google |
|---|---|---|
| Publika | "Hladna" - ne traži aktivno | "Vruća" - aktivno traži |
| Format | Vizuelni | Tekstualni |
| Cena | Niži CPC | Viši CPC |
| Rezultati | Svest o brendu + kupovina | Direktna kupovina |

**Najbolja strategija:** Kombinovati oba! Instagram za svest, Google za konverzije.

Duck Family Team vodi Instagram kampanje koje donose stvarne rezultate! 📲`,
  },
  google_platforme: {
    keywords: ['youtube oglasi', 'youtube reklame', 'gmail oglasi', 'display mreža', 'google platforme', 'video oglasi'],
    answer: `**Google Platforme — Sve Na Jednom Mestu**

Google poseduje više platformi za oglašavanje osim Search-a!

**YouTube Oglašavanje:**
🎬 **Skippable In-Stream** - Oglasi koji se mogu preskočiti
⏭️ **Non-skippable** - Obavezno gledanje (6-15 sec)
📺 **Bumper Ads** - 6-sekundni oglasi
📌 **Video Discovery** - Prikazuju se u YouTube pretrazi

**Gmail Ads:**
📧 Oglasi koji izgledaju kao emailovi u inboxu
🎯 Targetiranje po interesovanjima i demografiji
📈 Odličan CTR jer deluje personalizovano

**Display Mreža:**
🌐 2 miliona+ web sajtova i aplikacija
🖼️ Banner oglasi u različitim veličinama
🔄 Odlično za Remarketing kampanje

**Performance Max (AI):**
🤖 Google AI automatski optimizuje oglase
📊 Radi na SVIM Google platformama odjednom
⚡ Uči koji kanali donose najbolje rezultate

**Koja platforma za koga?**
✅ YouTube → Svest o brendu, kompleksniji proizvodi
✅ Gmail → B2B, skupi proizvodi/usluge
✅ Display → Remarketing, lokalni biznisi

Duck Family Team pokriva sve Google platforme! 🦆`,
  },
  kljucne_reci: {
    keywords: ['ključne reči', 'keywords', 'keyword research', 'istraživanje ključnih reči', 'long tail', 'short tail'],
    answer: `**Ključne Reči (Keywords) — Osnova Svega**

Bez pravih ključnih reči, ni SEO ni Google Ads ne mogu da rade efikasno.

**Vrste ključnih reči:**
🎯 **Short-tail** - "vulkanizer" (visok volumen, velika konkurencija)
🎯 **Long-tail** - "mobilni vulkanizer Borča" (niži volumen, manja konkurencija, viša konverzija)
🎯 **Lokalne** - "kafić Novi Sad" (lokalni biznisi)
🎯 **Transakcione** - "kupi", "cena", "poruči" (kupovna namera)

**Zašto su long-tail ključne reči ZLATNE?**
✅ Manja konkurencija = niži CPC
✅ Veća specifičnost = viša stopa konverzije
✅ Lakše rangiranje u organskim rezultatima

**Istraživanje ključnih reči — naš proces:**
1. Analiza vašeg biznisa i industrije
2. Istraživanje konkurencije (šta oni rangiraju)
3. Pronalazak "zlatnih" ključnih reči (visoka namera, niska konkurencija)
4. Implementacija u sajt I Google Ads

**Alati koje koristimo:**
🔧 Google Keyword Planner
🔧 Ahrefs / Semrush
🔧 Google Search Console
🔧 Google Trends

**Važno:** Prave ključne reči su tajna uspeha! Svi naši sajtovi su rangiraju jer koristimo precizne lokalne ključne reči.

Kontaktirajte nas za keyword research! 🦆`,
  },
  cene_usluge: {
    keywords: ['koliko košta', 'cena usluge', 'cena marketinga', 'cena sajta', 'cene', 'paket', 'mesečna naknada', 'koliko naplaćujete'],
    answer: `**Cene Duck Family Team Usluga**

Cene zavise od obima posla i zahteva svakog klijenta individualno.

**Naš proces formiranja cene:**
1️⃣ Razgovaramo o vašim ciljevima i potrebama
2️⃣ Analiziramo vaše tržište i konkurenciju
3️⃣ Dajemo preciznu cenu + kompletan plan rada

**Šta dobijate uz cenu:**
📋 Detaljni plan kampanje
🎯 Definisanu strategiju i korake
📊 Projekcije rezultata
🔄 Redovne izveštaje o napretku

**Orijentacioni budžeti za Google Ads:**
💰 Mali biznis: od 30,000 RSD/mesečno
💰 Srednji biznis: od 100,000 RSD/mesečno
💰 Agencijska naknada: 15-20% od ad spenda

**Izrada sajtova:**
🌐 Prezentacioni sajt (Astro): po dogovoru
🌐 Poslovni sajt (Next.js): po dogovoru
🌐 E-commerce: po dogovoru

**Nema skrivenih troškova!**
Sve je transparentno. Dobijate tačno ono što je dogovoreno.

📞 Pozovite za besplatnu konsultaciju: +381 64 387 7524
📧 stankovic.s.nikola@gmail.com`,
  },
  default: {
    answer: `Hvala na pitanju! 🦆

Za detaljnija pitanja o našim uslugama, slobodno me pitajte o:

🌐 **Izrada Sajtova:** Next.js, Astro, Vercel, SEO optimizacija
📊 **Metrike:** ROAS, ROI, CTR, CPC, CPA, Quality Score
🎯 **Google Ads:** Kampanje, Smart Bidding, Remarketing
📱 **Instagram & Društvene Mreže:** Kampanje i targetiranje
🎬 **YouTube & Gmail:** Oglašavanje na Google platformama
🔍 **SEO & Ključne Reči:** Optimizacija i Ranking strategije
📈 **GA4:** Analitika i praćenje konverzija
💰 **Cene i Budžeti:** Transparentno formiranje cena

Ili kontaktirajte Duck Family Team direktno za besplatnu konsultaciju!

**📞 +381 64 387 7524**
**🌐 www.duckfamilyteam.online`,
  },
}

function findBestMatch(query: string): string {
  const lowerQuery = query.toLowerCase()
  
  // Check each knowledge base entry
  for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
    if (key === 'default') continue
    
    // Type guard to check if value has keywords
    if ('keywords' in value && value.keywords.some(keyword => lowerQuery.includes(keyword))) {
      return value.answer
    }
  }
  
  return KNOWLEDGE_BASE.default.answer
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Zdravo! 👋 Ja sam Duck AI asistent. Mogu da ti pomognem sa pitanjima o Google Ads marketingu, SEO-u, analitici i digitalnoj strategiji. Kako mogu da ti pomognem danas?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate thinking time
    setTimeout(() => {
      const response = findBestMatch(input)
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    'Šta je ROAS?',
    'Kako se reklamirati na Google-u?',
    'Šta je Astro sajt?',
    'Koliko košta izrada sajta?',
    'Instagram oglašavanje?',
    'Šta su ključne reči?',
  ]

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-teal-500 to-blue-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Otvori AI Chat Asistenta"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-md h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-black text-lg">Duck AI Asistent</h3>
                <p className="text-xs text-white/80 font-medium">Marketing Expert 24/7</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-teal-500 to-blue-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  <span className="text-[10px] opacity-60 mt-1 block">
                    {msg.timestamp.toLocaleTimeString('sr-RS', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-6 py-3 bg-white border-t border-slate-100">
              <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Popularna pitanja:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="text-xs bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 px-3 py-1.5 rounded-full font-medium transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Postavi pitanje..."
                className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-br from-teal-500 to-blue-600 text-white px-5 py-3 rounded-xl font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
