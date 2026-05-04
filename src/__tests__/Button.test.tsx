import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import Button from '@/components/ui/Button'

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

describe('Button', () => {
  it('renderiza o texto corretamente', () => {
    renderWithTheme(<Button>Clique aqui</Button>)
    expect(screen.getByText('Clique aqui')).toBeInTheDocument()
  })

  it('renderiza como link quando href é passado', () => {
    renderWithTheme(<Button href="/buscar">Buscar</Button>)
    const link = screen.getByRole('link', { name: 'Buscar' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/buscar')
  })

  it('renderiza como button quando href não é passado', () => {
    renderWithTheme(<Button>Enviar</Button>)
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument()
  })

  it('chama onClick quando clicado', async () => {
    const handleClick = jest.fn()
    renderWithTheme(<Button onClick={handleClick}>Clique</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('aplica aria-label corretamente', () => {
    renderWithTheme(<Button aria-label="Botão de cadastro">Cadastrar</Button>)
    expect(screen.getByLabelText('Botão de cadastro')).toBeInTheDocument()
  })
})
