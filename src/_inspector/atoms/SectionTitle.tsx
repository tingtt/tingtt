import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
} from '../../../domain/model/Inspector/@types'

export const SectionTitle = ({ children }: { children: string }) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'SectionTitle',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative text-5xl md:text-6xl'>
      {children}
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
