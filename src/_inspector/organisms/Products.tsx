import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ORGANISM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import { SectionTitle } from '../atoms/SectionTitle'
import {
  ProductCardGrid,
  PropsProductCardGrid,
} from '../molecules/ProductCardGrid'

export const Products = ({
  products,
  inspecting,
}: PropsProductCardGrid & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'Products',
    level: ATOMIC_LEVEL_ORGANISM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div
      className={`
        relative
        min-h-screen flex flex-col items-center justify-center gap-16
        py-36 smm:py-12 px-8 md:px-16 xl:px-18
      `}
    >
      <SectionTitle inspecting={inspecting}>Products</SectionTitle>
      <ProductCardGrid products={products} inspecting={inspecting} />
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-organism-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
