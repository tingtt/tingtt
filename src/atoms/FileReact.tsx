import { useComponent } from '../../domain/model/Inspector'
import { Component } from '../../domain/model/Inspector/@types'
import { SvgReact } from './SvgReact'

export const FileReact = ({
  file,
  selected,
  onClick,
}: {
  file: Component
  selected: boolean
  onClick: () => void
}) => {
  const [, setComponent] = useComponent()

  return (
    <div
      className={`
        flex items-center gap-1 p-3 rounded
        ${
          selected
            ? 'bg-base-200 dark:outline -outline-offset-1 outline-base-content/50'
            : 'hover:bg-base-200/50 hover:dark:outline -outline-offset-1 outline-base-content/25'
        }
      `}
      onClick={onClick}
    >
      <SvgReact width={20} height={20} />
      {file.name}
    </div>
  )
}
