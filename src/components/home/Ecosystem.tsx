'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { media } from '@/styles/theme'
import EcosystemCard from '@/components/ui/EcosystemCard'
import { BadgeCheck, Heart, Users, ShieldCheck } from 'lucide-react'

const Section = styled.section`
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.secondary} 0%,
    ${({ theme }) => theme.colors.primary} 90%
  );
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};

  ${media.desktop} {
    padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.lg};
  }
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 16px;

  ${media.tablet} {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  }

  ${media.desktop} {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
    color: ${({ theme }) => theme.colors.white};
  }
`

const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  ${media.desktop} {
    gap: 12px;
    margin-bottom: 40px;
  }
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 4px 12px;

  ${media.desktop} {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    border-color: rgba(255, 255, 255, 0.4);
    padding: 6px 16px;
  }
`

const TagDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`

const BottomTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 24px;
  flex-wrap: wrap;
  margin-top: 32px;

  ${media.desktop} {
    padding: 0;
    gap: 12px;
    margin-top: 40px;
  }
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`

const CardWide = styled.article<{ $src: string }>`
  position: relative;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  min-height: 220px;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;

  ${media.desktop} {
    grid-column: 1 / -1;
    min-height: 260px;
  }
`

const CardWideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(1, 55, 37, 0.85) 0%,
    rgba(1, 55, 37, 0.5) 50%,
    rgba(1, 55, 37, 0.05) 100%
  );
`

const CardWideContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  ${media.desktop} {
    max-width: 45%;
    padding: 28px;
  }
`

const CardSmall = styled.article`
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    grid-column: 1 / -1;
    padding: 20px 28px;
  }
`

const CardLabel = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
  display: block;
`

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 8px;

  ${media.desktop} {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
    margin-bottom: 0;
  }
`

const CardTitleWhite = styled(CardTitle)`
  color: ${({ theme }) => theme.colors.white};
`

const CardText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};
`

const CardTextWhite = styled(CardText)`
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
`

const CardSmallText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};

  ${media.desktop} {
    flex: 1;
  }
`

const CardLink = styled(Link)<{ $dark?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme, $dark }) => ($dark ? theme.colors.white : theme.colors.primaryDark)};
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

export default function Ecosystem() {
  return (
    <Section aria-labelledby="ecosystem-title">
      <Inner>
        <SectionTitle id="ecosystem-title">
          Conheça o ecossistema de saúde inclusiva da Lacrei
        </SectionTitle>
        <Tags>
          <Tag>
            <BadgeCheck size={14} />
            Profissionais verificados
          </Tag>
          <Tag>
            <Heart size={14} />
            Atendimento ético
          </Tag>
          <Tag>
            <Users size={14} />
            Comunidade ativa
          </Tag>
          <Tag>
            <ShieldCheck size={14} />
            Cuidado integral
          </Tag>
        </Tags>

        <Grid>
          <EcosystemCard
            title="ENCONTRE"
            text="Plataforma livre e gratuita para encontrar profissionais de saúde acolhedores, com filtros por especialidade, localização e modalidade de atendimento."
            linkLabel="Buscar agora"
            href="/buscar"
            imageSrc="/images/ecosystem/encontre.webp"
            imageAlt="Pessoa usando o app da Lacrei Saúde"
            imagePosition=" 80%"
          />

          <EcosystemCard
            title="AGENDE"
            text="Marque consultas presenciais ou online em poucos cliques. Atendimento humanizado, ético e seguro — feito com a comunidade."
            linkLabel="Saiba mais"
            href="/agendar"
            imageSrc="/images/ecosystem/agende.webp"
            imageAlt="Profissionais de saúde da Lacrei"
            imagePosition="15% "
          />

          <CardWide $src="/images/ecosystem/capacite.webp" aria-label="Capacite-se com a Lacrei">
            <CardWideOverlay aria-hidden="true" />
            <CardWideContent>
              <div>
                <CardLabel style={{ color: 'rgba(255,255,255,0.7)' }}>Lacrei</CardLabel>
                <CardTitleWhite>CAPACITE</CardTitleWhite>
                <CardTextWhite>
                  Oferecemos formação continuada para profissionais de saúde sobre cuidado
                  competente e inclusivo para pessoas LGBTQIAPN+, incluindo bioética e diretrizes
                  clínicas.
                </CardTextWhite>
              </div>
              <CardLink href="/capacitacao" $dark>
                Capacite-se
              </CardLink>
            </CardWideContent>
          </CardWide>

          <CardSmall>
            <div>
              <CardLabel>Lacrei</CardLabel>
              <CardTitle>PROTEJA</CardTitle>
            </div>
            <CardSmallText>
              Privacidade, dignidade e atendimento livre de discriminação — sua segurança é nossa
              prioridade em cada interação.
            </CardSmallText>
            <CardLink href="/seguranca">Saiba mais</CardLink>
          </CardSmall>
        </Grid>
        <BottomTags>
          <Tag>
            <TagDot $color="#018762" />
            APOIO
          </Tag>
          <Tag>
            <TagDot $color="#018762" />
            SAÚDE +
          </Tag>
          <Tag>
            <TagDot $color="#018762" />
            PRIDE HEALTH
          </Tag>
          <Tag>
            <TagDot $color="#018762" />
            OPEN CARE
          </Tag>
        </BottomTags>
      </Inner>
    </Section>
  )
}
