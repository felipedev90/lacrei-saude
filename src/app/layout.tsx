import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Lacrei Saúde',
  description: 'Saúde inclusiva para a comunidade LGBTQIAPN+',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={nunito.variable}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
