import { getProfessionals } from '@/lib/getProfessionals'
import ProfessionalList from '@/components/buscar/ProfessionalList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buscar Profissionais',
  description:
    'Encontre profissionais de saúde inclusivos para a comunidade LGBTQIAPN+. Psicólogos, médicos, psiquiatras e mais.',
  openGraph: {
    title: 'Buscar Profissionais | Lacrei Saúde',
    description: 'Encontre profissionais de saúde inclusivos para a comunidade LGBTQIAPN+.',
    url: '/buscar',
  },
}

export default async function BuscarPage() {
  const professionals = await getProfessionals()

  return (
    <main>
      <ProfessionalList professionals={professionals} />
    </main>
  )
}
