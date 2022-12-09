import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import { ProductCard, ProductCardProps } from '../atoms/ProductCard'

export type PropsProductCardGrid = {
  products: ProductCardProps[]
}

export const ProductCardGrid = ({
  products,
  inspecting,
}: PropsProductCardGrid & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductCardGrid',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

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
      {inspecting && (
        <div
          className={`atomic-molecule-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
