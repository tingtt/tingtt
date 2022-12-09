import ReactMarkdown from 'react-markdown'
import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const Markdown = ({
  children,
  inspecting,
}: { children: string } & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'Markdown',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative'>
      <ReactMarkdown className='prose text-base-content'>
        {children}
      </ReactMarkdown>
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
