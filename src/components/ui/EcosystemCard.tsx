'use client'

import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.article`
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  display: grid;
  grid-template-columns: 45% 55%;
  min-height: 240px;
`

const Content = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Image = styled.div<{ $src: string }>`
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
`

const Label = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  display: block;
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 12px;
`

const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};
  margin-bottom: 20px;
`

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-decoration: none;

  &:hover {
    gap: 12px;
    transition: gap 0.2s;
  }

  &::after {
    content: '→';
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
}

export default function EcosystemCard({
  label = 'Lacrei',
  title,
  text,
  linkLabel,
  href,
  imageSrc,
  imageAlt = '',
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
      <Image $src={imageSrc} role="img" aria-label={imageAlt} />
    </Card>
  )
}
