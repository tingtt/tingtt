import ReactMarkdown from 'react-markdown'

export const Markdown = ({ children }: { children: string }) => (
  <div className='relative'>
    <ReactMarkdown className='prose text-base-content'>
      {children}
    </ReactMarkdown>
    {/* Cover */}
    <div className='atomic-molecule-cover' />
  </div>
)
