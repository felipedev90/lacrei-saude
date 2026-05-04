export type CtaBannerProps = {
  title: string
  subtitle: string
  backgroundImage?: string
  primaryButton: {
    label: string
    href: string
  }
  secondaryButton?: {
    label: string
    href: string
  }
}
