import type { GoogleReview } from '@/lib/googleReviews'

const googleReviewsUrl = 'https://www.google.com/maps?cid=13771670212645560743'

function inicijali(ime: string): string {
  return ime
    .split(/\s+/)
    .slice(0, 2)
    .map((deo) => deo.charAt(0).toUpperCase())
    .join('')
}

/**
 * Recenzije klijenata, povučene sa Google Business profila.
 *
 * Ako API nije podešen ili nijedna recenzija nema tekst, komponenta ne
 * renderuje ništa — isto pravilo kao kod `GoogleRating`. Prazna sekcija je
 * bolja od izmišljene.
 */
export default function Testimonials({ recenzije }: { recenzije: GoogleReview[] }) {
  if (recenzije.length === 0) return null

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12" data-rv="up">
          <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
            Klijenti
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-ink-text tracking-tight mb-5">
            Šta kažu ljudi sa kojima radimo
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            Recenzije se povlače direktno sa našeg Google profila, pa ih možete proveriti sami.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recenzije.map((r, i) => (
            <li
              key={`${r.autor}-${i}`}
              className="lift relative bg-ink-surface border border-ink-border hover:border-ink-border-strong rounded-2xl p-7 flex flex-col gap-5 overflow-hidden"
              data-rv="up"
              data-rv-delay={i * 100}
            >
              <span
                aria-hidden="true"
                className="absolute right-4 -top-4 font-display text-[110px] leading-none text-wine opacity-[0.16] select-none"
              >
                ”
              </span>
              <div className="flex items-center gap-0.5" aria-label={`Ocena ${r.ocena} od 5`}>
                {[1, 2, 3, 4, 5].map((z) => (
                  <svg
                    key={z}
                    className={`w-4 h-4 ${z <= Math.round(r.ocena) ? 'text-wine-text' : 'text-ink-border-strong'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                  </svg>
                ))}
              </div>
              <p className="text-ink-text text-[15px] leading-relaxed relative">{r.tekst}</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-ink-border">
                <span
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-wine text-ink-text grid place-items-center text-sm font-semibold flex-shrink-0"
                >
                  {inicijali(r.autor)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink-text">{r.autor}</span>
                  {r.kada && <span className="block text-xs text-ink-muted">{r.kada}</span>}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-center mt-8" data-rv="up">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted hover:text-ink-text border-b border-ink-border pb-1 transition-colors"
          >
            Pogledajte sve recenzije na Google-u →
          </a>
        </p>
      </div>
    </section>
  )
}
