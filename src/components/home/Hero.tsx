'use client'

import styled from 'styled-components'
import { media } from '@/styles/theme'
import Button from '@/components/ui/Button'

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 420px;
  display: flex;
  align-items: center;
  background-image: url('/images/hero/hero.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet} {
    min-height: 520px;
  }

  ${media.desktop} {
    min-height: 580px;
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(1, 55, 37, 0.55);
`

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 48px ${({ theme }) => theme.spacing.sm};

  ${media.tablet} {
    padding: 64px ${({ theme }) => theme.spacing.lg};
  }

  ${media.desktop} {
    padding: 80px ${({ theme }) => theme.spacing.lg};
  }
`

const Eyebrow = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryLight};
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    margin-bottom: 16px;
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
  max-width: 640px;
  margin-bottom: 16px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
    margin-bottom: 20px;
  }

  ${media.desktop} {
    font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: rgba(255, 255, 255, 0.9);
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};
  max-width: 520px;
  margin-bottom: 28px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes.base};
    margin-bottom: 36px;
  }

  ${media.desktop} {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  ${media.tablet} {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

export default function Hero() {
  return (
    <Section>
      <Overlay aria-hidden="true" />
      <Inner>
        <Eyebrow>Plataforma de saúde inclusiva</Eyebrow>
        <Title>Saúde acolhedora, com você no centro.</Title>
        <Subtitle>
          Conectamos a comunidade LGBTQIAPN+ a profissionais de saúde capacitados, éticos e
          respeitosos — em todo o Brasil.
        </Subtitle>
        <Actions>
          <Button variant="primary" href="/cadastrar">
            Criar minha conta
          </Button>
          <Button variant="outline-white" href="/quem-somos">
            Conheça a Lacrei
          </Button>
        </Actions>
      </Inner>
    </Section>
  )
}
