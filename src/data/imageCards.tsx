// arquivo: data.tsx (OU pode deixar tudo junto no ImageCards.tsx)
import { MapPin, Calendar, Heart } from 'lucide-react'
import type { CardType } from '@/types/cards'

// 2. Aplicamos a tipagem no array
export const cardsData: CardType[] = [
  {
    id: '1',
    src: '/images/quem-somos/imageCards/parada.webp',
    alt: 'Pessoas comemorando na parada LGBTQIAPN+',
    tags: [
      { icon: <MapPin size={20} />, text: 'São Paulo, SP' },
      { icon: <Calendar size={20} />, text: 'Setembro, 2025' },
      { icon: <Heart size={20} />, text: 'Acolhimento', highlight: 'LGBT+' },
    ],
  },
  {
    id: '2',
    src: '/images/quem-somos/imageCards/acolhimento.webp',
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
