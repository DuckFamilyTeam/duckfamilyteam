import PhoneCta from '@/components/PhoneCta'

/**
 * Traka koja uleti odozdo kad posetilac prođe prvi ekran i sakrije se pred
 * podnožjem, da ne pokriva pravi CTA u dnu stranice. Vidljivost kontroliše
 * MotionRuntime preko klase `on`.
 *
 * Bez JavaScripta ostaje sklonjena van ekrana i ne smeta — poziv na akciju
 * ionako postoji i u hero sekciji i u navbaru.
 */
export default function StickyCta() {
  return (
    <div
      data-sticky-cta
      className="fixed left-1/2 bottom-5 z-[250] hidden md:flex items-center gap-4 pl-6 pr-3 py-3 rounded-full bg-ink-surface/95 backdrop-blur-xl border border-ink-border-strong shadow-2xl"
    >
      <span className="text-sm text-ink-text whitespace-nowrap">
        Spremni da vas klijenti pronađu?
      </span>
      <PhoneCta location="lepljivi_cta" className="px-6 py-3 rounded-full text-sm" />
    </div>
  )
}
