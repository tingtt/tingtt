import { LinkExternal } from './LinkExternal'
import { SvgDocs } from '../assets/SvgDocs'

export const LinkDocs = ({ href, title }: { href: string; title: string }) => (
  <LinkExternal href={href}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgDocs width={24} height={20} />
      {title}
    </div>
  </LinkExternal>
)
