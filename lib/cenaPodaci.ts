/**
 * Podaci i tipovi za kalkulatore na stranici /cene.
 *
 * Sve cene su u evrima, jednokratne osim gde je izričito naznačeno "mesečno".
 * Ovo je jedino mesto gde se brojevi menjaju — komponente samo čitaju odavde.
 *
 * Cene vezane za izradu sajta (tipoviBiznisa, dodaciSajt, mesecnoOdrzavanje)
 * su 2026-09-06 snižene za 39% u odnosu na prvobitni predlog.
 */

export type TipBiznisa = {
  id: string
  naziv: string
  /** Bazna cena u evrima. `null` = "Drugo", cena po dogovoru. */
  cena: number | null
  kategorija: string
}

export const tipoviBiznisa: TipBiznisa[] = [
  // Zdravlje
  { id: 'stomatolog', naziv: 'Stomatolog', cena: 320, kategorija: 'Zdravlje' },
  { id: 'privatna-klinika', naziv: 'Privatna klinika', cena: 490, kategorija: 'Zdravlje' },
  { id: 'estetska-klinika', naziv: 'Estetska / kozmetička klinika', cena: 490, kategorija: 'Zdravlje' },
  { id: 'veterinar', naziv: 'Veterinarska ambulanta', cena: 310, kategorija: 'Zdravlje' },
  { id: 'apoteka', naziv: 'Apoteka', cena: 260, kategorija: 'Zdravlje' },
  { id: 'optika', naziv: 'Optika', cena: 260, kategorija: 'Zdravlje' },
  // Pravo i finansije
  { id: 'advokat', naziv: 'Advokatska kancelarija', cena: 460, kategorija: 'Pravo i finansije' },
  { id: 'racunovodja', naziv: 'Računovodstvena agencija', cena: 320, kategorija: 'Pravo i finansije' },
  { id: 'arhitekta', naziv: 'Arhitektonski biro', cena: 460, kategorija: 'Pravo i finansije' },
  // Turizam i smeštaj
  { id: 'hotel', naziv: 'Hotel / hostel', cena: 490, kategorija: 'Turizam i smeštaj' },
  { id: 'glamping', naziv: 'Glamping', cena: 460, kategorija: 'Turizam i smeštaj' },
  { id: 'apartmani', naziv: 'Apartmani / smeštaj', cena: 310, kategorija: 'Turizam i smeštaj' },
  { id: 'turisticka-agencija', naziv: 'Turistička agencija', cena: 290, kategorija: 'Turizam i smeštaj' },
  // Ugostiteljstvo
  { id: 'restoran', naziv: 'Restoran', cena: 260, kategorija: 'Ugostiteljstvo' },
  { id: 'kafic', naziv: 'Kafić / bar', cena: 200, kategorija: 'Ugostiteljstvo' },
  { id: 'pica', naziv: 'Picerija / fast food', cena: 230, kategorija: 'Ugostiteljstvo' },
  { id: 'pekara', naziv: 'Pekara / poslastičarnica', cena: 180, kategorija: 'Ugostiteljstvo' },
  // Lepota i wellness
  { id: 'frizer', naziv: 'Frizerski salon', cena: 230, kategorija: 'Lepota i wellness' },
  { id: 'kozmeticki-salon', naziv: 'Kozmetički salon', cena: 240, kategorija: 'Lepota i wellness' },
  { id: 'spa', naziv: 'Spa / wellness', cena: 290, kategorija: 'Lepota i wellness' },
  { id: 'teretana', naziv: 'Teretana / fitnes', cena: 260, kategorija: 'Lepota i wellness' },
  { id: 'yoga', naziv: 'Yoga / pilates studio', cena: 240, kategorija: 'Lepota i wellness' },
  // Edukacija i deca
  { id: 'skola-jezika', naziv: 'Škola jezika / kurs', cena: 260, kategorija: 'Edukacija i deca' },
  { id: 'vrtic', naziv: 'Privatni vrtić', cena: 290, kategorija: 'Edukacija i deca' },
  { id: 'auto-skola', naziv: 'Auto škola', cena: 230, kategorija: 'Edukacija i deca' },
  // Zanati i usluge
  { id: 'auto-servis', naziv: 'Auto servis / mehaničar', cena: 240, kategorija: 'Zanati i usluge' },
  { id: 'fotograf', naziv: 'Fotograf / studio', cena: 240, kategorija: 'Zanati i usluge' },
  { id: 'zanatska-radnja', naziv: 'Zanatska radnja (stolar...)', cena: 240, kategorija: 'Zanati i usluge' },
  { id: 'majstor', naziv: 'Majstor (vodoinstalater...)', cena: 200, kategorija: 'Zanati i usluge' },
  { id: 'butik', naziv: 'Prodavnica / butik', cena: 200, kategorija: 'Zanati i usluge' },
  // Ostalo
  { id: 'drugo', naziv: 'Drugo — moj biznis nije na listi', cena: null, kategorija: 'Ostalo' },
]

