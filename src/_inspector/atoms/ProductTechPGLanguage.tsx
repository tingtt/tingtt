import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import { SvgCode } from './SvgCode'

export const ProductTechPGLanguage = ({
  name,
  inspecting,
}: {
  name: string
} & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductTechPGLanguage',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex gap-2'>
      <SvgCode width={24} height={24} inspecting={inspecting} />
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
