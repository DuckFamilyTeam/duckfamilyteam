import Image from 'next/image'

/**
 * Traka sa logotipima klijenata.
 *
 * Sve četiri slike su i ranije stajale u public/img/, ali se nijedna nije
 * renderovala nigde na sajtu — jedini društveni dokaz bio je jedan case study
 * bez ijedne slike.
 */
const klijenti = [
  { naziv: 'Mobilni Vulkanizer Milan', src: '/img/milan-vulkanizer-logo.webp' },
  { naziv: 'Diviana Beauty Studio', src: '/img/diviana-beauty-studio-logo.jpg' },
  { naziv: 'Shara Mara Nails', src: '/img/shara-mara-nails-logo.jpg' },
  { naziv: 'Tepih Servis Jevtić', src: '/img/tepih-servis-jevtic-logo.jpg' },
]

export default function ClientLogos({ naslov = 'Sa kim smo radili' }: { naslov?: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-6 text-center">
        {naslov}
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
        {klijenti.map((klijent) => (
          <li key={klijent.src} className="flex items-center">
            <Image
              src={klijent.src}
              alt={klijent.naziv}
              width={120}
              height={60}
              sizes="120px"
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