export type DodatakSajt = {
  id: string
  naziv: string
  cena: number
  /** 'prekidac' = uključi/isključi, 'brojac' = količina (npr. broj dodatnih stranica) */
  tip: 'prekidac' | 'brojac'
  jedinica?: string
}

export const dodaciSajt: DodatakSajt[] = [
  { id: 'rezervacije', naziv: 'Rezervacioni sistem', cena: 80, tip: 'prekidac' },
  { id: 'dvojezicni', naziv: 'Dvojezičan sajt', cena: 60, tip: 'prekidac' },
  { id: 'blog-cms', naziv: 'Blog / CMS modul', cena: 60, tip: 'prekidac' },
  { id: 'kontakt-forma', naziv: 'Napredna kontakt forma', cena: 30, tip: 'prekidac' },
  { id: 'seo', naziv: 'SEO paket (osnovna optimizacija)', cena: 60, tip: 'prekidac' },
  { id: 'logo', naziv: 'Logo (ako ga nemate)', cena: 50, tip: 'prekidac' },
  { id: 'tekstovi', naziv: 'Copywriting (mi pišemo tekstove)', cena: 40, tip: 'prekidac' },
  { id: 'fotografije', naziv: 'Fotografije (mi obezbeđujemo)', cena: 30, tip: 'prekidac' },
  { id: 'animacije', naziv: 'Animacije', cena: 40, tip: 'prekidac' },
  { id: 'dodatne-stranice', naziv: 'Dodatna stranica (preko bazne)', cena: 30, tip: 'brojac', jedinica: 'stranica' },
  { id: 'revizije', naziv: 'Dodatna revizija (preko 2 uključene)', cena: 20, tip: 'brojac', jedinica: 'revizija' },
]

export type Rok = {
  id: string
  naziv: string
  mnozilac: number
}

export const rokovi: Rok[] = [
  { id: 'flex', naziv: 'Fleksibilan / 14 dana', mnozilac: 1 },
  { id: '7dana', naziv: '7 dana', mnozilac: 1.15 },
  { id: '3dana', naziv: '3 dana', mnozilac: 1.35 },
]

export const mesecnoOdrzavanje = 30

export const napomenaODomenu =
  'Domen kupujemo mi u vaše ime i registrujemo na vaš biznis, po ceni koja je aktuelna u tom trenutku. Osmišljavanje imena i povezivanje je besplatno.'

// ── Google Ads ──────────────────────────────────────────────────────────────

export type AdsStavka = {
  id: string
  naziv: string
  cena: number
  ucestalost: 'mesecno' | 'jednokratno'
  /** Podrazumevano uključeno pri otvaranju kalkulatora. */
  podrazumevano?: boolean
  /** Ima brojač količine (npr. broj kampanja) umesto prostog uključi/isključi. */
  brojac?: boolean
}

export const adsStavke: AdsStavka[] = [
  { id: 'vodjenje', naziv: 'Mesečno vođenje Google Ads kampanja', cena: 200, ucestalost: 'mesecno', podrazumevano: true },
  { id: 'postavka', naziv: 'Jednokratna postavka kampanje (bez mesečnog vođenja)', cena: 70, ucestalost: 'jednokratno', brojac: true },
  { id: 'ga4-konekcija', naziv: 'Povezivanje GA4 sa Ads nalogom', cena: 50, ucestalost: 'jednokratno' },
  { id: 'gbp-konekcija', naziv: 'Povezivanje Google Business profila sa Ads nalogom', cena: 50, ucestalost: 'jednokratno' },
]

export type AnalizaOpcija = {
  id: 'bez' | 'puna' | 'aktivne'
  naziv: string
  cena: number
}

export const analizaOpcije: AnalizaOpcija[] = [
  { id: 'bez', naziv: 'Bez analize naloga', cena: 0 },
  { id: 'puna', naziv: 'Sa istorijom kampanja i proverom konverzija', cena: 200 },
  { id: 'aktivne', naziv: 'Samo trenutne aktivne kampanje', cena: 100 },
]

// ── Google Business Profil ──────────────────────────────────────────────────

export const gbpOsnovnaCena = 100
export const gbpOsnovniOpis =
  '8 objava i 8 fotografija mesečno, odgovaranje na recenzije, optimizacija profila'

export const gbpDodatak = {
  naziv: 'Pojačano objavljivanje (16 umesto 8 objava mesečno)',
  cena: 50,
}

// ── Sve na jednom mestu ──────────────────────────────────────────────────────

export const paketSveNaJednomMestu = {
  cena: 300,
  opis: 'Kompletno vođenje: Google Ads, Google Business profil i sajt, sva odgovornost na nama.',
}

export function formatEvra(iznos: number): string {
  const zaokruzeno = Math.round(iznos)
  return `${zaokruzeno.toLocaleString('sr-RS')} €`
}
