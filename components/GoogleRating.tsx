import type { GoogleReviewsSummary } from '@/lib/googleReviews'

const googleReviewsUrl = 'https://www.google.com/maps?cid=13771670212645560743'

/** 1 recenzija, 2–4 recenzije, 5+ recenzija — sa izuzetkom za 11–14. */
function recenzijaOblik(broj: number): string {
  const poslednja = broj % 10
  const poslednjeDve = broj % 100
  if (poslednjeDve >= 11 && poslednjeDve <= 14) return 'recenzija'
  if (poslednja === 1) return 'recenzija'
  if (poslednja >= 2 && poslednja <= 4) return 'recenzije'
  return 'recenzija'
}

/**
 * Vidljiv prikaz stvarne Google ocene.
 *
 * Ocena se ranije nigde nije prikazivala korisniku — postojala je samo kao
 * `AggregateRating` u JSON-LD-u. Taj markup je uklonjen (Google ne dozvoljava
 * da firma sama sebi dodeljuje zbirnu ocenu na sopstvenom sajtu), a broj je
 * umesto toga prikazan tamo gde ga posetilac zaista vidi.
 *
 * Ako podaci nisu dostupni, komponenta ne renderuje ništa.
 */
export default function GoogleRating({ summary }: { summary: GoogleReviewsSummary | null }) {
  if (!summary) return null

  const { rating, count } = summary
  const zaokruzeno = Math.round(rating)

  return (
    <a
      href={googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-ink-surface border border-ink-border hover:border-wine-text rounded-full pl-4 pr-5 py-2.5 transition-colors"
    >
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((zvezdica) => (
          <svg
            key={zvezdica}
            className={`w-4 h-4 ${zvezdica <= zaokruzeno ? 'text-wine-text' : 'text-ink-border-strong'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
        ))}
      </span>
      <span className="text-sm text-ink-text">
        {/* Decimalni zarez, ne tačka. `toFixed` uvek vraća tačku, pa je badge
            pokazivao „5.0" dok je sekcija sa brojevima na istoj strani pisala
            „5,0" — isti podatak, dva zapisa. */}
        <strong className="font-medium">{rating.toFixed(1).replace('.', ',')}</strong>{' '}
        <span className="text-ink-muted">
          na Google-u, {count} {recenzijaOblik(count)}
        </span>
      </span>
    </a>
  )
}
