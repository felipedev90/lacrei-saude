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
    alt: 'Grupo de pessoas diversas sorrindo e se abraçando',
  },
  {
    id: '3',
    src: '/images/quem-somos/imageCards/mulher-trans.webp',
    alt: 'Mulher trans sorrindo e olhando para a câmera, com a bandeira trans ao fundo',
  },
  {
    id: '4',
    src: '/images/quem-somos/imageCards/amizade.webp',
    alt: 'Duas pessoas felizes e orgulhosas, segurando a bandeira do orgulho LGBTQIAPN+',
  },
]
