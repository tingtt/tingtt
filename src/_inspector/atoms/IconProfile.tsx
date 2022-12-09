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
export const IconProfile = ({
  width,
  height,
  inspecting,
}: {
  width: number
  height: number
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'IconProfile', level: ATOMIC_LEVEL_ATOM }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative'>
      <Image
        src='/prof_icon.png'
        width={width}
        height={height}
        alt={'prof_icon'}
      />
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
