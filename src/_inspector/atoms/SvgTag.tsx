import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const SvgTag = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'SvgTag',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative'>
      <svg
        width={width}
        height={height}
        viewBox='0 0 44 45'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='fill-[#1B1817] dark:fill-[white]'
      >
        <path d='M24.8565 0C24.3744 0 23.941 0.193191 23.6264 0.510282L13.2812 10.8555L0.862636 23.2741C-0.283956 24.4209 -0.289331 26.2632 0.857265 27.41L16.59 43.1427C17.7366 44.289 19.5847 44.289 20.7313 43.1427L33.1499 30.7242L41.4217 22.4469L43.4951 20.3789C43.8097 20.0627 44 19.6256 44 19.1435V1.74032C44 1.25849 43.8097 0.824622 43.4951 0.510282C43.1805 0.194292 42.7418 0 42.2597 0H24.8565ZM34.4444 5.50027C35.5199 5.50046 36.5512 5.92778 37.3117 6.68827C38.0722 7.44876 38.4995 8.48015 38.4997 9.55565C38.4995 10.6311 38.0722 11.6625 37.3117 12.423C36.5512 13.1835 35.5199 13.6108 34.4444 13.611C33.3689 13.6108 32.3375 13.1835 31.577 12.423C30.8165 11.6625 30.3892 10.6311 30.389 9.55565C30.3892 8.48015 30.8165 7.44876 31.577 6.68827C32.3375 5.92778 33.3689 5.50046 34.4444 5.50027Z' />
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
