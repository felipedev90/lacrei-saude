'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'

const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  position: sticky;
  top: 0;
  z-index: 100;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`

const NavLink = styled(Link)<{ $active: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.textPrimary)};
  border-bottom: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};
  padding-bottom: 2px;
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

export default function Header() {
  const pathname = usePathname()

  return (
    <Wrapper>
      <Inner>
        <Logo width={200} height={48} />

        <Nav aria-label="Navegação principal">
          <NavLink href="/" $active={pathname === '/'}>
            Início
          </NavLink>
          <NavLink href="/quem-somos" $active={pathname === '/quem-somos'}>
            Quem Somos
          </NavLink>
        </Nav>

        <Actions>
          <Button variant="outline" href="/entrar">
            Entrar
          </Button>
          <Button variant="primary" href="/cadastrar">
            Cadastrar
          </Button>
        </Actions>
      </Inner>
    </Wrapper>
  )
}
