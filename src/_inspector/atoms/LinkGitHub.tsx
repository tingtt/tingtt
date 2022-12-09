import { LinkExternal } from './LinkExternal'
import { SvgGitHub } from './SvgGitHub'

export const LinkGitHub = ({
  href,
  title,
}: {
  href?: string
  title?: string
}) => (
  <LinkExternal href={href ?? 'https://github.com/tingtt'}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgGitHub width={24} height={24} />
      {title ?? 'GitHub'}
    </div>
  </LinkExternal>
)
