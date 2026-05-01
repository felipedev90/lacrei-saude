import { ReactNode } from 'react'

export type TagType = {
  icon: React.ReactNode
  text: string
  highlight?: string
}

export type CardType = {
  id: string
  src: string
  alt: string
  tags?: TagType[]
}

export type BeliefCardType = {
  id: string
  title: string
  description: string
  icon: ReactNode
  isFeatured?: boolean
}
