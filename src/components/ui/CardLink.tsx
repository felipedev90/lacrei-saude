'use client'

import styled from 'styled-components'
import Link from 'next/link'

const StyledCardLink = styled(Link)<{ $dark?: boolean }>`
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

export default StyledCardLink
