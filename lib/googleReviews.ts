export type GoogleReviewsSummary = { rating: number; count: number }

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
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount`,
      {
        headers: { 'X-Goog-Api-Key': apiKey },
        next: { revalidate: 3600 },
      },
    )

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
