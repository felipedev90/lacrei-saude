import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import Header from '@/components/layout/Header'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}))

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

describe('Header', () => {
  it('renderiza o logo com alt correto', () => {
    renderWithTheme(<Header />)
    expect(screen.getByAltText('Lacrei Saúde')).toBeInTheDocument()
  })

  it('renderiza links de navegação no DOM', () => {
    renderWithTheme(<Header />)
    const inicioLinks = screen.getAllByText('Início')
    const quemSomosLinks = screen.getAllByText('Quem Somos')
    expect(inicioLinks.length).toBeGreaterThan(0)
    expect(quemSomosLinks.length).toBeGreaterThan(0)
  })

  it('renderiza links de entrar e cadastrar no DOM', () => {
    renderWithTheme(<Header />)
    const entrarLinks = screen.getAllByText('Entrar')
    const cadastrarLinks = screen.getAllByText('Cadastrar')
    expect(entrarLinks.length).toBeGreaterThan(0)
    expect(cadastrarLinks.length).toBeGreaterThan(0)
  })

  it('abre o menu mobile ao clicar no hamburguer', () => {
    renderWithTheme(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Abrir menu' })
    fireEvent.click(hamburger)
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toBeInTheDocument()
  })

  it('link início aponta para a rota correta', () => {
    renderWithTheme(<Header />)
    const inicioLinks = screen.getAllByText('Início')
    const firstLink = inicioLinks.at(0)
    expect(firstLink).toBeDefined()
    const anchor = firstLink!.closest('a')
    expect(anchor).toHaveAttribute('href', '/')
  })
})
