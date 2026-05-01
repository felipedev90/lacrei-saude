import { cardsData } from '@/data/imageCards'
import Image from 'next/image'
import styled from 'styled-components'
import { media } from '@/styles/theme'

export const CardWrapper = styled.div`
  position: relative;
  min-width: 240px;
  height: 320px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  flex-shrink: 0;

  ${media.desktop} {
    min-width: auto;
    height: 400px;
  }
`
const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.primaryDarker};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 4px 12px;

  ${media.wide} {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    border-color: ${({ theme }) => theme.colors.primaryDarker};
    padding: 6px 16px;
  }
`

export const TagsOverlay = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
`
export const Highlight = styled.strong`
  background-color: ${({ theme }) => theme.colors.highlight};
  color: ${({ theme }) => theme.colors.white};
  padding: 1px 6px;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
`

export function QuemSomosCards() {
  return (
    <>
      {cardsData.map((card) => (
        <CardWrapper key={card.id}>
          <Image
            src={card.src}
            alt={card.alt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            sizes="(max-width: 768px) 240px, 400px"
            quality={75}
            loading="lazy"
          />

          {card.tags && (
            <TagsOverlay>
              {card.tags.map((tag, index) => (
                <Tag key={index}>
                  {tag.icon}
                  {tag.text}
                  {tag.highlight && <Highlight>{tag.highlight}</Highlight>}
                </Tag>
              ))}
            </TagsOverlay>
          )}
        </CardWrapper>
      ))}
    </>
  )
}
