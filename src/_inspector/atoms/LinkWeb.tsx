import { LinkExternal } from './LinkExternal'
import { SvgWeb } from './SvgWeb'

export const LinkWeb = ({ href, title }: { href: string; title: string }) => (
  <LinkExternal href={href}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgWeb width={24} height={21} />
      {title}
    </div>
  </LinkExternal>
)
