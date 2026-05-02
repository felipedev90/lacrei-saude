'use client'

import styled from 'styled-components'
import { media } from '@/styles/theme'
import type { Professional } from '@/types/professional'
import ProfessionalCard from '@/components/ui/ProfessionalCard'

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px ${({ theme }) => theme.spacing.sm};

  ${media.desktop} {
    padding: 64px ${({ theme }) => theme.spacing.lg};
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 8px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 40px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes.base};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

interface ProfessionalListProps {
  professionals: Professional[]
}

export default function ProfessionalList({ professionals }: ProfessionalListProps) {
  return (
    <Wrapper>
      <Title>Encontre seu profissional</Title>
      <Subtitle>
        Profissionais verificados e comprometidos com o cuidado inclusivo da comunidade LGBTQIAPN+
      </Subtitle>
      <Grid>
        {professionals.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </Grid>
    </Wrapper>
  )
}
