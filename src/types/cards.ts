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
