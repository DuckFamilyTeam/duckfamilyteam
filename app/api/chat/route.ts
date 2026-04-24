import { NextRequest, NextResponse } from 'next/server'

// Marketing Knowledge Base - Detaljne informacije o Google Ads i marketingu
const MARKETING_KNOWLEDGE = `
# DUCK FAMILY TEAM - MARKETING KNOWLEDGE BASE

## O NAMA
Duck Family Team je Google Premier Partner agencija iz Srbije koju vode Anđela i Nikola Stanković. 
Specijalizovani smo za Google Ads, SEO, i GA4 analitiku sa fokusom na ROI i konverzije.
Kontakt: www.duckfamilyteam.online

## GOOGLE ADS & PPC

### Šta je Google Ads?
Google Ads (ranije Google AdWords) je Google-ova platforma za plaćeno oglašavanje koja omogućava da se vaši oglasi pojavljuju na Google pretragama, YouTube-u, i milionima web sajtova. Plaćate samo kada neko klikne na vaš oglas (PPC - Pay Per Click).

### Vrste Google Ads kampanja:
1. **Search Ads** - Tekstualni oglasi u Google pretrazi
2. **Display Ads** - Banner oglasi na web sajtovima
3. **Video Ads** - Video oglasi na YouTube-u
4. **Shopping Ads** - Oglasi proizvoda sa slikama i cenama
5. **Performance Max (PMax)** - Automatizovane kampanje koje koriste AI
6. **App Ads** - Promocija mobilnih aplikacija

### Kako se reklamirati na Google-u?
1. Kreirajte Google Ads nalog
2. Definišite ciljeve (prodaja, leadovi, saobraćaj)
3. Izaberite tip kampanje
4. Targetirajte publiku (lokacija, demografija, interesovanja)
5. Odaberite ključne reči (keywords)
6. Postavite budžet i strategiju nadmetanja (bidding)
7. Kreirajte oglase sa privlačnim tekstom
8. Pratite rezultate i optimizujte

### Smart Bidding
Automatizovana strategija nadmetanja koja koristi mašinsko učenje da maksimizuje konverzije ili vrednost konverzije. Uključuje: Target CPA, Target ROAS, Maximize Conversions, Maximize Conversion Value.

### Remarketing
Prikazivanje oglasa ljudima koji su već posetili vaš sajt ali nisu konvertovali. Jako efikasno jer targetirate "toplu" publiku koja već poznaje vaš brand.

## KLJUČNE METRIKE

### ROI (Return on Investment)
**Definicija:** Profitabilnost investicije izražena u procentima.
**Formula:** ROI = (Profit - Ulaganje) / Ulaganje × 100%
**Primer:** Uložili ste 10,000 RSD u oglase, zaradili 50,000 RSD. Profit = 40,000 RSD. ROI = 40,000/10,000 × 100% = 400%
**Dobro:** ROI > 100% znači da zarađujete više nego što trošite.

### ROAS (Return on Ad Spend)
**Definicija:** Prihod po svakom uloženom dinaru u oglase.
**Formula:** ROAS = Prihod od oglasa / Trošak oglasa
**Primer:** Potrošili ste 5,000 RSD, zaradili 25,000 RSD. ROAS = 25,000/5,000 = 5:1 ili 500%
**Dobro:** ROAS od 4:1 ili više je odličan rezultat za većinu industrija.
**Razlika od ROI:** ROAS gleda samo prihod, ROI računa čist profit.

### CTR (Click-Through Rate)
**Formula:** CTR = (Broj klikova / Broj prikazivanja) × 100%
**Dobro:** CTR > 5% za search ads je odličan.

### CPC (Cost Per Click)
Prosečan trošak po jednom kliku na oglas.

### CPA (Cost Per Acquisition)
Trošak po jednoj konverziji (kupovina, lead, registracija).

### Quality Score
Google-ova ocena kvaliteta oglasa (1-10). Viši score = niži CPC i bolji položaj oglasa.
Zavisi od: relevantnosti oglasa, CTR-a, iskustva na landing page-u.

### Conversion Rate
**Formula:** (Broj konverzija / Broj klikova) × 100%
**Dobro:** 2-5% je solidan conversion rate za većinu industrija.

## SEO (Search Engine Optimization)

### Šta je SEO?
Optimizacija sajta da bi se rangirao visoko u organskim (besplatnim) Google rezultatima. SEO je dugoročna strategija - prvi rezultati se vide nakon 3-6 meseci.

### Tipovi SEO-a:
1. **On-Page SEO** - Optimizacija sadržaja, naslova, meta tagova, brzine sajta
2. **Off-Page SEO** - Linkbuilding, društvene mreže, brand mentions
3. **Technical SEO** - Struktura sajta, sitemap, robots.txt, Core Web Vitals

### Ključne reči (Keywords)
Fraze koje ljudi kucaju u Google. Istraživanje ključnih reči je osnova i SEO-a i Google Ads-a.

### Razlika SEO vs Google Ads:
- **SEO:** Besplatan saobraćaj, dugoročno, sporo, konkurentno
- **Google Ads:** Plaćen saobraćaj, brzo, skupo, kontrolisano

**Najbolja strategija:** Kombinacija oba! Google Ads za brze rezultate, SEO za dugoročnu stabilnost.

## GOOGLE ANALYTICS 4 (GA4)

### Šta je GA4?
Nova verzija Google Analytics-a koja prati korisničko ponašanje kroz događaje (events). Kritičan alat za merenje performansi sajta i oglasa.

### Ključne metrike u GA4:
1. **Sessions** - Broj poseta sajtu
2. **Users** - Broj korisnika
3. **Bounce Rate** - Procenat ljudi koji napuste sajt bez interakcije
4. **Engagement Rate** - Posete koje traju >10s ili imaju konverziju
5. **Events** - Praćenje akcija (klikovi, scroll, video play)
6. **Conversions** - Glavni ciljevi (kupovina, forma, poziv)

### Povezivanje GA4 sa Google Ads:
Omogućava precizno praćenje ROI-a, remarketing liste, i optimizaciju kampanja na osnovu stvarnih konverzija.

## STRATEGIJE I BEST PRACTICES

### Kada koristiti Google Ads vs društvene mreže?
**Google Ads:** Kada ljudi AKTIVNO traže vaše rešenje. "Hot" publika sa kupovnom namerom.
**Facebook/Instagram:** Kada želite da podignete svest ili targetirate specifične demografije. "Cold" publika.

### Budžet za Google Ads
**Minimum:** 30,000-50,000 RSD mesečno za male biznise
**Optimalno:** 100,000+ RSD mesečno za konkurentne industrije
**Napomena:** Veći budžet = više podataka = bolja optimizacija

### Landing Page Optimizacija
Oglas je polovina priče. Landing page MORA biti:
1. Brz (load time < 3s)
2. Mobilno prilagođen
3. Sa jasnim CTA (Call-to-Action)
4. Relevantna za oglas (message match)
5. Sa social proof-om (recenzije, sertifikati)

### A/B Testing
Testiranje različitih verzija oglasa, landing page-a, ili CTA-a da vidite šta bolje performira.

## AI I AUTOMATIZACIJA

### Google SGE (Search Generative Experience)
Google-ov AI koji direktno odgovara na upite. Utiče na SEO strategiju - fokus na E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).

### Performance Max (PMax)
AI-driven kampanje koje automatski optimizuju kreative, targetiranje, i bidding preko svih Google platformi (Search, Display, YouTube, Gmail).

## NAJČEŠĆE GREŠKE

1. **Loš targeting** - Široka publika bez fokusa
2. **Neoptimizovan Quality Score** - Skupi klikovi, loš položaj
3. **Zanemarivanje negativnih ključnih reči** - Plaćate za nerlevantne klikove
4. **Bez praćenja konverzija** - Ne znate šta radi, šta ne
5. **Set-and-forget mentalitet** - Google Ads zahteva konstantno testiranje i optimizaciju
6. **Slaba landing page** - Dobar oglas, loša stranica = potrošen novac
7. **Mali budžet previše rasprskane kampanje** - Fokusirajte se na 1-2 kampanje dobro

## ZAŠTO ANGAŽOVATI AGENCIJU?

### Duck Family Team prednosti:
1. **Google Premier Partner** - Zvanično sertifikovani od Google-a
2. **Fokus na ROI** - Gledamo profit, ne samo klikove
3. **Transparentnost** - Čisti podaci, bez skrivenih naknada
4. **GA4 ekspertiza** - Precizno merenje svake kampanje
5. **Personalizovani pristup** - Niste broj, niste budžet, vi ste partner

### Troškovi agencije:
Obično 15-20% od ad spend-a ili fiksna mesečna naknada. Investicija se brzo vraća kroz bolje performanse.

## INDUSTRIJA-SPECIFIČNE STRATEGIJE

### E-commerce
- Google Shopping kampanje
- Dynamic Remarketing
- Target ROAS bidding

### B2B
- Search Ads sa long-tail keywords
- LinkedIn Ads (ne Google) za visoke pozicije
- Lead generation fokus

### Lokalni biznisi
- Local Search Ads
- Google My Business optimizacija
- Location extensions

## TRENDOVI 2026

1. **AI-first kampanje** - Automation preuzima manuelno upravljanje
2. **Privacy-first tracking** - Cookieless svet, server-side tracking
3. **Video dominacija** - YouTube Shorts i kratki video formati
4. **Voice search** - Optimizacija za glasovne pretrage
5. **SGE uticaj** - Promena u SEO strategijama

---

Ovo je baza znanja Duck Family Team-a. Uvek citirajte konkretne izvore i formule. Budite direktni, bez floskula.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `Ti si stručni marketing AI asistent za Duck Family Team - Google Ads agenciju iz Srbije. 

