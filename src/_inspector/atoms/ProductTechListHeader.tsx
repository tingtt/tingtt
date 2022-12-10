import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
} from '../../../domain/model/Inspector/@types'

export const ProductTechListHeader = ({ title }: { title?: string }) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductTechListHeader',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex items-center gap-3'>
      <div className='divider w-8' />
      <div className='whitespace-nowrap text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
        {title ?? '関連技術'}
      </div>
      <div className='divider w-full' />
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
