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

ROAS (Return on Ad Spend) pokazuje koliko prihoda dobijate za svaki dinar uložen u oglase.

**Formula:**
ROAS = Prihod od oglasa / Trošak oglasa

**Primer iz Srbije:**
Uložili ste 30.000 RSD u Google Ads i zaradili 150.000 RSD:
ROAS = 150.000 / 30.000 = 5:1 (ili 500%)

**Šta je dobro za srpsko tržište:**
✅ ROAS 4:1 ili više — odličan rezultat
✅ ROAS 2:1–4:1 — solidan, ima prostora za rast
⚠️ ROAS ispod 2:1 — kampanja zahteva hitnu optimizaciju

**Razlika od ROI:** ROAS gleda samo prihod, dok ROI računa čisti profit nakon svih troškova.

Kontaktirajte Duck Family Team za optimizaciju vašeg ROAS-a!
📞 +381 64 387 7524`,
  },
  roi: {
    keywords: ['roi', 'return on investment', 'povrat investicije'],
    answer: `**Šta je ROI?**

ROI (Return on Investment) pokazuje profitabilnost cele investicije u procentima.

**Formula:**
ROI = (Profit − Ulaganje) / Ulaganje × 100%

**Primer:**
Uložili ste 20.000 RSD u kampanju. Zaradili ste 80.000 RSD, a troškovi usluge su 30.000 RSD.
Profit = 80.000 − 30.000 − 20.000 = 30.000 RSD
ROI = 30.000 / 20.000 × 100% = 150%

**Razlika ROI vs ROAS:**
• **ROI** — računa čisti profit (oduzima sve troškove)
• **ROAS** — gleda samo prihod od oglasa

ROI veći od 100% znači da zarađujete više nego što ulažete! 📈`,
  },
  googleAds: {
    keywords: ['google ads', 'google oglašavanje', 'kako se reklamirati', 'ppc', 'pay per click', 'google reklame', 'google oglas'],
    answer: `**Kako se reklamirati na Google-u?**

Google Ads je platforma gde plaćate samo kada neko klikne na vaš oglas (PPC — Pay Per Click).

**Koraci za pokretanje:**
1️⃣ Analiza tržišta i ključnih reči
2️⃣ Kreiranje Google Ads naloga
3️⃣ Definisanje cilja (prodaja, pozivi, posete)
4️⃣ Izbor tipa kampanje (Search, Display, Video, Shopping)
5️⃣ Targetiranje publike (lokacija, demografija, interesovanja)
6️⃣ Pisanje privlačnih oglasa
7️⃣ Postavljanje budžeta i praćenje rezultata

**Vrste kampanja:**
• **Search Ads** — tekstualni oglasi u Google pretrazi
• **Display Ads** — banner oglasi na web sajtovima
• **YouTube Ads** — video oglasi pred klipovima
• **Shopping Ads** — proizvodi sa slikama i cenama
• **Performance Max** — AI automatizovane kampanje na svim kanalima

Duck Family Team postavi, vodi i optimizuje kompletne kampanje! 🎯
📞 +381 64 387 7524`,
  },
  seo: {
    keywords: ['seo', 'optimizacija sajta', 'organski saobraćaj', 'rangiranje', 'pozicija na google', 'prva strana google'],
    answer: `**Šta je SEO i zašto je važan?**

SEO (Search Engine Optimization) je optimizacija sajta da bi se visoko rangirao u besplatnim Google rezultatima.

**3 stuba SEO-a:**
🔹 **On-Page SEO** — meta naslovi, opisi, ključne reči, struktura sadržaja
🔹 **Tehnički SEO** — brzina sajta, mobilna verzija, sitemap, HTTPS
🔹 **Off-Page SEO** — linkovi sa drugih sajtova, Google My Business

**Koliko traje?**
• Lokalni biznisi: vidljivi rezultati za 2–4 meseca
• Konkurentna tržišta: 4–8 meseci
• SEO donosi besplatan saobraćaj godinama!

**SEO vs Google Ads:**
| | SEO | Google Ads |
|---|---|---|
| Cena po poseti | Besplatna | 20–150 RSD/klik |
| Brzina | 2–6 meseci | Odmah |
| Trajnost | Godinama | Dok plaćate |

