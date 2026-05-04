import Hero from '@/components/quem-somos/Hero'
import { ImageCardsGallery } from '@/components/quem-somos/ImageCards'
import { NossaHistoria } from '@/components/quem-somos/NossaHistoria'
import { NossasCrencas } from '@/components/quem-somos/NossasCrencas'
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
      <ImageCardsGallery />
      <NossaHistoria />
      <NossasCrencas />
      <CtaBanner
        title="Faça parte do movimento"
        subtitle="Junte-se a nós e ajude a construir um sistema de saúde mais justo e acolhedor."
        primaryButton={{ label: 'Começar agora', href: '/' }}
        secondaryButton={{ label: 'Quero ser voluntárie', href: '/quem-somos' }}
      />
    </main>
  )
}
