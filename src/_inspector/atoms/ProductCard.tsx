import Image from 'next/image'
import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export type ProductCardProps = {
  id: string
  title: string
  thumbnail?: string
}

export const ProductCard = ({
  id,
  title,
  thumbnail,
  inspecting,
}: ProductCardProps & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'ProductCard', level: ATOMIC_LEVEL_ATOM }
  const isSelected = useComponentSelected(component)

  return (
    <div
      className={`
        card min-w-[300px] xl:min-w-[384px] min-h-[200px] xl:min-h-[260px] duration-200
        ${inspecting ? '' : 'hover:scale-105'}
        rounded shadow-xl overflow-hidden dark:bordered dark:!border-gray-500
      `}
    >
      <label htmlFor={inspecting ? '' : id} className='relative w-full h-full'>
        {thumbnail != undefined ? (
          <Image src={thumbnail} width={400} height={400} alt={title} />
        ) : (
          <div className='h-full flex justify-center items-center text-xl'>
            {title}
          </div>
        )}
        {/* Cover */}
        {inspecting && (
          <div
            className={`atomic-atom-cover ${isSelected ? 'atomic-atom' : ''}`}
            onClick={() => setComponent(component)}
          />
        )}
      </label>
    </div>
  )
}
