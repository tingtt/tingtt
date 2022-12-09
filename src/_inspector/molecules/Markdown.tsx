import ReactMarkdown from 'react-markdown'
import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const Markdown = ({
  children,
  inspecting,
}: { children: string } & PropsInspecting) => (
  <div className='relative'>
    <ReactMarkdown className='prose text-base-content'>
      {children}
    </ReactMarkdown>
    {/* Cover */}
    {inspecting && <div className='atomic-molecule-cover' />}
  </div>
)
