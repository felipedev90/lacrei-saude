import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Lacrei Saúde'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#014C37',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: '80px',
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.1,
          marginBottom: 24,
        }}
      >
        Lacrei Saúde
      </div>
      <div
        style={{
          fontSize: 32,
          color: 'rgba(255,255,255,0.8)',
          maxWidth: 700,
        }}
      >
        Saúde inclusiva para a comunidade LGBTQIAPN+
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          right: 80,
          fontSize: 24,
          color: '#4FB494',
        }}
      >
        lacreisaude.com.br
      </div>
    </div>,
    { ...size },
  )
}
