export type CtaBannerProps = {
  id?: string
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
