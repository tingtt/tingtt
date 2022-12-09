import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const HeroCaption = ({ inspecting }: PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'HeroCaption', level: ATOMIC_LEVEL_ATOM }
  const isSelected = useComponentSelected(component)

  return (
    <h1 className='relative text-3xl md:text-5xl font-bold whitespace-nowrap'>
      Takuto Fujishima
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-atom-cover ${isSelected ? 'atomic-atom' : ''}`}
          onClick={() => setComponent(component)}
        />
      )}
    </h1>
  )
}
