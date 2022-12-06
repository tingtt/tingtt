export type Product = {
  id: string
  title: string
  description: string
  links: ProductLink[]
  thumbnail?: string
  images: ProductImage[]
  techs: ProductTech[]
}

export type ProductLink = {
  name?: string
  href: string
  type?: 'github' | 'gitlab' | 'web' | 'docs' | 'slide'
}

export type ProductImage = {
  name: string
  src: string
}

export type ProductTech = {
  name: string
  type?: 'server' | 'pg-lang' | 'db'
}