TVOJA ULOGA:
- Odgovaraš na pitanja o Google Ads, SEO, analitici i digitalnom marketingu
- Koristiš informacije iz donje baze znanja
- Pišeš na SRPSKOM jeziku (latinica)
- Budeš profesionalan ali prijateljski nastrojen
- Daješ KONKRETNE odgovore sa primerima i formulama
- Kada objašnjavaš metrike, uvek navodi formule i praktične primere
- Na kraju odgovora, kada je relevantno, PREDLAŽEŠ kontaktiranje Duck Family Team-a za profesionalnu pomoć

STIL KOMUNIKACIJE:
- Direktan i bez floskula
- Koristiš bullet points za preglednost
- Objašnjavaš složene koncepte jednostavno
- Dodaješ primere iz prakse
- Izbevaš žargon gde god je moguće, ali ga objašnjavaš kada ga koristiš

BAZA ZNANJA:
${MARKETING_KNOWLEDGE}

Ako te pitaju nešto što NIJE u bazi znanja, ljubazno reci da je to van tvog fokusa ali pokušaj da pomogneš što možeš na osnovu opšteg marketing znanja.`,
        messages: messages,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    
    // Extract the text response
    const assistantMessage = data.content
      .filter((block: any) => block.type === 'text')
      .map((block: any) => block.text)
      .join('\n')

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Došlo je do greške. Molim te pokušaj ponovo.' },
      { status: 500 }
    )
  }
}
