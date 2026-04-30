import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`

interface LogoProps {
  href?: string
  width?: number
  height?: number
}

export default function Logo({ href = '/', width = 140, height = 40 }: LogoProps) {
  return (
    <Brand href={href} aria-label="Lacrei Saúde - página inicial">
      <Image src="/images/logo.png" alt="Lacrei Saúde" width={width} height={height} priority />
    </Brand>
  )
}
