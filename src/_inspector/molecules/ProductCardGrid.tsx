import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { ProductCard, ProductCardProps } from '../atoms/ProductCard'

export type PropsProductCardGrid = {
  products: ProductCardProps[]
}

export const ProductCardGrid = ({
  products,
  inspecting,
}: PropsProductCardGrid & PropsInspecting) => {
  return (
    <div className='relative grid lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-8'>
      {products.map((p) => (
        <ProductCard
          key={p.title}
          id={p.id}
          title={p.title}
          thumbnail={p.thumbnail}
          inspecting={inspecting}
        />
      ))}
      {/* Cover */}
      {inspecting && <div className='atomic-molecule-cover' />}
    </div>
  )
}
