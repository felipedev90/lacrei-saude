import Hero from '@/components/quem-somos/Hero'
import { ImageGallery } from '@/components/quem-somos/ImageGallery'
import { OurHistory } from '@/components/quem-somos/OurHistory'
import { OurBeliefs } from '@/components/quem-somos/OurBeliefs'
import CtaBanner from '@/components/ui/CTA'

export const metadata = {
  title: 'Quem Somos | Lacrei Saúde',
  description:
    'Saiba mais sobre a missão, visão e valores da Lacrei Saúde, promovendo um sistema de saúde inclusivo para a comunidade LGBTQIAPN+',
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
