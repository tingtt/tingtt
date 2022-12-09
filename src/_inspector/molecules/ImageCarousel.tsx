import { Carousel } from 'react-responsive-carousel'
import { ProductImage } from '../../../domain/model/Products/@types'
import 'react-responsive-carousel/lib/styles/carousel.css'
import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const ImageCarousel = ({
  images,
  inspecting,
}: {
  images: ProductImage[]
} & PropsInspecting) => (
  <div className='relative'>
    <Carousel>
      {(images ?? []).map((i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i.name}
          src={i.src}
          alt={i.name}
          className='flex items-center h-full object-contain'
        />
      ))}
    </Carousel>
    {/* Cover */}
    {inspecting && <div className='atomic-molecule-cover' />}
  </div>
)
