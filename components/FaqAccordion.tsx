import { homeFaqs } from '@/lib/faqs'

/**
 * Nativni <details>/<summary> umesto ručnog akordiona.
 *
 * Prethodna verzija je sakrivala odgovore preko `max-height: 200px`, pa su duži
 * odgovori bili odsečeni, a čitač ekrana je čitao sve odgovore bez obzira na
 * `aria-expanded`. Stranice usluga ionako već koriste <details>, pa je ovo i
 * konzistentno sa ostatkom sajta — i radi bez JavaScripta.
 *
 * `data-faq` uključuje animirano otvaranje preko `::details-content` i
 * `interpolate-size: allow-keywords` (vidi globals.css). Visina do `auto` se
 * godinama nije mogla animirati bez JavaScripta; sada može, a element ostaje
 * potpuno funkcionalan i u browserima koji to još ne podržavaju.
 */
export default function FaqAccordion() {
  return (
    <div className="space-y-4">
      {homeFaqs.map((faq) => (
        <details
          key={faq.question}
          data-faq
          className="group border border-ink-border open:border-ink-border-strong rounded-2xl overflow-hidden transition-colors duration-300 open:bg-ink-surface/40"
        >
          <summary className="flex justify-between items-center gap-4 p-5 md:p-6 cursor-pointer font-medium text-ink-text text-base md:text-lg hover:bg-ink-surface-hover transition-colors list-none [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <svg
              className="w-5 h-5 text-wine-text flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="px-5 md:px-6 pb-5 md:pb-6 text-ink-muted text-sm md:text-base leading-relaxed">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  )
}
