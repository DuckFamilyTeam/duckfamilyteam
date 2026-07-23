'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Zašto Google Ads umesto društvenih mreža?',
    answer:
      'Google Ads hvata ljude u momentu namere. Dok na društvenim mrežama ometate ljude u zabavi, na Google-u se pojavljujete tačno onda kada neko traži vaše rešenje. To je razlika između "sviđanja" i "kupovine".',
  },
  {
    question: 'Šta je to SEO i koliko traje?',
    answer:
      'SEO je maraton. Prvi značajni pomaci u pozicijama se vide nakon 3 do 6 meseci, ali jednom kada zauzmete vrh Google-a, dobijate besplatan saobraćaj godinama.',
  },
  {
    question: 'Da li AI (SGE) menja način na koji se rangirate?',
    answer:
      'Apsolutno. Google sada koristi SGE (Search Generative Experience) da direktno odgovori korisnicima. Naša strategija se fokusira na to da vaš sadržaj postane primarni izvor informacija za te AI odgovore.',
  },
  {
    question: 'Koliko košta vaša usluga?',
    answer:
      'Cena zavisi od obima kampanje, industrije i ciljeva. Nudimo besplatnu analizu budžeta — zakazite konsultacije i dobićete preciznu ponudu bez obaveza.',
  },
  {
    question: 'Radite li sa manjim biznisima ili samo sa velikim firmama?',
    answer:
      'Radimo sa firmama svih veličina — od lokalnih zanatlija i salona do e-commerce brendova i srednjih kompanija. Strategiju i budžet uvek prilagođavamo realnim mogućnostima i ciljevima klijenta.',
  },
  {
    question: 'Koliko dugo traje izrada sajta?',
    answer:
      'Jednostavna landing stranica je gotova za 5–7 radnih dana. Kompletan poslovni sajt sa više stranica traje 2–4 nedelje, u zavisnosti od dostupnosti sadržaja i broja revizija sa vaše strane.',
  },
  {
    question: 'Već imam sajt — možete li ga samo poboljšati?',
    answer:
      'Da. Radimo i audit i optimizaciju postojećih sajtova — brzinu učitavanja, SEO osnove, mobilnu prilagođenost i podešavanje konverzija — a da ne morate da krećete ispočetka, osim ako je to zaista neophodno.',
  },
  {
    question: 'Da li se vezujem ugovorom na duži period?',
    answer:
      'Ne insistiramo na dugoročnim ugovorima. Radije dokazujemo vrednost rezultatima iz meseca u mesec — saradnju možete prekinuti u svakom trenutku uz razuman otkazni rok.',
  },
  {
    question: 'Da li garantujete prvo mesto na Google-u?',
    answer:
      'Nijedna ozbiljna agencija ne može da garantuje tačnu poziciju, jer Google algoritam nije pod nečijom kontrolom. Ono što garantujemo je transparentan rad, primenu proverenih SEO i Google Ads tehnika i mesečno izveštavanje o napretku.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-slate-100 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center p-5 md:p-6 text-left font-bold text-slate-800 text-base md:text-lg hover:bg-slate-50 transition-colors"
            aria-expanded={open === i}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? '200px' : '0' }}
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-slate-600 text-sm md:text-base leading-relaxed italic">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
