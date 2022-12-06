import Image from 'next/image'
import { ProductImage } from '../../domain/model/Products/@types'
import { Carousel } from './Carousel'

export const ImageCarousel = ({ images }: { images: ProductImage[] }) => (
  <Carousel>
    {(images ?? []).map((i) => (
      <div key={i.name} className='flex items-center h-full'>
        <Image src={i.src} alt={i.name} width={300} height={200} />
      </div>
    ))}
  </Carousel>
)
