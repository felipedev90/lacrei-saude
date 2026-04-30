import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import Ecosystem from '@/components/home/Ecosystem'
import CtaBanner from '@/components/home/CtaBanner'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
