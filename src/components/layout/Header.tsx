'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styled from 'styled-components'
import { media } from '@/styles/theme'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'

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
  padding: 0 ${({ theme }) => theme.spacing.sm};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.desktop} {
    padding: 0 ${({ theme }) => theme.spacing.lg};
    height: 72px;
  }
`

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;

  ${media.desktop} {
    display: none;
  }
`

const HamburgerLine = styled.span<{ $open: boolean; $position: 'top' | 'mid' | 'bot' }>`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  transition:
    transform 0.3s,
    opacity 0.3s;

  ${({ $open, $position }) =>
    $open && $position === 'top' && `transform: translateY(7px) rotate(45deg);`}

  ${({ $open, $position }) => $open && $position === 'mid' && `opacity: 0;`}

  ${({ $open, $position }) =>
    $open && $position === 'bot' && `transform: translateY(-7px) rotate(-45deg);`}
`

const MobileMenu = styled.nav<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.sm};

  ${media.desktop} {
    display: none;
  }
`

const DesktopNav = styled.nav`
  display: none;

  ${media.desktop} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const DesktopActions = styled.div`
  display: none;

  ${media.desktop} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }
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

const MobileNavLink = styled(NavLink)`
  border-bottom: none;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Wrapper>
      <Inner>
        <Logo width={150} height={38} />

        <HamburgerButton
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <HamburgerLine $open={menuOpen} $position="top" />
          <HamburgerLine $open={menuOpen} $position="mid" />
          <HamburgerLine $open={menuOpen} $position="bot" />
        </HamburgerButton>

        <DesktopNav aria-label="Navegação principal">
          <NavLink href="/" $active={pathname === '/'}>
            Início
          </NavLink>
          <NavLink href="/quem-somos" $active={pathname === '/quem-somos'}>
            Quem Somos
          </NavLink>
        </DesktopNav>

        <DesktopActions>
          <Button variant="outline" href="/entrar">
            Entrar
          </Button>
          <Button variant="primary" href="/cadastrar">
            Cadastrar
          </Button>
        </DesktopActions>
      </Inner>

      <MobileMenu $open={menuOpen} id="mobile-menu" aria-label="Navegação mobile">
        <MobileNavLink href="/" $active={pathname === '/'}>
          Início
        </MobileNavLink>
        <MobileNavLink href="/quem-somos" $active={pathname === '/quem-somos'}>
          Quem Somos
        </MobileNavLink>
        <Button variant="outline" href="/entrar">
          Entrar
        </Button>
        <Button variant="primary" href="/cadastrar">
          Cadastrar
        </Button>
      </MobileMenu>
    </Wrapper>
  )
}
