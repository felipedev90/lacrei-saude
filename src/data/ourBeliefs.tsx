import { Heart, Target, Eye, Sparkles } from 'lucide-react'
import type { BeliefCardType } from '@/types/cards'

export const beliefsData: BeliefCardType[] = [
  {
    id: 'proposito',
    title: 'Nosso propósito',
    description:
      'A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico a profissionais da saúde. Buscamos proporcionar um atendimento de qualidade, sustentado pelos pilares da inclusão, representatividade e segurança.',
    icon: <Heart size={32} strokeWidth={1.5} />,
    isFeatured: true,
  },
  {
    id: 'missao',
    title: 'Missão',
    description:
      'Conectar a comunidade LGBTQIAPN+ a profissionais de saúde capacitades, garantindo um atendimento ético, humanizado e seguro.',
    icon: <Target size={32} strokeWidth={1.5} />,
  },
  {
    id: 'visao',
    title: 'Visão',
    description:
      'Ser a maior referência em saúde inclusiva da América Latina, transformando a forma como o cuidado em saúde é oferecido.',
    icon: <Eye size={32} strokeWidth={1.5} />,
  },
  {
    id: 'valores',
    title: 'Valores',
    description:
      'Acolhimento, diversidade, ética, escuta ativa, transparência e compromisso com a vida e a dignidade humana.',
    icon: <Sparkles size={32} strokeWidth={1.5} />,
    isFeatured: true,
  },
]
