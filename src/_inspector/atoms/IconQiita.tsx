import Image from 'next/image'
import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
} from '../../../domain/model/Inspector/@types'
export const IconQiita = ({
  width,
  height,
}: {
  width: number
  height: number
}) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'IconQiita', level: ATOMIC_LEVEL_ATOM }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative'>
      <Image src='/qiita.png' width={width} height={height} alt={'Qiita'} />
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
