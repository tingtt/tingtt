import { SectionTitle } from '../atoms/SectionTitle'
import {
  ProductCardGrid,
  PropsProductCardGrid,
} from '../molecules/ProductCardGrid'

export const Products = ({ products }: PropsProductCardGrid) => {
  return (
    <div
      className={`
        relative
        min-h-screen flex flex-col items-center justify-center gap-16
        py-36 xsm:py-12 px-8 sm:px-16 lg:px-18
      `}
    >
      <SectionTitle>Products</SectionTitle>
      <ProductCardGrid products={products} />
      {/* Cover */}
      <div className='atomic-organism-cover' />
    </div>
  )
}
