'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { MapPin, Monitor, Star } from 'lucide-react'

import type { Professional } from '@/types/professional'
import Button from '@/components/ui/Button'

const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 20px rgba(1, 135, 98, 0.12);
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const AvatarWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.primaryLight};
`

const Info = styled.div`
  flex: 1;
`

const Name = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 2px;
`

const Specialty = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
`

const Badge = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 2px 10px;
  align-self: flex-start;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};

  svg {
    color: #f59e0b;
  }
`

const Reviews = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.textMuted};
`

interface ProfessionalCardProps {
  professional: Professional
}

export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <Card>
      <Header>
        <AvatarWrapper>
          <Image
            src={professional.avatar}
            alt={`Foto de ${professional.name}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="64px"
          />
        </AvatarWrapper>
        <Info>
          <Name>{professional.name}</Name>
          <Specialty>{professional.specialty}</Specialty>
        </Info>
      </Header>

      <Badge>{professional.badge}</Badge>

      <Details>
        <DetailRow>
          <MapPin size={16} />
          {professional.location}
        </DetailRow>
        <DetailRow>
          <Monitor size={16} />
          {professional.modality}
        </DetailRow>
      </Details>

      <Rating>
        <Star size={16} />
        {professional.rating}
        <Reviews>({professional.reviews} avaliações)</Reviews>
      </Rating>

      <Button variant="primary" href={`/profissional/${professional.id}`}>
        Ver perfil
      </Button>
    </Card>
  )
}
