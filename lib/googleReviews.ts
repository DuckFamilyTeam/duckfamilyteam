export type GoogleReviewsSummary = { rating: number; count: number }

export type GoogleReview = {
  autor: string
  ocena: number
  tekst: string
  kada: string
}

type PlaceReview = {
  rating?: number
  text?: { text?: string }
  originalText?: { text?: string }
  authorAttribution?: { displayName?: string }
  publishTime?: string
}

type PlaceDetails = {
  rating?: number
  userRatingCount?: number
  reviews?: PlaceReview[]
}

/**
 * `sr-Latn` umesto `sr`.
 *
 * Sa `languageCode=sr` Google vraća sve ćirilicom — i tekst recenzija i opis
 * vremena — a sajt je deklarisan kao `sr-Latn-RS`. Sa `sr-Latn` tekst dolazi
 * latinicom.
 */
const LANGUAGE_CODE = 'sr-Latn'

/**
 * Polja `rating` i `userRatingCount` spadaju u SKU „Place Details Enterprise",
 * a `reviews` u skuplji „Place Details Enterprise + Atmosphere". Google
 * naplaćuje po zahtevu, po najskupljem traženom polju, pa je jedan spojen
 * poziv jeftiniji od dva odvojena.
 *
 * Oba SKU-a imaju svega 1.000 besplatnih poziva mesečno, zato interval nije
 * jedan sat nego šest (~120 poziva mesečno). Recenzije se ionako ne menjaju
 * češće od toga.
 */
const REVALIDATE_SEKUNDI = 60 * 60 * 6

/**
 * Preslovljavanje ćirilice u latinicu.
 *
 * Google ne preslovljava tekst recenzije — ako je klijent pisao ćirilicom,
 * ćirilica stiže i uz `languageCode=sr-Latn`. Na sajtu koji je ceo latinicom
 * to iskače kao greška.
 *
 * Smer ćirilica → latinica je jednoznačan i bez gubitka (obrnuto nije), pa se
 * ne menja nijedna reč, samo pismo. Ako ti je draže da citat stoji tačno onako
 * kako ga je klijent otkucao, postavi ovo na `false`.
 */
const PRESLOVI_U_LATINICU = true

const CIRILICA: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', ђ: 'đ', е: 'e', ж: 'ž', з: 'z',
  и: 'i', ј: 'j', к: 'k', л: 'l', љ: 'lj', м: 'm', н: 'n', њ: 'nj', о: 'o',
  п: 'p', р: 'r', с: 's', т: 't', ћ: 'ć', у: 'u', ф: 'f', х: 'h', ц: 'c',
  ч: 'č', џ: 'dž', ш: 'š',
}

function uLatinicu(tekst: string): string {
  let rezultat = ''
  for (let i = 0; i < tekst.length; i += 1) {
    const znak = tekst[i]
    const malo = znak.toLowerCase()
    const zamena = CIRILICA[malo]

    if (!zamena) {
      rezultat += znak
      continue
    }

    if (znak === malo) {
      rezultat += zamena
      continue
    }

    // Veliko slovo. Kod digrafa (Љ, Њ, Џ) pismo zavisi od onoga što sledi:
    // „ЉУБАВ" → „LJUBAV", ali „Љубав" → „Ljubav".
    if (zamena.length > 1) {
      const sledeci = tekst[i + 1] ?? ''
      const sveVelikim = sledeci !== '' && sledeci === sledeci.toUpperCase() && CIRILICA[sledeci.toLowerCase()]
      rezultat += sveVelikim ? zamena.toUpperCase() : zamena[0].toUpperCase() + zamena.slice(1)
    } else {
      rezultat += zamena.toUpperCase()
    }
  }
  return rezultat
}

