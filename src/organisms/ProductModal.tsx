import { ProductLinkList } from '../molecules/ProductLinkList'
import { ImageCarousel } from '../molecules/ImageCarousel'
import { ProductModalHeader } from '../molecules/ProductModalHeader'
import { ProductTechList } from '../molecules/ProductTechList'
import { Markdown } from '../molecules/Markdown'
import { Product } from '../../domain/model/Products/@types'

export const ProductModal = ({
  id,
  title,
  description,
  techs,
  links,
  images,
}: Product) => {
  return (
    <div className='flex flex-col gap-4'>
      <ProductModalHeader title={title} id={id} />
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-4'>
          <div className='mt-2'>
            <Markdown>{description}</Markdown>
          </div>
          <div className='mt-6'>
            <ProductLinkList links={links} />
          </div>
          <div className='mt-6'>
            <ProductTechList techs={techs} />
          </div>
        </div>
        {images && <ImageCarousel images={images} />}
      </div>
    </div>
  )
}
