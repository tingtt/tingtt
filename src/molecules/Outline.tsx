import { Link as Scroll } from 'react-scroll'

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
}: PropsOutline) => {
  return (
    <div
      className={`flex ${
        orientation == 'vertical' ? 'flex-col' : ''
      } gap-8 w-full`}
    >
      {targets.map((t) => {
        return (
          <Scroll key={t.id} to={t.id} smooth={smooth} href={`#${t.id}`}>
            {t.content}
          </Scroll>
        )
      })}
    </div>
  )
}