/**
 * „pre 3 nedelje", „prošlog meseca"…
 *
 * Google vraća i gotov opis (`relativePublishTimeDescription`), ali on ostaje
 * ćirilicom čak i uz `languageCode=sr-Latn`. Zato se računa iz `publishTime`,
 * preko `Intl.RelativeTimeFormat`, koji sam vodi računa o srpskim oblicima
 * množine (1 nedelja / 2 nedelje / 5 nedelja).
 */
function relativnoVreme(publishTime?: string): string {
  if (!publishTime) return ''
  const kada = new Date(publishTime)
  if (Number.isNaN(kada.getTime())) return ''

  const sekundi = (kada.getTime() - Date.now()) / 1000
  const formatter = new Intl.RelativeTimeFormat('sr-Latn', { numeric: 'auto' })

  const pragovi: Array<[number, Intl.RelativeTimeFormatUnit]> = [
    [60 * 60 * 24 * 365, 'year'],
    [60 * 60 * 24 * 30, 'month'],
    [60 * 60 * 24 * 7, 'week'],
    [60 * 60 * 24, 'day'],
    [60 * 60, 'hour'],
  ]

  for (const [trajanje, jedinica] of pragovi) {
    const vrednost = sekundi / trajanje
    if (Math.abs(vrednost) >= 1) {
      return formatter.format(Math.round(vrednost), jedinica)
    }
  }
  return 'upravo sada'
}

async function getPlaceDetails(): Promise<PlaceDetails | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) return null

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}` +
        `?fields=rating,userRatingCount,reviews&languageCode=${LANGUAGE_CODE}`,
      {
        headers: { 'X-Goog-Api-Key': apiKey },
        next: { revalidate: REVALIDATE_SEKUNDI },
      },
    )

    if (!res.ok) return null
    return (await res.json()) as PlaceDetails
  } catch {
    return null
  }
}

/**
 * Zbirna ocena sa Google Business profila.
 *
 * Vraća `null` kad podaci nisu dostupni — ranije je u tom slučaju vraćana
 * hardkodovana vrednost 5.0 / 9 recenzija, koja se onda objavljivala kao da je
 * stvarna. Radije ne prikazati ništa nego prikazati izmišljen broj.
 */
export async function getGoogleReviewsSummary(): Promise<GoogleReviewsSummary | null> {
  const data = await getPlaceDetails()
  if (!data) return null

  if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') {
    return null
  }

  return { rating: data.rating, count: data.userRatingCount }
}

/**
 * Pojedinačne recenzije sa Google profila, za sekciju „Šta kažu klijenti".
 *
 * Namerno se ne prikazuje ništa dok API ne vrati stvarne recenzije: sekcija sa
 * izmišljenim citatima je i zavaravanje kupca i rizik za poverenje, a Google
 * Business profil je jedini izvor koji posetilac može sam da proveri.
 *
 * Google vraća najviše pet recenzija i njihov redosled bira sam, pa se ne
 * oslanjamo na to da će uvek biti iste tri. Fotografije autora se namerno ne
 * koriste — vuku se sa `googleusercontent.com`, pa bi tražile i novi
 * `remotePatterns` unos i rupu u CSP-u zbog par sličica. Idu inicijali.
 */
export async function getGoogleReviews(limit = 3): Promise<GoogleReview[]> {
  const data = await getPlaceDetails()
  if (!data) return []

  return (data.reviews ?? [])
    .map((r) => {
      const sirovTekst = (r.text?.text ?? r.originalText?.text ?? '').trim()
      return {
        autor: r.authorAttribution?.displayName?.trim() ?? '',
        ocena: typeof r.rating === 'number' ? r.rating : 0,
        tekst: PRESLOVI_U_LATINICU ? uLatinicu(sirovTekst) : sirovTekst,
        kada: relativnoVreme(r.publishTime),
      }
    })
    // Recenzija bez teksta je samo ocena — u sekciji sa citatima nema šta da radi.
    .filter((r) => r.tekst.length > 0 && r.autor.length > 0)
    .slice(0, limit)
}
