'use client'

import styled from 'styled-components'
import { media } from '@/styles/theme'
import { AboutCards } from '../ui/AboutCards'

export const GalleryContainer = styled.section`
  background: ${({ theme }) => theme.colors.borderLight}cc;
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

export function ImageGallery() {
  return (
    <GalleryContainer aria-label="Galeria de imagens da comunidade Lacrei Saúde">
      <AboutCards />
    </GalleryContainer>
  )
}
