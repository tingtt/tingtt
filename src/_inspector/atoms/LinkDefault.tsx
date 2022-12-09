import { LinkExternal } from './LinkExternal'
import { SvgDefault } from './SvgDefault'

export const LinkDefault = ({
  href,
  title,
}: {
  href: string
  title: string
}) => (
  <LinkExternal href={href}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgDefault width={24} height={24} />
      {title}
    </div>
  </LinkExternal>
)
