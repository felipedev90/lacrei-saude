export const theme = {
  colors: {
    primary: '#018762',
    primaryDark: '#014C37',
    primaryDarker: '#007756',
    primaryLight: '#DFF2ED',
    primaryMid: '#4FB494',
    secondary: '#014687',
    white: '#FFFFFF',
    textPrimary: '#1A1A1A',
    textSecondary: '#555555',
    textMuted: '#888888',
    borderLight: '#E0F0EA',
    backgroundLight: '#F8FDFA',
    highlight: '#ffb340',
    overlay: {
      dark: 'rgba(1, 55, 37, 0.85)',
      medium: 'rgba(1, 55, 37, 0.55)',
      light: 'rgba(1, 55, 37, 0.1)',
      white: 'rgba(255, 255, 255, 0.7)',
    },
    warning: '#f59e0b',
  },
  fonts: {
    family: 'var(--font-nunito), system-ui, sans-serif',
    weights: {
      regular: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    sizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem', // 40px
      '4xl': '3rem', // 48px
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.6',
    },
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  spacing: {
    xs: '0.5rem', // 8px
    sm: '1rem', //16px
    md: '1.5rem', //24px
    lg: '2rem', //32px
    xl: '3rem', //48px
    '2xl': '4rem', //64px
    section: '4rem', //64px
  },
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
} as const

export type Theme = typeof theme

export const media = {
  tablet: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1024px)',
  desktopOnly: '@media (min-width: 1024px) and (max-width: 1279px)',
  wide: '@media (min-width: 1280px)',
}
