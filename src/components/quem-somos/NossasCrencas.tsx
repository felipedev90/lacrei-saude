'use client'

import styled from 'styled-components'
import { media } from '@/styles/theme'
import { beliefsData } from '@/data/nossasCrencas'
import { BeliefCard } from '@/components/ui/BeliefCard'

const Section = styled.section`
  position: relative; /* FUNDAMENTAL: Prende o overlay dentro desta section */
  width: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  background-image: url('/images/quem-somos/nossas-crencas/background.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const CardWideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.borderLight}cc;
  z-index: 0;
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.sm};

  ${media.tablet} {
    padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.lg};
  }
`

const Header = styled.div`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  width: 100%;
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.radii.full};
  }

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`

export function NossasCrencas() {
  return (
    <Section aria-labelledby="crencas-title">
      <CardWideOverlay />

      <ContentWrapper>
        <Header>
          <SectionTitle id="crencas-title">No que acreditamos</SectionTitle>
        </Header>

        <GridContainer>
          {beliefsData.map((belief) => (
            <BeliefCard
              key={belief.id}
              id={belief.id}
              title={belief.title}
              description={belief.description}
              icon={belief.icon}
              isFeatured={belief.isFeatured}
            />
          ))}
        </GridContainer>
      </ContentWrapper>
    </Section>
  )
}
