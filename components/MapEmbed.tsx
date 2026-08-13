'use client'

import { useState } from 'react'

const mapEmbedQuery = encodeURIComponent(
  'Duck Family Team - Online Marketing, Porodice Josipović 2, Sremčica, Beograd',
)

/**
 * Google mapa se učitava tek na klik.
 *
 * Ranije se iframe učitavao na svakoj od 16 stranica, pre bilo kakvog pristanka
 * na kolačiće — što je slalo IP posetioca Google-u i postavljalo Google kolačiće
 * uprkos baneru na istoj stranici. Uz to je svaki dolazak do dna stranice
 * povlačio ceo Maps stack.
 */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        src={`https://www.google.com/maps?q=${mapEmbedQuery}&output=embed`}
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Duck Family Team - Online Marketing na Google mapi"
        className="grayscale-[40%] block"
      />
    )
  }

  return (
    <div className="h-[320px] bg-ink-surface flex flex-col items-center justify-center text-center gap-4 px-6">
      <p className="text-ink-text font-medium">Porodice Josipović 2, Sremčica, Beograd</p>
      <p className="text-ink-muted text-xs max-w-sm leading-relaxed">
        Mapu učitava Google. Klikom prihvatate da se vaša IP adresa prosledi Google-u i da Google
        postavi svoje kolačiće.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="bg-wine hover:bg-wine-bright text-ink-text px-6 py-3 rounded-xl text-sm font-medium transition-colors"
      >
        Prikaži mapu
      </button>
      <a
        href="https://www.google.com/maps?cid=13771670212645560743"
        target="_blank"
        rel="noopener noreferrer"
        className="text-wine-text hover:text-ink-text transition text-xs underline underline-offset-2"
      >
        Ili otvorite mapu u novom tabu
      </a>
    </div>
  )
}
