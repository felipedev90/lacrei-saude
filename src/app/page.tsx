import Hero from '@/components/home/Hero'
import Ecosystem from '@/components/home/Ecosystem'
import CtaBanner from '@/components/ui/CTA'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Ecosystem />
        <CtaBanner
          title="Saúde inclusiva, em todo o Brasil."
          subtitle="Pronte para um cuidado que respeita quem você é?"
          backgroundImage="/images/cta/cta-banner.webp"
          primaryButton={{ label: 'Criar minha conta', href: '/cadastrar' }}
          secondaryButton={{ label: 'Conheça a Lacrei', href: '/quem-somos' }}
        />
      </main>
    </>
  )
}
