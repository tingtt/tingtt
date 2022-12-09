import {
  useComponent,
  useComponentSelected,
} from '../../domain/model/Inspector'
import { Component } from '../../domain/model/Inspector/@types'
import { SvgReact } from './SvgReact'

export const FileReact = ({ file }: { file: Component }) => {
  const selected = useComponentSelected(file)
  const [, setComponent] = useComponent()

  return (
    <div
      className={`
        flex items-center gap-1 p-3 hover:bg-base-200 rounded
        ${selected ? 'bg-base-300/90' : ''}
      `}
      onClick={() => setComponent(file)}
    >
      <SvgReact width={20} height={20} />
      {file.name}
    </div>
  )
}
