import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '404, stranica nije pronađena',
  description: 'Ova stranica ne postoji ili je premeštena.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display font-medium text-8xl text-ink-border mb-4">404</h1>
          <h2 className="font-display font-medium text-3xl text-ink-text mb-4">Stranica nije pronađena</h2>
          <p className="text-ink-muted mb-8">Ova stranica ne postoji ili je premeštena.</p>
          <Link href="/" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base inline-block transition-colors shadow-lg shadow-wine/20">
            Nazad na početnu
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
