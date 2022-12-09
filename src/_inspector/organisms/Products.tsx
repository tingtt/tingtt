import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { SectionTitle } from '../atoms/SectionTitle'
import {
  ProductCardGrid,
  PropsProductCardGrid,
} from '../molecules/ProductCardGrid'

export const Products = ({
  products,
  inspecting,
}: PropsProductCardGrid & PropsInspecting) => {
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
      {inspecting && <div className='atomic-organism-cover' />}
    </div>
  )
}
