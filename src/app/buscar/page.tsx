import { getProfessionals } from '@/lib/getProfessionals'
import ProfessionalList from './ProfessionalList'

export const metadata = {
  title: 'Buscar Profissionais | Lacrei Saúde',
  description: 'Encontre profissionais de saúde inclusivos para a comunidade LGBTQIAPN+',
}

export default async function BuscarPage() {
  const professionals = await getProfessionals()

  return (
    <main>
      <ProfessionalList professionals={professionals} />
    </main>
  )
}
