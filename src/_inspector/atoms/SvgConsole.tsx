import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const SvgConsole = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'SvgConsole', level: ATOMIC_LEVEL_ATOM }
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
        <path d='M0 3H44V40.7143H0V3ZM3.14286 9.28571V37.5714H40.8571V9.28571H3.14286ZM7.07143 14.5238H12.0476L17.0238 21.3333L12.0476 28.1429H7.07143L12.0476 21.3333L7.07143 14.5238Z' />
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
