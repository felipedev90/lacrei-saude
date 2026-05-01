import Hero from '@/components/quem-somos/Hero'
import { ImageCardsGallery } from '@/components/quem-somos/ImageCards'
import { NossaHistoria } from '@/components/quem-somos/NossaHistoria'
import { NossasCrencas } from '@/components/quem-somos/NossasCrencas'

export default function QuemSomosPage() {
  return (
    <main>
      <Hero />
      <ImageCardsGallery />
      <NossaHistoria />
      <NossasCrencas />
    </main>
  )
}
