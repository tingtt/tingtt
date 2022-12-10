import { Link as Scroll } from 'react-scroll'
import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export type ScrollTarget = {
  id: string
  content: JSX.Element
}
export type PropsOutline = {
  orientation: 'horizontal' | 'vertical'
  targets: ScrollTarget[]
  smooth: boolean
}

export const Outline = ({
  orientation = 'vertical',
  targets,
  smooth = true,
  inspecting,
}: PropsOutline & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'Outline',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div
      className={`relative flex ${
        orientation == 'vertical' ? 'flex-col' : ''
      } gap-8 w-full`}
    >
      {targets.map((t) => {
        return (
          <Scroll key={t.id} to={inspecting ? '' : t.id} smooth={smooth}>
            {t.content}
          </Scroll>
        )
      })}
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-molecule-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
