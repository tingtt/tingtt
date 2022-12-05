import ReactMarkdown from 'react-markdown'

export const Markdown = ({ children }: { children: string }) => (
  <ReactMarkdown className='prose text-base-content'>{children}</ReactMarkdown>
)
