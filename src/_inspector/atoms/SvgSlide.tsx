import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const SvgSlide = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'SvgSlide',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative'>
      <svg
        width={width}
        height={height}
        viewBox='0 0 44 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-[#1B1817] dark:fill-[white]'
      >
        <path d='M39.1111 2H4.88889C2.17556 2 0 4.24297 0 6.98437V36.8906C0 39.632 2.17556 41.875 4.88889 41.875H39.1111C41.8 41.875 44 39.632 44 36.8906V6.98437C44 4.24297 41.8244 2 39.1111 2ZM39.1111 36.8906H4.88889V11.9687H39.1111V36.8906Z' />
        <path d='M4.88889 41.875L39.1111 41.875C41.8244 41.875 44 39.632 44 36.8906L44 6.98438C44 4.24297 41.8244 2 39.1111 2L4.88889 2C2.2 2 3.2899e-06 4.24297 3.05024e-06 6.98437L4.35748e-07 36.8906C1.96087e-07 39.632 2.17556 41.875 4.88889 41.875ZM4.88889 6.98437L39.1111 6.98438L39.1111 31.9063L4.88889 31.9062L4.88889 6.98437Z' />
      </svg>
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-atom-cover ${isSelected ? 'atomic-atom' : ''}`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
