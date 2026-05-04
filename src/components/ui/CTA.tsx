'use client'
import styled from 'styled-components'
import { media } from '@/styles/theme'
import Button from '@/components/ui/Button'
import type { CtaBannerProps } from '@/types/ctaBanner'

const Section = styled.section<{ $bgImage?: string }>`
  position: relative;
  width: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primaryDark};
  ${({ $bgImage }) => $bgImage && `background-image: url('${$bgImage}');`}

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

export default function CtaBanner({
  title,
  subtitle,
  backgroundImage,
  primaryButton,
  secondaryButton,
}: CtaBannerProps) {
  return (
    <Section $bgImage={backgroundImage} aria-labelledby="cta-title">
      <Overlay aria-hidden="true" />
      <Inner>
        <Title id="cta-title">{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <Actions>
          <Button variant="primary" href={primaryButton.href}>
            {primaryButton.label}
          </Button>

          {secondaryButton && (
            <Button variant="outline-white" href={secondaryButton.href}>
              {secondaryButton.label}
            </Button>
          )}
        </Actions>
      </Inner>
    </Section>
  )
}
