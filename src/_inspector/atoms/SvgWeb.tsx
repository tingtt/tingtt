import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const SvgWeb = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'SvgWeb',
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
        <path d='M39.1111 2.0625H4.88889C2.17556 2.0625 0 4.30547 0 7.04687V36.9531C0 39.6945 2.17556 41.9375 4.88889 41.9375H39.1111C41.8 41.9375 44 39.6945 44 36.9531V7.04687C44 4.30547 41.8244 2.0625 39.1111 2.0625ZM39.1111 36.9531H4.88889V12.0312H39.1111V36.9531Z' />
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
