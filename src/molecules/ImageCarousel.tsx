import Image from 'next/image'
import { Carousel } from './Carousel'

export type PropsImageCarousel = {
  images: Image[]
}
export type Image = {
  name: string
  src: string
}

export const ImageCarousel = ({ images }: PropsImageCarousel) => (
  <Carousel>
    {(images ?? []).map((i) => (
      <div key={i.name}>
        <Image src={i.src} alt={i.name} width={800} height={500} />
      </div>
    ))}
  </Carousel>
)
