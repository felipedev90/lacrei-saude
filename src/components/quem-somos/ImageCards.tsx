'use client'

import styled from 'styled-components'
import { media } from '@/styles/theme'
import { QuemSomosCards } from '../ui/QuemSomosCards'

export const GalleryContainer = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.md};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${media.desktop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow-x: visible;
  }
`

export function ImageCardsGallery() {
  return (
    <GalleryContainer aria-label="Galeria de imagens da comunidade Lacrei Saúde">
      <QuemSomosCards />
    </GalleryContainer>
  )
}
