import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import ProfessionalCard from '@/components/ui/ProfessionalCard'
import type { Professional } from '@/types/professional'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}))

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

const mockProfessional: Professional = {
  id: '1',
  name: 'Dra. Camila Santos',
  specialty: 'Psicologia',
  location: 'São Paulo, SP',
  modality: 'Online e Presencial',
  rating: 4.9,
  reviews: 127,
  avatar: '/images/professionals/camila.webp',
  badge: 'Verificada',
  lgbtAffirming: true,
}

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

describe('ProfessionalCard', () => {
  it('renderiza o nome do profissional', () => {
    renderWithTheme(<ProfessionalCard professional={mockProfessional} />)
    expect(screen.getByText('Dra. Camila Santos')).toBeInTheDocument()
  })

  it('renderiza a especialidade', () => {
    renderWithTheme(<ProfessionalCard professional={mockProfessional} />)
    expect(screen.getByText('Psicologia')).toBeInTheDocument()
  })

  it('renderiza a localização', () => {
    renderWithTheme(<ProfessionalCard professional={mockProfessional} />)
    expect(screen.getByText('São Paulo, SP')).toBeInTheDocument()
  })

  it('renderiza a modalidade de atendimento', () => {
    renderWithTheme(<ProfessionalCard professional={mockProfessional} />)
    expect(screen.getByText('Online e Presencial')).toBeInTheDocument()
  })

  it('renderiza o badge de verificação', () => {
    renderWithTheme(<ProfessionalCard professional={mockProfessional} />)
    expect(screen.getByText('Verificada')).toBeInTheDocument()
  })

  it('renderiza a avaliação corretamente', () => {
    renderWithTheme(<ProfessionalCard professional={mockProfessional} />)
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('(127 avaliações)')).toBeInTheDocument()
  })

  it('renderiza o link de ver perfil com href correto', () => {
    renderWithTheme(<ProfessionalCard professional={mockProfessional} />)
    const link = screen.getByRole('link', { name: 'Ver perfil' })
    expect(link).toHaveAttribute('href', '/profissional/1')
  })

  it('renderiza o avatar com alt correto', () => {
    renderWithTheme(<ProfessionalCard professional={mockProfessional} />)
    expect(screen.getByAltText('Foto de Dra. Camila Santos')).toBeInTheDocument()
  })
})
