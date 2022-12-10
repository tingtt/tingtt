import { ProductLinkList } from '../molecules/ProductLinkList'
import { ImageCarousel } from '../molecules/ImageCarousel'
import { ProductModalHeader } from '../molecules/ProductModalHeader'
import { ProductTechList } from '../molecules/ProductTechList'
import { Markdown } from '../molecules/Markdown'
import { Product } from '../../../domain/model/Products/@types'
import {
  ATOMIC_LEVEL_ORGANISM,
  Component,
} from '../../../domain/model/Inspector/@types'
import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'

export const ProductModal = ({
  id,
  title,
  description,
  techs,
  links,
  images,
}: Product) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductModal',
    level: ATOMIC_LEVEL_ORGANISM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex flex-col gap-4'>
      <ProductModalHeader title={title} id={id} />
      <div className='grid lg:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-4'>
          <div className='mt-2'>
            <Markdown>{description}</Markdown>
          </div>
          <div className='mt-6'>
            <ProductLinkList links={links} />
          </div>
          <div className='mt-6'>
            {techs && techs.length > 0 && <ProductTechList techs={techs} />}
          </div>
        </div>
        {images && images.length > 0 && <ImageCarousel images={images} />}
      </div>
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
