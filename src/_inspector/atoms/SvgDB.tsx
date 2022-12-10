import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
} from '../../../domain/model/Inspector/@types'

export const SvgDB = ({ width, height }: { width: number; height: number }) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'SvgDB',
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
        <path d='M22.0045 0C11.9959 0 3.88184 2.95776 3.88184 6.60812V12.0305C3.88184 15.6813 11.9959 18.6381 22.0045 18.6381C32.0127 18.6381 40.1268 15.6808 40.1268 12.0305V6.60812C40.1268 2.95776 32.0127 0 22.0045 0Z' />
        <path d='M22.0045 21.798C12.4488 21.798 4.57068 19.0998 3.88179 15.6785C3.84894 15.8418 3.88179 24.6332 3.88179 24.6332C3.88179 28.2845 11.9959 31.2413 22.0045 31.2413C32.0127 31.2413 40.1267 28.2835 40.1267 24.6332C40.1267 24.6332 40.1471 15.8413 40.1147 15.6785C39.4249 19.1003 31.5597 21.798 22.0045 21.798Z' />
        <path d='M40.1096 28.4368C39.4211 31.8563 31.5601 34.5559 22.0044 34.5559C12.4487 34.5559 4.56878 31.8558 3.87988 28.4368L3.88173 37.3919C3.88173 41.0428 11.9958 43.9996 22.0044 43.9996C32.0126 43.9996 40.1267 41.0418 40.1267 37.3919L40.1096 28.4368Z' />
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
