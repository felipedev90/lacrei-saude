import Hero from '@/components/quem-somos/Hero'
import { ImageGallery } from '@/components/quem-somos/ImageGallery'
import { OurHistory } from '@/components/quem-somos/OurHistory'
import { OurBeliefs } from '@/components/quem-somos/OurBeliefs'
import CtaBanner from '@/components/ui/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos',
  description:
    'Conheça a história, missão e valores da Lacrei Saúde — plataforma criada para garantir saúde inclusiva para a comunidade LGBTQIAPN+.',
  openGraph: {
    title: 'Quem Somos | Lacrei Saúde',
    description: 'Conheça a história, missão e valores da Lacrei Saúde.',
    url: '/quem-somos',
  },
}

export default function QuemSomosPage() {
  return (
    <main>
      <Hero />
      <ImageGallery />
      <OurHistory />
      <OurBeliefs />
      <CtaBanner
        id="cta-quem-somos"
        title="Faça parte do movimento"
        subtitle="Junte-se a nós e ajude a construir um sistema de saúde mais justo e acolhedor."
        primaryButton={{ label: 'Começar agora', href: '/' }}
        secondaryButton={{ label: 'Quero ser voluntárie', href: '/quem-somos' }}
      />
    </main>
  )
}
