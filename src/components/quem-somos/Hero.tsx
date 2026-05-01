'use client'

import styled from 'styled-components'
import { media } from '@/styles/theme'

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;
  background-image: url('/images/quem-somos/quem-somos-hero.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet} {
    min-height: 50vh;
  }

  ${media.desktop} {
    min-height: 70vh;
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

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 4px 12px;

  ${media.desktop} {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    border-color: ${({ theme }) => theme.colors.primaryDarker};
    padding: 6px 16px;
  }
`

const Eyebrow = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.primaryDark};
  letter-spacing: 1px;
  text-transform: uppercase;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
  max-width: 640px;
  margin: 16px 0;

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

const SubtitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primaryMid};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
`

export default function Hero() {
  return (
    <Section>
      <Overlay aria-hidden="true" />
      <Inner>
        <Tag>
          <Eyebrow>Quem somos</Eyebrow>
        </Tag>
        <Title>
          Saúde feita <SubtitleHighlight>com</SubtitleHighlight> a comunidade, não{' '}
          <SubtitleHighlight>para</SubtitleHighlight> a comunidade
        </Title>
        <Subtitle>
          Somos uma plataforma criada por pessoas LGBTQIAPN+ que acreditam que todo mundo merece
          acessar saúde com respeito, dignidade e cuidado integral.
        </Subtitle>
      </Inner>
    </Section>
  )
}
