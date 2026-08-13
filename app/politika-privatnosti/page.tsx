import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const url = 'https://www.duckfamilyteam.online/politika-privatnosti'

export const metadata: Metadata = {
  title: 'Politika privatnosti',
  description:
    'Koje podatke Duck Family Team prikuplja preko sajta, zašto ih obrađuje, koliko dugo ih čuva, kome ih prosleđuje i koja prava imate po Zakonu o zaštiti podataka o ličnosti.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Politika privatnosti | Duck Family Team',
    description: 'Koje podatke prikupljamo, zašto, koliko dugo ih čuvamo i koja su vaša prava.',
    url,
    type: 'article',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Politika privatnosti', item: url },
  ],
}

const AZURIRANO = '13. avgust 2026.'

export default function PolitikaPrivatnostiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main
        id="glavni-sadrzaj"
        className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12"
      >
        <div className="max-w-3xl mx-auto">
          <nav
            className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-ink-text transition">
              Početna
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink-text">Politika privatnosti</span>
          </nav>

          <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
            Pravne informacije
          </div>
          <h1 className="font-display font-medium text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
            Politika privatnosti
          </h1>
          <p className="text-ink-muted leading-relaxed mb-12">
            Poslednje ažuriranje: {AZURIRANO}. Ova politika objašnjava koje podatke o vama
            prikupljamo preko sajta duckfamilyteam.online, zašto ih obrađujemo, kome ih
            prosleđujemo i koja prava imate.
          </p>

          <div className="space-y-12 text-ink-muted leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">1. Ko obrađuje vaše podatke</h2>
              <p>
                Rukovalac podacima je <strong className="text-ink-text">Duck Family Team, Online Marketing</strong>,
                Porodice Josipović 2, 11253 Sremčica, Beograd, Republika Srbija.
              </p>
              <p>
                Kontakt za sva pitanja o podacima:{' '}
                <a
                  href="mailto:stankovic.s.nikola@gmail.com"
                  className="text-wine-text hover:text-ink-text transition"
                >
                  stankovic.s.nikola@gmail.com
                </a>{' '}
                ili{' '}
                <a href="tel:+381643877524" className="text-wine-text hover:text-ink-text transition">
                  +381 64 387 7524
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">2. Koje podatke prikupljamo</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-ink-border-strong text-ink-text text-left">
                      <th className="py-3 pr-4 font-medium">Podatak</th>
                      <th className="py-3 pr-4 font-medium">Kada</th>
                      <th className="py-3 font-medium">Osnov obrade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-ink-border align-top">
                      <td className="py-3 pr-4">Ime, telefon, adresa sajta, tekst poruke</td>
                      <td className="py-3 pr-4">Kada pošaljete kontakt formu</td>
                      <td className="py-3">Vaš zahtev, radi odgovora na upit</td>
                    </tr>
                    <tr className="border-b border-ink-border align-top">
                      <td className="py-3 pr-4">Email adresa</td>
                      <td className="py-3 pr-4">Kada se prijavite na newsletter</td>
                      <td className="py-3">Vaš pristanak, koji možete povući</td>
                    </tr>
                    <tr className="border-b border-ink-border align-top">
                      <td className="py-3 pr-4">
                        Podaci o poseti: pregledane stranice, izvor posete, tip uređaja, približna
                        lokacija na nivou grada
                      </td>
                      <td className="py-3 pr-4">Ako prihvatite analitičke kolačiće</td>
                      <td className="py-3">Vaš pristanak</td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4">
                        Anonimna statistika poseta, bez kolačića i bez ličnih identifikatora
                      </td>
                      <td className="py-3 pr-4">Uvek (Vercel Web Analytics)</td>
                      <td className="py-3">Legitimni interes za osnovnu statistiku sajta</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Ne tražimo i ne želimo posebne kategorije podataka (zdravlje, politička ili verska
                uverenja i slično). Molimo vas da ih ne upisujete u polje za poruku.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">3. Zašto ih obrađujemo</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Da odgovorimo na vaš upit i pripremimo ponudu.</li>
                <li>Da vam pošaljemo obaveštenje o novom tekstu, ako ste se prijavili.</li>
                <li>Da vidimo koje stranice ljudi zaista čitaju i šta na sajtu ne radi.</li>
              </ul>
              <p>
                Vaše podatke ne koristimo za automatizovano donošenje odluka ni za profilisanje, i
                ne prodajemo ih nikome.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">4. Kome se podaci prosleđuju</h2>
              <p>
                Koristimo nekoliko spoljnih servisa koji u našem ime obrađuju podatke. Svi su
                izabrani tako da imaju sopstvene mehanizme zaštite za prenos podataka izvan Srbije i
                Evropske unije.
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong className="text-ink-text">Vercel Inc.</strong> — hosting sajta i anonimna
                  statistika poseta.
                </li>
                <li>
                  <strong className="text-ink-text">Formspree Inc.</strong> — prosleđivanje poruka iz
                  formi na našu email adresu.
                </li>
                <li>
                  <strong className="text-ink-text">Google Ireland Ltd.</strong> — Google Analytics
                  4, samo uz vaš pristanak; i Google mape, samo ako sami kliknete da se mapa učita.
                </li>
              </ul>
              <p>
                Podatke prosleđujemo i nadležnim organima ako to zakon izričito nalaže. Drugim
                primaocima ne prosleđujemo ništa.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">5. Koliko dugo čuvamo podatke</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Poruke iz kontakt forme: do dve godine od poslednje komunikacije, pa ih brišemo.
                </li>
                <li>Prijave na newsletter: dok se ne odjavite.</li>
                <li>Analitički podaci u GA4: 14 meseci, po podešavanju u nalogu.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">6. Vaša prava</h2>
              <p>
                Po Zakonu o zaštiti podataka o ličnosti („Službeni glasnik RS", br. 87/2018) imate
                pravo da:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>tražite pristup podacima koje imamo o vama i kopiju tih podataka,</li>
                <li>tražite ispravku netačnih ili dopunu nepotpunih podataka,</li>
                <li>tražite brisanje podataka,</li>
                <li>tražite ograničenje obrade ili uložite prigovor na obradu,</li>
                <li>tražite prenosivost podataka u uobičajenom formatu,</li>
                <li>povučete pristanak u svakom trenutku, bez posledica po ranije date podatke.</li>
              </ul>
              <p>
                Za bilo koje od ovih prava pišite nam na{' '}
                <a
                  href="mailto:stankovic.s.nikola@gmail.com"
                  className="text-wine-text hover:text-ink-text transition"
                >
                  stankovic.s.nikola@gmail.com
                </a>
                . Odgovaramo u roku od 30 dana. Ako smatrate da vam je pravo povređeno, možete
                podneti pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o
                ličnosti, Bulevar kralja Aleksandra 15, 11000 Beograd.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">7. Kolačići</h2>
              <p>
                Detaljan spisak kolačića i način na koji možete da promenite svoj izbor nalazi se u{' '}
                <Link
                  href="/politika-kolacica"
                  className="text-wine-text hover:text-ink-text transition"
                >
                  politici kolačića
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">8. Bezbednost i izmene</h2>
              <p>
                Sajt radi isključivo preko HTTPS veze, a pristup pristiglim porukama ima samo
                vlasnik firme. Ako ovu politiku izmenimo, novi datum ažuriranja stoji na vrhu
                stranice.
              </p>
            </section>
          </div>

          <div className="mt-16 p-6 bg-ink-surface border border-ink-border rounded-2xl">
            <p className="text-ink-muted text-sm leading-relaxed">
              Imate pitanje o svojim podacima?{' '}
              <Link href="/kontakt" className="text-wine-text hover:text-ink-text transition">
                Javite nam se
              </Link>{' '}
              i odgovorićemo konkretno, bez pravničkih fraza.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
