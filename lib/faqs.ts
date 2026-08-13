/**
 * Jedan izvor istine za FAQ na početnoj strani.
 *
 * Ranije su pitanja i odgovori postojali u dve kopije — jednom u JSON-LD-u na
 * početnoj, jednom u komponenti akordiona — i kopije su se razišle. Google
 * traži da FAQPage markup doslovno odgovara vidljivom tekstu, pa se sada i
 * schema i vidljivi sadržaj generišu iz iste liste.
 */

export type Faq = { question: string; answer: string }

export const homeFaqs: Faq[] = [
  {
    question: 'Zašto Google Ads umesto društvenih mreža?',
    answer:
      'Google Ads hvata ljude u momentu namere. Dok na društvenim mrežama ometate ljude u zabavi, na Google-u se pojavljujete tačno onda kada neko traži vaše rešenje. To je razlika između „sviđanja" i „kupovine".',
  },
  {
    question: 'Da li se bavite i SEO-om?',
    answer:
      'SEO nije poseban paket kod nas. Ugrađen je u izradu sajta i u vođenje Google Business profila, kroz ključne reči, strukturu stranica i lokalni sadržaj. Prvi pomaci u organskim pozicijama se obično vide za 3 do 6 meseci.',
  },
  {
    question: 'Da li AI (SGE) menja način na koji se rangirate?',
    answer:
      'Menja. Google sve češće nudi generisan odgovor iznad rezultata, pa deo pretraga završi bez klika na sajt. Zato radimo na tome da vaš sadržaj bude jasan, potkrepljen i lak za citiranje, i da profil i sajt nose iste podatke o firmi.',
  },
  {
    question: 'Koliko košta vaša usluga?',
    answer:
      'Vođenje Google Ads kampanja je 200 evra mesečno, Google Business profil 100 evra mesečno, a izrada sajta ide od 50 do 600 evra, u zavisnosti od tipa. Ceo cenovnik je na stranici Cene, a besplatna konsultacija ne obavezuje ni na šta.',
  },
  {
    question: 'Radite li sa manjim biznisima ili samo sa velikim firmama?',
    answer:
      'Radimo sa firmama svih veličina, od lokalnih zanatlija i salona do e-commerce brendova i srednjih kompanija. Strategiju i budžet uvek prilagođavamo realnim mogućnostima i ciljevima klijenta.',
  },
  {
    question: 'Koliko dugo traje izrada sajta?',
    answer:
      'Jednostavna landing stranica je gotova za 5 do 7 radnih dana. Kompletan poslovni sajt sa više stranica traje 2 do 4 nedelje, u zavisnosti od dostupnosti sadržaja i broja revizija sa vaše strane.',
  },
  {
    question: 'Već imam sajt, možete li ga samo poboljšati?',
    answer:
      'Da. Radimo i audit i optimizaciju postojećih sajtova, brzinu učitavanja, SEO osnove, mobilnu prilagođenost i podešavanje konverzija, bez da morate da krećete ispočetka, osim ako je to zaista neophodno.',
  },
  {
    question: 'Da li se vezujem ugovorom na duži period?',
    answer:
      'Ne insistiramo na dugoročnim ugovorima. Radije dokazujemo vrednost rezultatima iz meseca u mesec, saradnju možete prekinuti u svakom trenutku uz razuman otkazni rok.',
  },
  {
    question: 'Da li garantujete prvo mesto na Google-u?',
    answer:
      'Nijedna ozbiljna agencija ne može da garantuje tačnu poziciju, jer Google algoritam nije pod nečijom kontrolom. Ono što garantujemo je transparentan rad, primenu proverenih SEO i Google Ads tehnika i mesečno izveštavanje o napretku.',
  },
]

/** FAQPage schema izvedena iz iste liste koju korisnik i vidi na stranici. */
export function faqPageSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
