import Header from '@/components/layout/Header'
import Hero from '@/components/home/Hero'
import Ecosystem from '@/components/home/Ecosystem'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
      </main>
    </>
  )
}