**Naš savet:** Kombinujte oba! Google Ads za brze rezultate, SEO za dugoročnu dominaciju.

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  ga4: {
    keywords: ['ga4', 'google analytics', 'analitika', 'metrike', 'praćenje poseta'],
    answer: `**Google Analytics 4 (GA4)**

GA4 je besplatan Google-ov alat koji vam pokazuje šta se dešava na vašem sajtu.

**Ključne metrike koje pratimo:**
📊 **Sessions** — broj poseta sajtu
👥 **Users** — broj jedinstvenih korisnika
⏱️ **Engaged Sessions** — posete duže od 10 sekundi
🎯 **Conversions** — pozivi, popunjene forme, kupovine
📉 **Bounce Rate** — procenat koji napusti sajt odmah

**Zašto bez GA4 bacate novac?**
Bez analitike ne znate:
❌ Odakle dolaze vaši klijenti
❌ Koji oglas donosi prodaju
❌ Na kojoj stranici ljudi napuštaju sajt

**Šta Duck Family Team postavi:**
✅ GA4 tracking kod na sajtu
✅ Praćenje konverzija (pozivi, forme)
✅ Povezivanje sa Google Ads-om
✅ Mesečni izveštaji sa preporukama

📞 +381 64 387 7524`,
  },
  budzet: {
    keywords: ['budžet', 'koliko treba para', 'koliko novca', 'minimum budžet', 'koliko uložiti'],
    answer: `**Koliki budžet je potreban za Google Ads?**

**Orijentacioni mesečni budžeti za srpsko tržište:**

💰 **Lokalni biznis** (vulkanizer, frizerski salon, servis):
→ Oglasnički budžet: 15.000–40.000 RSD/mesec
→ Agencijska naknada: od 8.000 RSD/mesec

💰 **Srednji biznis** (prodavnica, restoran, klinika):
→ Oglasnički budžet: 40.000–120.000 RSD/mesec
→ Agencijska naknada: od 15.000 RSD/mesec

💰 **Veće kompanije** (nekretnine, advokati, osiguranje):
→ Oglasnički budžet: 120.000+ RSD/mesec
→ Agencijska naknada: po dogovoru

**Važno:** Veći budžet = više podataka = brža optimizacija = bolji rezultati.

**Naš pristup:** Postavljamo pitanja, analiziramo konkurenciju i dajemo vam realan plan pre nego što potrošite ijedan dinar.

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  quality_score: {
    keywords: ['quality score', 'skor kvaliteta', 'ocena oglasa', 'kvalitet oglasa'],
    answer: `**Quality Score — Ocena kvaliteta vašeg oglasa**

Google svaki oglas ocenjuje od 1 do 10. Viša ocena = niži trošak + bolji položaj!

**Šta Google ocenjuje:**
✅ Relevantnost oglasa za ključnu reč
✅ CTR — koliko ljudi klikne na oglas
✅ Kvalitet landing stranice (brzina, sadržaj, relevantnost)

**Zašto je ovo važno za vas?**
• Quality Score 8–10: plaćate do 50% manje po kliku
• Quality Score 4–6: prosečna cena
• Quality Score 1–3: plaćate previše za loše pozicije

**Kako poboljšati:**
1. Pišite oglase koji direktno odgovaraju onome što korisnik traži
2. Koristite ključne reči u tekstu oglasa
3. Napravite brzu i relevantnu landing stranicu
4. Poboljšajte CTR boljim naslovima

Duck Family Team redovno prati i poboljšava Quality Score svih kampanja! 🌟`,
  },
  smartBidding: {
    keywords: ['smart bidding', 'automatsko nadmetanje', 'bidding strategija', 'target cpa', 'target roas', 'maximize conversions'],
    answer: `**Smart Bidding — AI upravljanje budžetom**

Smart Bidding je Google-ov sistem veštačke inteligencije koji automatski prilagođava vaše ponude u realnom vremenu.

**Dostupne strategije:**
🤖 **Target CPA** — ciljaj određeni trošak po konverziji
🤖 **Target ROAS** — ciljaj određeni povrat na ulaganje
🤖 **Maximize Conversions** — maksimalan broj konverzija u okviru budžeta
🤖 **Maximize Conversion Value** — maksimalna vrednost konverzija

**Prednosti:**
✅ AI analizira stotine signala odjednom (lokacija, uređaj, vreme, ponašanje)
✅ Automatska optimizacija 24/7
✅ Štedi vreme i povećava efikasnost

**Kada ga koristiti?**
Preporučuje se nakon što sakupite minimum 30–50 konverzija mesečno. Bez dovoljno podataka, AI ne može dobro da uči.

Duck Family Team zna tačno kada i kako primeniti Smart Bidding za vaš biznis! 🚀`,
  },
  landing_page: {
    keywords: ['landing page', 'odredišna stranica', 'optimizacija stranice', 'konverzija stranice'],
    answer: `**Landing Page — Polovina uspešne kampanje**

Možete imati savršen oglas, ali ako stranica na kojoj klijent "sleti" nije dobra — novac je bačen.

**Šta odličan landing page mora imati:**
⚡ **Brzina učitavanja** ispod 3 sekunde (Google kažnjava spore sajtove)
📱 **Mobilna verzija** — 70%+ korisnika u Srbiji koristi telefon
🎯 **Jasna poruka** — odmah vidljivo šta nudite i zašto kod vas
📞 **Vidljiv poziv na akciju** — dugme, telefon, forma
⭐ **Dokaz kvaliteta** — recenzije, sertifikati, reference

**A/B testiranje:**
Testiramo dve verzije stranice da vidimo koja bolje pretvara posetioce u klijente.

**Rezultat:**
Dobra landing stranica može povećati konverzije za 200–300% uz isti reklamni budžet!

Duck Family Team pravi landing stranice koje donose klijente! 💯`,
  },
  remarketing: {
    keywords: ['remarketing', 'retargeting', 'ponovo oglašavanje', 'pratiti korisnike'],
    answer: `**Remarketing — Dosegni ljude koji su vas već pogledali**

Remarketing prikazuje vaše oglase osobama koje su posetile vaš sajt, ali nisu kontaktirale ili kupile.

**Zašto funkcioniše?**
• Samo 2–4% posetilaca kupi pri prvoj poseti
• Remarketing ih podseća dok pretražuju internet
• Ova publika već vas poznaje — jeftinije konvertuje!

**Vrste remarketinga:**
📌 **Display remarketing** — banner oglasi na drugim sajtovima
🎬 **Video remarketing** — YouTube oglasi
🔍 **Search RLSA** — prilagođeni Google oglasi za stare posetioce
🛒 **Dynamic remarketing** — prikazuje tačne proizvode koje su gledali

**Tipičan CPC za remarketing u Srbiji:**
• Display: 5–15 RSD po kliku (jeftinije od standardnih Search oglasa)
• RLSA: 20–60 RSD po kliku (toplija publika = više konverzija)

Remarketing je obavezan deo svake ozbiljne digitalne strategije! 🎯`,
  },
  ctr: {
    keywords: ['ctr', 'click through rate', 'procenat klikova', 'koliko klikne'],
    answer: `**CTR (Click-Through Rate) — Procenat klikova**

CTR meri koliko procenata ljudi klikne na vaš oglas kada ga vidi.

**Formula:**
CTR = (Broj klikova / Broj prikazivanja) × 100%

**Primer:**
Oglas je prikazan 2.000 puta, kliknulo je 80 ljudi:
CTR = 80 / 2.000 × 100% = 4%

**Referentne vrednosti za Srbiju:**
✅ Search Ads: CTR 4–8% je odličan
✅ Search Ads: CTR 2–4% je solidan
⚠️ Display Ads: CTR 0,3–1% je normalno

**Kako poboljšati CTR:**
1. Pišite naslove koji direktno rešavaju problem korisnika
2. Koristite konkretne cifre i prednosti ("Servis za 2h", "Besplatna dostava")
3. Dodajte Callout i Sitelink ekstenzije
4. Testirajte više verzija oglasa

Viši CTR = bolji Quality Score = niži CPC = više profita! 🚀`,
  },
  cpc: {
    keywords: ['cpc', 'cost per click', 'trošak po kliku', 'cena klika', 'koliko košta klik'],
    answer: `**CPC (Cost Per Click) — Cena po kliku**

CPC je iznos koji plaćate svaki put kada neko klikne na vaš oglas.

**Formula:**
CPC = Ukupan trošak / Broj klikova

**Prosečan CPC u Srbiji po industriji:**
🔧 Automehaničari, vulkanizeri: 30–80 RSD/klik
🏠 Nekretnine: 100–300 RSD/klik
⚖️ Advokati: 150–400 RSD/klik
🏨 Ugostiteljstvo: 20–60 RSD/klik
🛒 E-commerce: 25–90 RSD/klik
🧹 Čišćenje/servisne usluge: 20–70 RSD/klik

**Šta utiče na CPC:**
• Quality Score (viši score = niži CPC)
• Konkurencija u industriji
• Geografsko targetiranje
• Doba dana i sezona

**Važno:** Nizak CPC nije uvek cilj. Bitna je profitabilnost! Klik od 100 RSD koji donosi posao od 5.000 RSD je bolji od klika od 10 RSD koji ne konvertuje.`,
  },
  nextjs: {
    keywords: ['next.js', 'nextjs', 'next js', 'react sajt'],
    answer: `**Next.js Sajtovi — Duck Family Team**

Next.js je React framework koji koristimo za izradu dinamičnih, ultra-brzih web sajtova.

**Zašto Next.js?**
⚡ **Server-Side Rendering (SSR)** — stranice se generišu na serveru = brže učitavanje
🔍 **Odličan za SEO** — Google bot odmah vidi sadržaj
📱 **Mobile-first** — savršeno prilagođen svim uređajima
🚀 **Vercel deployment** — hosting na najbržoj infrastrukturi

**Kada koristiti Next.js?**
✅ E-commerce prodavnice sa katalogom proizvoda
✅ Sajtovi sa korisničkim nalozima i prijavom
✅ Biznisi sa dinamičnim sadržajem koji se menja
✅ Kompleksniji projekti sa bazom podataka

**Naš Next.js projekat:**
🔗 Mobilni Vulkanizer Milan — mobilnivulkanizermilan.com (TOP #1 Google)

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  astro: {
    keywords: ['astro', 'astro sajt', 'astro framework', 'island architecture', 'statički sajt'],
    answer: `**Astro Sajtovi — Trenutno Najbolja Tehnologija za SEO**

Astro je revolucionarni web framework koji šalje nultu količinu JavaScript-a klijentu po podrazumevanim podešavanjima!

**Zašto je Astro poseban?**
🏝️ **Island Architecture** — samo interaktivni delovi dobijaju JS
⚡ **Lighthouse Score 100/100** — savršene performanse bez izuzetka
🔍 **Google ga obožava** — najbrži sajtovi = najviše pozicije
📦 **Minimalni JavaScript** — drastično brže učitavanje

**Kada koristiti Astro?**
✅ Prezentacioni sajtovi biznisa
✅ Blogovi i informativni sajtovi
✅ Landing stranice za kampanje
✅ Lokalni biznisi koji hoće da dominiraju Google pretragom

**Naš Astro projekat:**
🔗 Tepih Servis Jevtić — tepihservisjevtic.rs (TOP #2 Google, čisti Astro sajt)

Pročitajte naš kompletan vodič o Astro sajtovima na blogu! 🚀
📞 +381 64 387 7524`,
  },
  combo_sajt: {
    keywords: ['combo sajt', 'hibridni sajt', 'kombinovani sajt', 'next.js astro', 'kombinacija'],
    answer: `**Kombinovani (Combo) Sajtovi — Next.js + Astro**

Ponekad je best rešenje kombinacija dve tehnologije — statički brze Astro stranice + dinamični Next.js delovi.

**Kada pravimo Combo sajtove?**
✅ Kad biznis ima i statičan sadržaj (početna, o nama, usluge) i dinamičan deo (forma, korisnički nalog)
✅ Kad hoćemo Astro brzinu za SEO stranice + Next.js fleksibilnost za funkcionalnosti

**Naši Combo projekti:**
🔗 Dubinsko Pranje Vetar — dubinsko-pranje-vetar.vercel.app (TOP #1 Google)
🔗 Shara Mara Nails Studio — shara-mara-nails-studio.vercel.app

**Prednosti Combo pristupa:**
⚡ Ultrabzre statičke stranice za SEO
🔧 Dinamične funkcionalnosti gde je potrebno
📊 Lighthouse 95+ na svim stranicama

Kontaktirajte nas i kažemo vam koja je tehnologija prava za vaš biznis!
📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  vercel: {
    keywords: ['vercel', 'hosting', 'gde je sajt', 'gde se hostuje', 'server za sajt'],
    answer: `**Vercel — Hosting na Kom Radimo Sve Sajtove**

Vercel je platforma za hosting sajtova — kreatori Next.js-a. Mi ga koristimo za sve projekte.

**Zašto Vercel?**
🌍 **Globalni CDN** — serveri u 30+ zemalja, sajt se učitava brzo svuda
⚡ **Edge Network** — sadržaj dolazi iz najbližeg servera korisniku
🔄 **Automatski deploy** — svaka izmena na GitHubu je odmah na sajtu (za 30 sekundi)
🆓 **Besplatni SSL** — HTTPS sertifikat bez dodatnih troškova
📊 **Analitika performansi** — uvid u brzinu i posete

**Za SEO:**
✅ HTTPS automatski (Google favorizuje HTTPS sajtove)
✅ Ultrabrzo učitavanje = bolji Core Web Vitals = viši Google ranking
✅ 99,99% dostupnosti — sajt je uvek online

**Cena hostinga:** Vercel ima besplatan plan koji je sasvim dovoljan za prezentacione sajtove i lokalne biznise.

Duck Family Team postavi, konfiguriše i održava sve sajtove na Vercelu! 🦆`,
  },
  izrada_sajta: {
    keywords: ['izrada sajta', 'pravimo sajt', 'napraviti sajt', 'web sajt', 'hoću sajt', 'treba mi sajt', 'web development', 'web dizajn', 'napravi mi sajt'],
    answer: `**Izrada Web Sajtova — Duck Family Team**

Pravimo ultrabrze, SEO optimizovane sajtove koji donose klijente od prvog dana!

**Šta svaki naš sajt uključuje:**
🚀 Lighthouse Score 95–100/100
🔍 SEO od prvog dana (meta opisi, ključne reči, Schema markup)
📱 Mobilna verzija (Mobile-first dizajn)
🎨 Moderan, profesionalni dizajn
☁️ Vercel hosting sa besplatnim SSL-om
✅ Sitemap, robots.txt, Google Analytics 4

**Tehnologije:**
⚛️ **Next.js** — dinamični sajtovi, e-commerce, nalog sistemi
🌟 **Astro** — prezentacioni sajtovi, blogovi, maksimalni SEO
🔀 **Next.js + Astro (Combo)** — hibridni projekti

**Naši uradjeni sajtovi:**
🔗 mobilnivulkanizermilan.com — Next.js, TOP #1 Google
🔗 tepihservisjevtic.rs — Astro, TOP #2 Google
🔗 dubinsko-pranje-vetar.vercel.app — Combo, TOP #1 Google
🔗 shara-mara-nails-studio.vercel.app — Combo

**Cena** zavisi od obima projekta. Kontaktirajte nas!
📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  instagram_ads: {
    keywords: ['instagram', 'instagram oglašavanje', 'instagram reklame', 'instagram kampanja', 'stories oglasi', 'reels oglasi', 'meta ads', 'facebook oglasi'],
    answer: `**Instagram Oglašavanje — Duck Family Team**

Instagram je platforma sa 2+ miliona korisnika u Srbiji. Vaša ciljana publika je definitivno tamo!

**Vrste Instagram oglasa:**
📸 **Feed oglasi** — slike i video u feed-u korisnika
📱 **Stories** — 15-sekundni format, visok angažman (eng. engagement)
🎬 **Reels Ads** — kratki video format koji trenutno dominira
🛍️ **Shopping oglasi** — direktna prodaja proizvoda iz Instagram-a

**Targetiranje publike:**
🎯 Demografija (starost, pol, lokacija — čak do opštine)
❤️ Interesovanja i ponašanje
👥 Lookalike publika — korisnici slični vašim kupcima
🔄 Retargeting — korisnici koji su posetili vaš sajt

**Prosečan CPC na Instagramu u Srbiji:**
• Feed: 20–60 RSD po kliku
• Stories: 10–35 RSD po kliku

**Instagram vs Google:**
Instagram hvata ljude pre nego što počnu da traže — gradi svest.
Google hvata ljude u trenutku traženja — donosi direktne klijente.
**Kombinacija oba = najmoćnija strategija!**

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  google_platforme: {
    keywords: ['youtube oglasi', 'youtube reklame', 'gmail oglasi', 'display mreža', 'google platforme', 'video oglasi', 'youtube marketing'],
    answer: `**Sve Google Platforme — Budite Svuda Gde Je Vaš Klijent**

Osim Google pretrage, Duck Family Team pokriva sve Google kanale oglašavanja.

**YouTube Oglašavanje:**
🎬 **Skippable In-Stream** — oglas se prikazuje pre videa (može se preskočiti posle 5s, plaćate samo ako gleda 30s+)
⏭️ **Non-Skippable** — obavezno gledanje 6–15 sekundi
📺 **Bumper Ads** — 6-sekundni udarni oglasi
📌 **Video Discovery** — pojavljuje se u YouTube pretrazi

**Gmail oglasi:**
📧 Prikazuju se kao emailovi u tabovima "Promotions" i "Social"
🎯 Targetiranje po interesovanjima i demografiji
📈 Odlični za B2B i skuplje usluge

**Google Display mreža:**
🌐 2+ miliona sajtova i aplikacija
🖼️ Banner oglasi u raznim veličinama
🔄 Idealni za Remarketing kampanje

**Performance Max (PMax):**
🤖 Google AI istovremeno optimizuje oglase na svim platformama
📊 Automatski uči koji kanal donosi konverzije

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  kljucne_reci: {
    keywords: ['ključne reči', 'keywords', 'keyword research', 'istraživanje ključnih reči', 'long tail', 'short tail', 'koje reči da koristim'],
    answer: `**Ključne Reči — Osnova SEO-a i Google Ads-a**

Bez pravih ključnih reči, ni SEO ni Google Ads ne mogu da rade efikasno.

**4 vrste ključnih reči:**
🎯 **Short-tail** — "vulkanizer" (visok volumen, ogromna konkurencija)
🎯 **Long-tail** — "mobilni vulkanizer Borča noću" (niži volumen, manja konkurencija, VIŠA konverzija)
📍 **Lokalne** — "frizerski salon Zemun" (zlatne reči za lokalne biznise)
💳 **Transakcione** — "naruči", "rezerviši", "cena", "zakaži termin"

**Zašto su long-tail ključne reči zlatne?**
✅ Manja konkurencija = jeftinije rangirate i oglašavate se
✅ Visoka kupovna namera = više konverzija
✅ Tačno znate šta korisnik hoće

**Naš proces istraživanja:**
1. Analiza vašeg biznisa i industrije
2. Špijuniranje konkurencije (šta oni rangiraju)
3. Pronalazak ključnih reči visokog potencijala
4. Implementacija u sajt i Google Ads kampanje

**Alati koje koristimo:**
🔧 Google Keyword Planner, Ahrefs, Semrush, Google Search Console

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  cene_usluge: {
    keywords: ['koliko košta', 'cena usluge', 'cena marketinga', 'cena sajta', 'cene', 'paket', 'mesečna naknada', 'koliko naplaćujete', 'cenovnik', 'ponuda'],
    answer: `**Cene Usluga Duck Family Team**

Cene formiramo individualno — svaki biznis je jedinstven i zaslužuje prilagođenu cenu.

**Orijentacioni okviri za srpsko tržište:**

🌐 **Izrada sajtova (jednokratno):**
• Landing stranica: od 30.000 RSD
• Prezentacioni sajt (5–10 strana): od 60.000 RSD
• Poslovni sajt sa više funkcija: od 100.000 RSD
• E-commerce prodavnica: od 180.000 RSD

📢 **Google Ads upravljanje (mesečno):**
• Reklamni budžet (vaš): od 15.000 RSD/mesec
• Agencijska naknada: od 8.000 RSD/mesec

📱 **Instagram & Social Media (mesečno):**
• Upravljanje kampanjama: od 8.000 RSD/mesec

**Naš proces:**
1️⃣ Razgovaramo i postavljamo pitanja o vašim ciljevima
2️⃣ Analiziramo tržište i konkurenciju
3️⃣ Dajemo preciznu cenu + kompletan plan rada

Nema skrivenih troškova! Uz svaku ponudu dobijate detaljan plan.

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  google_my_business: {
    keywords: ['google my business', 'google moje preduzeće', 'google maps', 'lokalni pregled', 'recenzije google', 'gmb'],
    answer: `**Google My Business (Google Moje Preduzeće)**

Google My Business (GMB) je besplatan alat koji prikazuje vaš biznis na Google Maps-u i lokalnoj pretrazi.

**Zašto je obavezan za lokalne biznise?**
📍 Pojavljujete se na Google Maps-u kada neko traži uslugu u vašoj oblasti
⭐ Prikupljate recenzije koje grade poverenje
📞 Klijent može da vas pozove direktno iz pretrage
📸 Prikazujete fotografije i radno vreme

**Šta Duck Family Team radi sa GMB:**
✅ Kompletna optimizacija profila
✅ Pravilan opis sa ključnim rečima
✅ Dodavanje kategorija i usluga
✅ Strategija za dobijanje pozitivnih recenzija
✅ Praćenje pozicije u "Local Pack" (top 3 na Maps-u)

**Zanimljivo:** Biznisi sa dobro optimizovanim GMB profilom dobijaju do 70% više poziva!

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  negativne_kljucne_reci: {
    keywords: ['negativne ključne reči', 'negative keywords', 'blokirane reči', 'irrelevantni klikovi', 'nepotrebni klikovi'],
    answer: `**Negativne Ključne Reči — Štite Vaš Budžet**

Negativne ključne reči govore Google-u za koje pretrage DA NE prikazuje vaš oglas.

**Zašto su važne?**
Bez negativnih ključnih reči, vaš oglas za "mobilni vulkanizer" može da se prikaže kada neko traži:
❌ "vulkanizer igračka"
❌ "vulkanizer film"
❌ "škola za vulkanizere"

Svaki takav klik troši vaš budžet bez šanse za konverziju!

**Primer uštedine:**
Jedna od naših kampanja imala je 40% "uzaludnih" klikova pre nego što smo dodali negativne reči. Nakon optimizacije, budžet je korišćen samo za relevantnu publiku.

**Naš proces:**
1. Pregled Search Terms izveštaja
2. Identifikacija nebitnih upita
3. Dodavanje negativnih reči na nivou kampanje i grupe oglasa
4. Redovne mesečne provere

Pravilno postavljene negativne ključne reči mogu smanjiti nepotrebno trošenje za 20–40%!`,
  },
  konverzija: {
    keywords: ['konverzija', 'conversion', 'praćenje konverzija', 'šta je konverzija', 'kako pratiti konverzije'],
    answer: `**Konverzija — Cilj Svake Kampanje**

Konverzija je željena akcija korisnika na vašem sajtu (poziv, popunjena forma, kupovina).

**Vrste konverzija koje pratimo:**
📞 **Poziv** — klijent klikne na broj telefona
📋 **Forma** — popunjavanje kontakt forme
🛒 **Kupovina** — završena online kupovina
📧 **Email klik** — klik na email adresu
⏱️ **Vreme na sajtu** — posetilac provede više od X sekundi

**Stopa konverzije (Conversion Rate):**
Formula: (Broj konverzija / Broj poseta) × 100%

**Referentne vrednosti za Srbiju:**
• Lokalni servisi: 3–8% je odlično
• E-commerce: 1–3% je solidan prosek
• Landing stranice: 5–15% sa dobro optimizovanom stranicom

**Zašto je ovo presudno?**
Ako imate 500 posetilaca i 2% konverzije → 10 klijenata
Ako podignemo na 4% konverzije → 20 klijenata (isti budžet, duplo više posla!)

Duck Family Team postavi praćenje svake konverzije i optimizuje kampanje prema njima!`,
  },
  core_web_vitals: {
    keywords: ['core web vitals', 'lcp', 'cls', 'inp', 'brzina sajta', 'pagespeed', 'lighthouse'],
    answer: `**Core Web Vitals — Google-ovi Faktori za Rangiranje**

Core Web Vitals su Google-ove metrike koje mere korisničko iskustvo i direktno utiču na SEO rangiranje!

**3 ključne metrike:**

⚡ **LCP (Largest Contentful Paint)**
Koliko brzo se prikazuje glavni sadržaj stranice.
• Odlično: ispod 2,5 sekundi
• Potrebna poboljšanja: 2,5–4 sekunde
• Loše: više od 4 sekunde

🖱️ **INP (Interaction to Next Paint)**
Odzivnost stranice na klikove i unos korisnika.
• Odlično: ispod 200ms
• Loše: više od 500ms

📐 **CLS (Cumulative Layout Shift)**
Stabilnost layouta — da li se elementi "pomeraju" tokom učitavanja.
• Odlično: ispod 0,1
• Loše: više od 0,25

**Naši sajtovi:** Astro i Next.js sajtovi koje pravimo postižu zelene (odlične) vrednosti u svim metrikama — što direktno znači bolje pozicije na Google-u!`,
  },
  meta_tagovi: {
    keywords: ['meta tagovi', 'meta opis', 'meta description', 'title tag', 'naslov stranice', 'description'],
    answer: `**Meta Tagovi — Šta Google Čita o Vašem Sajtu**

Meta tagovi su nevidljivi HTML elementi koji govore Google-u i korisnicima o čemu je vaša stranica.

**Najvažniji meta tagovi:**

📝 **Title Tag (Naslov stranice)**
• Prikazuje se u Google rezultatima kao klikabilni plavi naslov
• Optimalna dužina: 50–60 karaktera
• Mora sadržati glavnu ključnu reč
• Primer: "Mobilni Vulkanizer Borča — Dolazimo do Vas | +381 64..."

📄 **Meta Description (Opis stranice)**
• Kratki opis ispod naslova u Google rezultatima
• Optimalna dužina: 150–160 karaktera
• Ne utiče direktno na rangiranje, ali povećava CTR!
• Primer: "Mobilni vulkanizer u Borči i okolini. Dolazimo odmah! Menjamo gume, popravke na terenu. Pozovite odmah."

🔗 **Canonical Tag**
• Sprečava problem duplikatnih stranica

**Važno:** Svaka stranica vašeg sajta mora imati jedinstven Title i Description sa odgovarajućim ključnim rečima.

Duck Family Team ugradi optimalne meta tagove u svaki sajt! 🦆`,
  },
  link_building: {
    keywords: ['link building', 'linkovi', 'backlinkovi', 'linkovanje', 'spoljni linkovi', 'autoritet sajta'],
    answer: `**Link Building — Izgradnja Autoriteta Sajta**

Link building je proces dobijanja linkova sa drugih sajtova koji upućuju na vaš sajt. Google ih vidi kao "glasove poverenja".

**Zašto su backlinkovani važni?**
Google pretpostavlja: ako mnogo kvalitetnih sajtova linkuje na vas → vi ste autoritet u svojoj oblasti.

**Vrste linkova:**
🏆 **Visokokvalitetni** — sa relevantnih, priznatih sajtova (novine, portali, stručni sajtovi)
⚠️ **Prosečni** — sa manje poznatih, ali relevantnih sajtova
❌ **Toksični** — sa spam sajtova (mogu škoditi rangiranju!)

**Kako Duck Family Team gradi linkove:**
✅ Pisanje gostujućih članaka na relevantnim srpskim portalima
✅ Registracija u poslovne direktorijume (Infostud, Yellow Pages, itd.)
✅ Lokalne poslovne asocijacije i komore
✅ PR objave na regionalnim portalima

**Napomena:** Link building je dugoročan proces. Rezultati se vide posle 3–6 meseci, ali su trajni!`,
  },
  a_b_testiranje: {
    keywords: ['a/b test', 'a b testiranje', 'testiranje oglasa', 'split test', 'koja verzija radi bolje'],
    answer: `**A/B Testiranje — Pustite Podatke da Odlučuju**

A/B testiranje je poređenje dve verzije oglasa, stranice ili emaila da vidite koja bolje performira.

**Šta testiramo:**
📝 **Naslove oglasa** — "Hitna Popravka Guma" vs "Mobilni Vulkanizer — Dolazimo za 30 min"
🎨 **Slike i video** — koja kreativa privlači više klikova
📞 **Poziv na akciju** — "Pozovite odmah" vs "Zakažite termin"
🌐 **Landing stranice** — različiti raspored elemenata, boje dugmadi
💰 **Ponude i akcije** — "10% popusta" vs "Besplatna dijagnostika"

**Kako funkcioniše:**
50% korisnika vidi verziju A, 50% verziju B. Nakon dovoljnog broja podataka (minimum 100 konverzija po varijanti), pobednik postaje standard.

**Rezultat:**
Redovno A/B testiranje može povećati konverzije za 20–100% tokom vremena!

Duck Family Team redovno testira oglase i landing stranice za maksimalne rezultate! 🏆`,
  },
  lokalni_marketing: {
    keywords: ['lokalni marketing', 'lokalni biznis', 'lokalno oglašavanje', 'reklama za lokalni biznis', 'mali biznis reklama'],
    answer: `**Lokalni Marketing — Za Biznise Koji Servisiraju Određenu Lokaciju**

Lokalni marketing je specijalizovani pristup koji cilja klijente u vašoj neposrednoj okolini.

**Alati lokalnog digitalnog marketinga:**

📍 **Google My Business** — pojavljujete se na Google Maps-u
🔍 **Lokalni Search Ads** — oglasi sa lokacijom ("vulkanizer u Borči")
🗺️ **Location Extensions** — prikazuju vašu adresu ispod oglasa
📱 **Mobile targeting** — ljudi koji traže uslugu na telefonu (hitne situacije!)
⭐ **Recenzije** — izgradnja poverenja kod lokalnih klijenata

**Primer rezultata iz prakse:**
Mobilni Vulkanizer Milan (Borča) — pre saradnje gotovo niko nije dolazio iz Google pretrage. Nakon 3 nedelje Duck Family Team kampanje — telefon non-stop!

**Zašto je lokalni marketing poseban?**
• Manja konkurencija nego na nacionalnom nivou
• Viša stopa konverzije (korisnik traži "odmah" i "blizu")
• Jeftiniji CPC nego u velikim gradskim kampanjama

📞 +381 64 387 7524 | ✉️ stankovic.s.nikola@gmail.com`,
  },
  default: {
    answer: `Zdravo! Ja sam Duck AI asistent. 🦆

Mogu da vam pomognem sa pitanjima o svim našim uslugama:

🌐 **Izrada Sajtova:** Next.js, Astro, Combo sajtovi, Vercel hosting
🔍 **SEO:** Optimizacija, ključne reči, meta tagovi, link building
📊 **Google Ads:** Kampanje, Smart Bidding, Remarketing, PMax
📱 **Instagram & Društvene Mreže:** Stories, Reels, Feed oglasi
🎬 **YouTube & Gmail:** Video oglasi, Bumper Ads, Display mreža
📈 **Analitika:** GA4, Core Web Vitals, praćenje konverzija
💰 **Cene:** Transparentno formiranje za srpsko tržište
📍 **Lokalni marketing:** Google My Business, Maps oglasi

Ukucajte vaše pitanje ili kliknite jedno od popularnih pitanja ispod.

Za direktnu konsultaciju:
📞 +381 64 387 7524
✉️ stankovic.s.nikola@gmail.com
🌐 www.duckfamilyteam.online`,
  },
}

function findBestMatch(query: string): string {
  const lowerQuery = query.toLowerCase()

  for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
    if (key === 'default') continue
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
      content: 'Zdravo! 👋 Ja sam Duck AI asistent. Mogu da vam pomognem sa pitanjima o Google Ads marketingu, SEO-u, izradi sajtova i svemu što nudimo. Kako mogu da vam pomognem danas?',
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
    'Koliko košta izrada sajta?',
    'Šta je Astro sajt?',
    'Lokalni marketing?',
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
                <p className="text-xs text-white/80 font-medium">Marketing & Web Expert 24/7</p>
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </>
  )
}
