const FALLBACK = { rating: 5, count: 9 }

export async function getGoogleReviewsSummary(): Promise<{ rating: number; count: number }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return FALLBACK
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount`,
      {
        headers: { 'X-Goog-Api-Key': apiKey },
        next: { revalidate: 3600 },
      }
    )

    if (!res.ok) return FALLBACK

    const data = (await res.json()) as { rating?: number; userRatingCount?: number }
    if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') {
      return FALLBACK
    }

    return { rating: data.rating, count: data.userRatingCount }
  } catch {
    return FALLBACK
  }
}
