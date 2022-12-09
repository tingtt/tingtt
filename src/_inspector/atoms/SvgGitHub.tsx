import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const SvgGitHub = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'SvgGitHub',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative'>
      <svg
        width={width}
        height={height}
        viewBox='0 0 44 43'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-[#1B1817] dark:fill-[white]'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21.7188 0C9.72396 0 0 9.72396 0 21.7188C0 31.3125 6.22396 39.4531 14.8542 42.3281C15.9375 42.526 16.3333 41.8594 16.3333 41.2812C16.3333 40.7656 16.3177 39.401 16.3073 37.5885C10.2656 38.901 8.98958 34.6771 8.98958 34.6771C8 32.1667 6.57812 31.5 6.57812 31.5C4.60417 30.151 6.72917 30.1771 6.72917 30.1771C8.90625 30.3333 10.0521 32.4167 10.0521 32.4167C11.9896 35.7344 15.1406 34.776 16.375 34.2188C16.5729 32.8177 17.1354 31.8594 17.7552 31.3177C12.9323 30.7708 7.85938 28.9063 7.85938 20.5833C7.85938 18.2135 8.70833 16.276 10.099 14.7552C9.875 14.2031 9.125 12 10.3073 9.00521C10.3073 9.00521 12.1354 8.42187 16.2812 11.2344C18.0156 10.7552 19.875 10.5104 21.7188 10.5C23.5625 10.5104 25.4219 10.7552 27.1562 11.2344C31.3021 8.42187 33.125 9.00521 33.125 9.00521C34.3073 12 33.5625 14.2031 33.3385 14.7552C34.7292 16.276 35.5729 18.2135 35.5729 20.5833C35.5729 28.9271 30.4948 30.7656 25.6562 31.2969C26.4375 31.974 27.1302 33.2969 27.1302 35.3229C27.1302 38.224 27.1042 40.5677 27.1042 41.2812C27.1042 41.8646 27.4948 42.5365 28.599 42.3281C37.2188 39.4479 43.4375 31.3125 43.4375 21.7188C43.4375 9.72396 33.7135 0 21.7188 0Z'
        />
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
