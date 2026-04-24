import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-9xl font-black text-slate-100 mb-4">404</h1>
          <h2 className="text-3xl font-black text-slate-900 mb-4 italic">Stranica nije pronađena</h2>
          <p className="text-slate-500 mb-8">Ova stranica ne postoji ili je premeštena.</p>
          <Link href="/" className="btn-duck text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest inline-block">
            Nazad na početnu
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
