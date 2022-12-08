import { Carousel } from 'react-responsive-carousel'
import { ProductImage } from '../../domain/model/Products/@types'
import 'react-responsive-carousel/lib/styles/carousel.css'

export const ImageCarousel = ({ images }: { images: ProductImage[] }) => (
  <Carousel>
    {(images ?? []).map((i) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={i.name}
        src={i.src}
        alt={i.name}
        className='flex items-center h-full'
      />
    ))}
  </Carousel>
)
