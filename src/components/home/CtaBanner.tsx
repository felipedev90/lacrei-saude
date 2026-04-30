'use client'

import styled from 'styled-components'
import { media } from '@/styles/theme'
import Button from '@/components/ui/Button'

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  background-image: url('/images/cta/cta-banner.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet} {
    min-height: 400px;
  }

  ${media.desktop} {
    min-height: 480px;
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(1, 55, 37, 0.92) 0%,
    rgba(1, 55, 37, 0.5) 50%,
    rgba(1, 55, 37, 0.1) 100%
  );
`

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 40px ${({ theme }) => theme.spacing.sm};

  ${media.tablet} {
    padding: 48px ${({ theme }) => theme.spacing.lg};
  }

  ${media.desktop} {
    padding: 64px ${({ theme }) => theme.spacing.lg};
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.fonts.lineHeights.tight};
  margin-bottom: 8px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 24px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
    margin-bottom: 32px;
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

export default function CtaBanner() {
  return (
    <Section aria-labelledby="cta-title">
      <Overlay aria-hidden="true" />
      <Inner>
        <Title id="cta-title">Saúde inclusiva, em todo o Brasil.</Title>
        <Subtitle>Pronte para um cuidado que respeita quem você é?</Subtitle>
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
