import type { ReactNode } from 'react'

interface BrowserFrameProps {
  url: string
  children: ReactNode
  caption?: string
  className?: string
}

/**
 * Jedan okvir pretraživača (tačke + pilula sa adresom) oko snimka sajta koji
 * smo izradili klijentu — koristi se kao dokaz na studiji slučaja, na
 * Rezultatima i na Izradi sajtova (vizuelna provera krug 7, ispravka 5).
 *
 * Namerno JEDAN nivo kartice: ranije je snimak imao baken-in browser chrome
 * UNUTAR slike i još jednu `surface` karticu OKO nje ("kutija u kutiji",
 * krug 7, stavka 6). Sad je chrome kod (ovaj komponent), slika je sirov
 * snimak sajta, i postoji samo jedna ivica/jedan radijus.
 */
export default function BrowserFrame({ url, children, caption, className = '' }: BrowserFrameProps) {
  return (
    <figure className={className}>
      <div className="rounded-2xl overflow-hidden border border-ink-border bg-ink-surface">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-ink-border bg-ink-surface">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-wine" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink-border-strong" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink-border-strong" />
          </span>
          {/* `min-w-0` je obavezan da bi `truncate` na adresi radio: bez njega
              flex stavka ne može da bude uža od pune adrese, pa je na 320 px
              okvir gurao karticu na /rezultati 26 px van ekrana. */}
          <div className="flex-1 min-w-0 flex items-center gap-1.5 bg-ink-bg border border-ink-border rounded-full px-3 py-1.5 max-w-xs">
            <svg className="w-3 h-3 text-ink-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v2" />
            </svg>
            <span className="font-mono text-[11px] text-ink-muted truncate">{url}</span>
          </div>
        </div>
        {children}
      </div>
      {caption && (
        <figcaption className="font-mono text-[11px] text-ink-muted mt-3 uppercase tracking-widest text-center md:text-left">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
