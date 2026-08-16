export type GoogleReviewsSummary = { rating: number; count: number }

export type GoogleReview = {
  autor: string
  ocena: number
  tekst: string
  kada: string
}

const PLACES_ENDPOINT = 'https://places.googleapis.com/v1/places'

/**
 * Zbirna ocena sa Google Business profila.
 *
 * Vraća `null` kad podaci nisu dostupni — ranije je u tom slučaju vraćana
 * hardkodovana vrednost 5.0 / 9 recenzija, koja se onda objavljivala kao da je
 * stvarna. Radije ne prikazati ništa nego prikazati izmišljen broj.
 */
export async function getGoogleReviewsSummary(): Promise<GoogleReviewsSummary | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return null
  }

  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${placeId}?fields=rating,userRatingCount`, {
      headers: { 'X-Goog-Api-Key': apiKey },
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null

    const data = (await res.json()) as { rating?: number; userRatingCount?: number }
    if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') {
      return null
    }

    return { rating: data.rating, count: data.userRatingCount }
  } catch {
    return null
  }
}

/**
 * Pojedinačne recenzije sa Google profila, za sekciju „Šta kažu klijenti".
 *
 * Namerno se ne prikazuje ništa dok API ne vrati stvarne recenzije: sekcija sa
 * izmišljenim citatima je i zavaravanje kupca i rizik za poverenje, a Google
 * Business profil je jedini izvor koji posetilac može sam da proveri.
 *
 * Google Places API vraća najviše pet recenzija i njihov redosled bira sam.
 * Fotografije autora se namerno ne koriste — vuku se sa `googleusercontent.com`,
 * pa bi tražile i novi `remotePatterns` unos i rupu u CSP-u zbog četiri sličice.
 * Umesto toga se prikazuju inicijali.
 */
export async function getGoogleReviews(limit = 3): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) return []

  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${placeId}?fields=reviews&languageCode=sr`, {
      headers: { 'X-Goog-Api-Key': apiKey },
      next: { revalidate: 3600 },
    })

    if (!res.ok) return []

    const data = (await res.json()) as {
      reviews?: Array<{
        rating?: number
        text?: { text?: string }
        originalText?: { text?: string }
        authorAttribution?: { displayName?: string }
        relativePublishTimeDescription?: string
      }>
    }

    return (data.reviews ?? [])
      .map((r) => ({
        autor: r.authorAttribution?.displayName?.trim() ?? '',
        ocena: typeof r.rating === 'number' ? r.rating : 0,
        tekst: (r.text?.text ?? r.originalText?.text ?? '').trim(),
        kada: r.relativePublishTimeDescription ?? '',
      }))
      // Recenzija bez teksta je samo ocena — u sekciji sa citatima nema šta da radi.
      .filter((r) => r.tekst.length > 0 && r.autor.length > 0)
      .slice(0, limit)
  } catch {
    return []
  }
}
