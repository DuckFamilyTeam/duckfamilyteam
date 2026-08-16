import Image from 'next/image'

const klijenti = [
  { naziv: 'Mobilni Vulkanizer Milan', src: '/img/milan-vulkanizer-logo.webp' },
  { naziv: 'Diviana Beauty Studio', src: '/img/diviana-beauty-studio-logo.jpg' },
  { naziv: 'Shara Mara Nails', src: '/img/shara-mara-nails-logo.jpg' },
  { naziv: 'Tepih Servis Jevtić', src: '/img/tepih-servis-jevtic-logo.jpg' },
]

/**
 * Beskonačna traka sa logotipima klijenata.
 *
 * Niz je namerno ispisan dva puta: kad se prva polovina odveze, druga je već na
 * njenom mestu, pa petlja nema vidljiv šav. Kopija je `aria-hidden`, da čitač
 * ekrana ne pročita svakog klijenta dvaput.
 *
 * Traka se pauzira na hover — posetilac koji hoće da pročita ime ne mora da ga
 * juri.
 */
export default function Marquee({ naslov = 'Sa kim smo radili' }: { naslov?: string }) {
  const traka = (skriven: boolean) => (
    <ul
      className="flex items-center gap-x-14 md:gap-x-20 pr-14 md:pr-20"
      aria-hidden={skriven || undefined}
    >
      {klijenti.map((klijent) => (
        <li key={klijent.src} className="flex items-center flex-shrink-0">
          <Image
            src={klijent.src}
            alt={skriven ? '' : klijent.naziv}
            width={120}
            height={60}
            sizes="120px"
            className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
          />
        </li>
      ))}
    </ul>
  )

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-6 text-center">
        {naslov}
      </p>
      <div className="marquee">
        <div className="marquee-track">
          {traka(false)}
          {traka(true)}
        </div>
      </div>
    </div>
  )
}
