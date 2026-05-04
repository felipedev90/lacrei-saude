'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { media } from '@/styles/theme'

const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  max-width: 1200px;
  margin: 0 auto;

  ${media.tablet} {
    padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.lg};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  ${media.desktop} {
    grid-template-columns: 1fr 1.2fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  ${media.tablet} {
    height: 580px;
  }

  ${media.desktop} {
    height: 480px;
  }

  ${media.wide} {
    height: 450px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
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

const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};
  margin-bottom: 0.5rem;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};

  ${media.tablet} {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const MetricCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const MetricValue = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`

const MetricLabel = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
`

export function NossaHistoria() {
  return (
    <Container aria-labelledby="historia-title">
      <Grid>
        <ImageWrapper>
          <Image
            src="/images/quem-somos/nossaHistoria/orgulho.webp"
            alt="Várias mãos de diferentes tons de pele unidas formando um círculo ao centro"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </ImageWrapper>

        <Content>
          <Title id="historia-title">Nossa história</Title>

          <Description>
            A Lacrei Saúde nasceu da inquietação de ver pessoas LGBTQIAPN+ evitando ou adiando
            consultas por medo de não serem respeitadas. Histórias compartilhadas em rodas de
            conversa se transformaram em ação coletiva.
          </Description>

          <Description>
            Em 2022, lançamos a primeira versão da plataforma com um grupo de profissionais aliades.
            Hoje, somos uma comunidade nacional que conecta milhares de pessoas a um cuidado em
            saúde verdadeiramente inclusivo.
          </Description>

          <MetricsGrid>
            <MetricCard>
              <MetricValue>2022</MetricValue>
              <MetricLabel>Ano de fundação</MetricLabel>
            </MetricCard>

            <MetricCard>
              <MetricValue>+150k</MetricValue>
              <MetricLabel>Vidas impactadas</MetricLabel>
            </MetricCard>
          </MetricsGrid>
        </Content>
      </Grid>
    </Container>
  )
}
