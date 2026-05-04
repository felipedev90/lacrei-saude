import type { Professional } from '@/types/professional'

export async function getProfessionals(): Promise<Professional[]> {
  const data = await import('@/data/professionals.json')
  return data.default as Professional[]
}

export async function getProfessionalById(id: string): Promise<Professional | undefined> {
  const professionals = await getProfessionals()
  return professionals.find((professional) => professional.id === id)
}
