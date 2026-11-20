import Image from 'next/image'

/**
 * Traka sa logotipima klijenata.
 *
 * Sve četiri slike su i ranije stajale u public/img/, ali se nijedna nije
 * renderovala nigde na sajtu — jedini društveni dokaz bio je jedan case study
 * bez ijedne slike.
 *
 * `svetlaPodloga`: logotip je providan i ima tamnocrvena slova (kontrast
 * 2,79:1 na ink-bg, 5,69:1 na ink-text), pa se crta na svetloj ploči.
 * Ostali logotipi imaju sopstvenu pozadinu u samoj slici.
 */
type Klijent = {
  naziv: string
  src: string
  width?: number
  height?: number
  svetlaPodloga?: boolean
}

const klijenti: Klijent[] = [
  { naziv: 'Mobilni Vulkanizer Milan', src: '/img/milan-vulkanizer-logo.webp' },
  { naziv: 'Diviana Beauty Studio', src: '/img/diviana-beauty-studio-logo.jpg' },
  { naziv: 'Shara Mara Nails', src: '/img/shara-mara-nails-logo.jpg' },
  { naziv: 'Tepih Servis Jevtić', src: '/img/tepih-servis-jevtic-logo.jpg' },
  {
    naziv: 'Specijaltehnik',
    src: '/img/specijaltehnik-logo.webp',
    width: 1100,
    height: 227,
    svetlaPodloga: true,
  },
]

export default function ClientLogos({ naslov = 'Naši klijenti' }: { naslov?: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-6 text-center">
        {naslov}
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
        {klijenti.map((klijent) => (
          <li key={klijent.src} className="flex items-center">
            {klijent.svetlaPodloga ? (
              <span className="flex h-12 items-center rounded-lg bg-ink-text px-3 opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={klijent.src}
                  alt={klijent.naziv}
                  width={klijent.width ?? 120}
                  height={klijent.height ?? 60}
                  sizes="160px"
                  className="h-7 w-auto object-contain"
                />
              </span>
            ) : (
              <Image
                src={klijent.src}
                alt={klijent.naziv}
                width={120}
                height={60}
                sizes="120px"
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
