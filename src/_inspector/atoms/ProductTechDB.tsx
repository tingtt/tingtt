import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
} from '../../../domain/model/Inspector/@types'
import { SvgDB } from './SvgDB'

export const ProductTechDB = ({ name }: { name: string }) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductTechDB',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex gap-2'>
      <SvgDB width={24} height={24} />
      {name}
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
