import Hero from '@/components/home/Hero'
import Ecosystem from '@/components/home/Ecosystem'
import CtaBanner from '@/components/ui/CTA'
import { getProfessionals } from '@/lib/getProfessionals'

export default async function Home() {
  const professionals = await getProfessionals()

  return (
    <>
      <main>
        <Hero />
        <Ecosystem professionals={professionals} />
        <CtaBanner
          id="cta-home"
          title="Saúde inclusiva, em todo o Brasil."
          subtitle="Pronte para um cuidado que respeita quem você é?"
          backgroundImage="/images/CTA/cta-banner.webp"
          primaryButton={{ label: 'Criar minha conta', href: '/cadastrar' }}
          secondaryButton={{ label: 'Conheça a Lacrei', href: '/quem-somos' }}
        />
      </main>
    </>
  )
}
