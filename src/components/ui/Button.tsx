import Link from 'next/link'
import styled, { css } from 'styled-components'

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 24px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;
  white-space: nowrap;
`

const primaryStyles = css`
  background: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDarker};
    border-color: ${({ theme }) => theme.colors.primaryDarker};
  }
`

const outlineStyles = css`
  background: transparent;
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`

const outlineWhiteStyles = css`
  background: transparent;
  border-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const whiteStyles = css`
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`

type Variant = 'primary' | 'outline' | 'outline-white' | 'white'

const variantMap = {
  primary: primaryStyles,
  outline: outlineStyles,
  'outline-white': outlineWhiteStyles,
  white: whiteStyles,
}

interface StyledProps {
  $variant: Variant
}

const StyledButton = styled.button<StyledProps>`
  ${baseStyles}
  ${({ $variant }) => variantMap[$variant]}
`

const StyledLink = styled(Link)<StyledProps>`
  ${baseStyles}
  ${({ $variant }) => variantMap[$variant]}
`

interface ButtonProps {
  variant?: Variant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  if (href) {
    return (
      <StyledLink href={href} $variant={variant} aria-label={ariaLabel}>
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledButton $variant={variant} onClick={onClick} type={type} aria-label={ariaLabel}>
      {children}
    </StyledButton>
  )
}
