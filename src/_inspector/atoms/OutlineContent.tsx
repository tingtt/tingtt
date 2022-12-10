import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
} from '../../../domain/model/Inspector/@types'

export const OutlineContent = ({
  name,
  subText,
}: {
  name: string
  subText: string
}) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'OutlineContent',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex items-center gap-4 link link-hover'>
      <div className='text-2xl sm:text-3xl xl:text-4xl whitespace-nowrap'>
        {name}
      </div>
      <div className='divider w-full' />
      <div className='whitespace-nowrap text-sm sm:text-base'>{subText}</div>
      {inspecting && (
        <div
          className={`atomic-atom-cover ${isSelected ? 'atomic-atom' : ''}`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
