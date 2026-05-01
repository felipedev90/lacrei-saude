'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { media } from '@/styles/theme'
import Image from 'next/image'
import Logo from '@/components/ui/Logo'

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primaryDark};

  ${media.desktop} {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.lg};
  }
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  ${media.desktop} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  }
`

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  ${media.desktop} {
    flex: 1.5;
  }
`

const BrandText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.primaryDark};
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};
  max-width: 280px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
    background: rgba(255, 255, 255, 0.1);
  }

  img {
    width: 24px;
    height: 24px;
  }
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.desktop} {
    grid-template-columns: 1fr 1fr;
    flex: 2;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 4px;
`

const FooterLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const FooterExternalLink = styled.a`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`

const SocialLinkMedium = styled(SocialLink)`
  img {
    width: 28px;
    height: 28px;
  }
`

const SocialLinkSmall = styled(SocialLink)`
  img {
    width: 22px;
    height: 22px;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;

  ${media.desktop} {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`

const BottomText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  color: ${({ theme }) => theme.colors.primaryDark};
`

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Top>
          <Brand>
            <Logo width={180} height={34} />
            <BrandText>
              Plataforma de saúde inclusiva, acolhedora e segura para toda a comunidade LGBTQIAPN+
              do Brasil.
            </BrandText>
            <SocialLinks>
              <SocialLink
                href="https://www.instagram.com/lacreisaude/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Lacrei Saúde"
              >
                <Image
                  src="/images/footer/instagram.svg"
                  alt="Instagram da Lacrei Saúde"
                  aria-hidden={true}
                  width={24}
                  height={24}
                />
              </SocialLink>
              <SocialLinkMedium
                href="https://www.linkedin.com/company/lacreisaude/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Lacrei Saúde"
              >
                <Image
                  src="/images/footer/linkedin.svg"
                  alt="LinkedIn da Lacrei Saúde"
                  aria-hidden={true}
                  width={24}
                  height={24}
                />
              </SocialLinkMedium>
              <SocialLinkSmall
                href="https://www.facebook.com/lacrei.saude/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Lacrei Saúde"
              >
                <Image
                  src="/images/footer/facebook.svg"
                  alt="Facebook da Lacrei Saúde"
                  aria-hidden={true}
                  width={24}
                  height={24}
                />
              </SocialLinkSmall>
            </SocialLinks>
          </Brand>

          <Columns>
            <Column>
              <ColumnTitle>Navegação</ColumnTitle>
              <FooterLink href="/">Início</FooterLink>
              <FooterLink href="/quem-somos">Quem Somos</FooterLink>
              <FooterLink href="/profissionais">Profissionais</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </Column>

            <Column>
              <ColumnTitle>Contato</ColumnTitle>
              <FooterExternalLink href="mailto:contato@lacreisaude.com.br">
                contato@lacreisaude.com.br
              </FooterExternalLink>
              <BottomText style={{ color: 'rgba(255,255,255,0.7)' }}>
                São Paulo, SP — Brasil
              </BottomText>
              <FooterLink href="/privacidade">Política de privacidade</FooterLink>
            </Column>
          </Columns>
        </Top>

        <Divider />

        <Bottom>
          <BottomText>© 2026 Lacrei Saúde. Todos os direitos reservados.</BottomText>
          <BottomText>Desenvolvido por Felipe Augusto 🍃</BottomText>
          <BottomText>Feito com ♥ para a comunidade.</BottomText>
        </Bottom>
      </Inner>
    </Wrapper>
  )
}
