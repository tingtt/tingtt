import { Link as Scroll } from 'react-scroll'
import { PropsInspecting } from '../../../domain/model/Inspector/@types'

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
  return (
    <div
      className={`relative flex ${
        orientation == 'vertical' ? 'flex-col' : ''
      } gap-8 w-full`}
    >
      {targets.map((t) => {
        return (
          <Scroll
            key={t.id}
            to={inspecting ? '' : t.id}
            smooth={smooth}
            className='relative'
          >
            {t.content}
          </Scroll>
        )
      })}
      {/* Cover */}
      {inspecting && <div className='atomic-molecule-cover' />}
    </div>
  )
}
