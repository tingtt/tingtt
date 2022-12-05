import Image from 'next/image'
import { ProductImage } from '../../domain/model/Products/@types'
import { Carousel } from './Carousel'

export const ImageCarousel = ({ images }: { images: ProductImage[] }) => (
  <Carousel>
    {(images ?? []).map((i) => (
      <div key={i.name}>
        <Image src={i.src} alt={i.name} width={800} height={500} />
      </div>
    ))}
  </Carousel>
)
