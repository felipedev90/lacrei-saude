import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lacrei-saude-teste-tecnico-felipe-augusto.vercel.app'),
  title: {
    default: 'Lacrei Saúde',
    template: '%s | Lacrei Saúde',
  },
  description:
    'Plataforma de saúde inclusiva que conecta a comunidade LGBTQIAPN+ a profissionais de saúde qualificados, com segurança e acolhimento.',
  keywords: ['saúde inclusiva', 'LGBTQIAPN+', 'profissionais de saúde', 'lacrei saúde'],
  authors: [{ name: 'Felipe Augusto' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Lacrei Saúde',
    title: 'Lacrei Saúde',
    description:
      'Plataforma de saúde inclusiva que conecta a comunidade LGBTQIAPN+ a profissionais de saúde qualificados.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lacrei Saúde',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lacrei Saúde',
    description:
      'Plataforma de saúde inclusiva que conecta a comunidade LGBTQIAPN+ a profissionais de saúde qualificados.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={nunito.variable}>
        <StyledComponentsRegistry>
          <JsonLd />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
