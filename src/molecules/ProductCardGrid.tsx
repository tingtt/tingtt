import { ProductCard, ProductCardProps } from '../atoms/ProductCard'

export type PropsProductCardGrid = {
  products: ProductCardProps[]
}

export const ProductCardGrid = ({ products }: PropsProductCardGrid) => {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-8'>
      {products.map((p) => (
        <ProductCard
          key={p.title}
          id={p.id}
          title={p.title}
          thumbnail={p.thumbnail}
        />
      ))}
    </div>
  )
}
