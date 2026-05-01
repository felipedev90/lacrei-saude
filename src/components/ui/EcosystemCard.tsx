'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { media } from '@/styles/theme'

const Card = styled.article`
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 200px;

  ${media.tablet} {
    display: grid;
    grid-template-columns: 45% 55%;
    min-height: 240px;
  }
`

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet} {
    padding: 28px;
  }
`

const Image = styled.div<{ $src: string; $position?: string }>`
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center 10%;
  min-height: 160px;

  ${media.tablet} {
    min-height: unset;
    background-position: center;
  }

  ${media.desktopOnly} {
    background-position: ${({ $position }) => $position ?? 'center'};
  }
`

const Label = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
  display: block;
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 10px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
    margin-bottom: 12px;
  }
`

const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};
  margin-bottom: 16px;

  ${media.tablet} {
    margin-bottom: 20px;
  }
`

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-decoration: none;

  &::after {
    content: '→';
    display: inline-block;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`

interface EcosystemCardProps {
  label?: string
  title: string
  text: string
  linkLabel: string
  href: string
  imageSrc: string
  imageAlt?: string
  imagePosition?: string
}

export default function EcosystemCard({
  label = 'Lacrei',
  title,
  text,
  linkLabel,
  href,
  imageSrc,
  imageAlt = '',
  imagePosition = 'center',
}: EcosystemCardProps) {
  return (
    <Card>
      <Content>
        <div>
          <Label>{label}</Label>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </div>
        <CardLink href={href}>{linkLabel}</CardLink>
      </Content>
      <Image $src={imageSrc} $position={imagePosition} role="img" aria-label={imageAlt} />
    </Card>
  )
}
