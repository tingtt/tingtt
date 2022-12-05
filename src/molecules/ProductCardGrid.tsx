import { ProductCard, ProductCardProps } from '../atoms/ProductCard'

export type PropsProductCardGrid = {
  products: ProductCardProps[]
}

export const ProductCardGrid = ({ products }: PropsProductCardGrid) => {
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {products.map((p) => (
        <ProductCard key={p.title} id={p.id} title={p.title} />
      ))}
    </div>
  )
}
