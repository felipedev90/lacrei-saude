'use client'

import styled from 'styled-components'
import EcosystemCard from '@/components/ui/EcosystemCard'
import Link from 'next/link'

const Section = styled.section`
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.lg};
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 16px;
`

const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`

const Tag = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 6px 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 16px;
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

const CardWide = styled.article<{ $src: string }>`
  grid-column: 1 / -1;
  position: relative;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  min-height: 260px;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
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
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 45%;
`

const CardSmall = styled.article`
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 20px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  grid-column: 1 / -1;
`

const CardLabel = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  display: block;
`

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 12px;
`

const CardTitleWhite = styled(CardTitle)`
  color: ${({ theme }) => theme.colors.white};
`

const CardText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.fonts.lineHeights.relaxed};
  margin-bottom: 20px;
`

const CardTextWhite = styled(CardText)`
  color: rgba(255, 255, 255, 0.85);
`

const CardSmallTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.extrabold};
  color: ${({ theme }) => theme.colors.primaryDark};
`

const CardSmallText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  flex: 1;
`

export default function Ecosystem() {
  return (
    <Section aria-labelledby="ecosystem-title">
      <Inner>
        <SectionTitle id="ecosystem-title">
          Conheça o ecossistema de saúde inclusiva da Lacrei
        </SectionTitle>
        <Tags>
          <Tag>• Profissionais verificados</Tag>
          <Tag>• Atendimento ético</Tag>
          <Tag>• Comunidade ativa</Tag>
          <Tag>• Cuidado integral</Tag>
        </Tags>

        <Grid>
          <EcosystemCard
            title="ENCONTRE"
            text="Plataforma livre e gratuita para encontrar profissionais de saúde acolhedores, com filtros por especialidade, localização e modalidade de atendimento."
            linkLabel="Buscar agora"
            href="/buscar"
            imageSrc="/images/ecosystem/encontre.webp"
            imageAlt="Pessoa usando o app da Lacrei Saúde"
          />

          <EcosystemCard
            title="AGENDE"
            text="Marque consultas presenciais ou online em poucos cliques. Atendimento humanizado, ético e seguro - feito com a comunidade."
            linkLabel="Saiba mais"
            href="/agendar"
            imageSrc="/images/ecosystem/agende.webp"
            imageAlt="Profissionais de saúde da Lacrei"
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
              <CardSmallTitle>PROTEJA</CardSmallTitle>
            </div>
            <CardSmallText>
              Privacidade, dignidade e atendimento livre de discriminação — sua segurança é nossa
              prioridade em cada interação.
            </CardSmallText>
            <CardLink href="/seguranca">Saiba mais</CardLink>
          </CardSmall>
        </Grid>
      </Inner>
    </Section>
  )
}
