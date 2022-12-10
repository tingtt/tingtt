import { Carousel } from 'react-responsive-carousel'
import { ProductImage } from '../../../domain/model/Products/@types'
import 'react-responsive-carousel/lib/styles/carousel.css'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
} from '../../../domain/model/Inspector/@types'
import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'

export const ImageCarousel = ({ images }: { images: ProductImage[] }) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ImageCarousel',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
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
      {inspecting && (
        <div
          className={`atomic-molecule-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
