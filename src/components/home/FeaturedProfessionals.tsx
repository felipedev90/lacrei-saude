'use client'

import styled from 'styled-components'
import { media } from '@/styles/theme'
import ProfessionalCard from '@/components/ui/ProfessionalCard'
import Button from '@/components/ui/Button'
import type { Professional } from '@/types/professional'

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.sm};

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

interface FeaturedProfessionalsProps {
  professionals: Professional[]
}

export function FeaturedProfessionals({ professionals }: FeaturedProfessionalsProps) {
  const displayedProfessionals = professionals.slice(0, 3)

  return (
    <SectionContainer>
      <CardsGrid>
        {displayedProfessionals.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </CardsGrid>

      <ButtonWrapper>
        <Button variant="outline-white" href="/buscar">
          Encontre mais especialistas
        </Button>
      </ButtonWrapper>
    </SectionContainer>
  )
}
