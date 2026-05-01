import { MapPin, Calendar, Heart } from 'lucide-react'
import type { CardType } from '@/types/cards'

export const cardsData: CardType[] = [
  {
    id: '1',
    src: '/images/quem-somos/imageCards/parada.webp',
    alt: 'Pessoas comemorando na parada LGBTQIAPN+',
    tags: [
      { icon: <MapPin size={20} />, text: 'São Paulo, SP' },
      { icon: <Calendar size={20} />, text: '7 de Junho de 2026' },
      { icon: <Heart size={20} />, text: 'Acolhimento', highlight: 'LGBT+' },
    ],
  },
  {
    id: '2',
    src: '/images/quem-somos/imageCards/amor.webp',
    alt: 'Médica e paciente conversando de forma acolhedora',
  },
  {
    id: '3',
    src: '/images/quem-somos/imageCards/mulher-trans.webp',
    alt: 'Duas mulheres conversando em um ambiente claro',
  },
  {
    id: '4',
    src: '/images/quem-somos/imageCards/amizade.webp',
    alt: 'Grupo de pessoas diversas sorrindo',
  },
]
