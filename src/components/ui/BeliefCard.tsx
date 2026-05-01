'use client'

import styled from 'styled-components'
import { BeliefCardType } from '@/types/cards'
import { media } from '@/styles/theme'

const CardWrapper = styled.div<{ $isFeatured?: boolean }>`
  position: relative;
  background: transparent;
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  z-index: 1;

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(1, 135, 98, 0.1);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 30px 50px rgba(0, 0, 0, 0.06),
      0 4px 10px rgba(1, 135, 98, 0.05);
  }

  ${media.tablet} {
    grid-column: ${({ $isFeatured }) => ($isFeatured ? 'span 3' : 'span 3')};
  }

  ${media.desktop} {
    grid-column: ${({ $isFeatured }) => ($isFeatured ? 'span 2' : 'span 1')};
    padding: ${({ $isFeatured }) => ($isFeatured ? '48px' : '32px')};
  }
`

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primaryMid};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin-bottom: 8px;
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};
`

export function BeliefCard({ title, description, icon, isFeatured }: BeliefCardType) {
  return (
    <CardWrapper $isFeatured={isFeatured}>
      <IconWrapper>{icon}</IconWrapper>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </CardWrapper>
  )
}
