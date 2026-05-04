export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lacrei Saúde',
    url: 'https://lacrei-saude-teste-tecnico-felipe-augusto.vercel.app',
    logo: 'https://lacrei-saude-teste-tecnico-felipe-augusto.vercel.app/images/logo.png',
    description:
      'Plataforma de saúde inclusiva que conecta a comunidade LGBTQIAPN+ a profissionais de saúde qualificados.',
    sameAs: [
      'https://www.instagram.com/lacreisaude/',
      'https://www.linkedin.com/company/lacreisaude/',
      'https://www.facebook.com/lacrei.saude/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
