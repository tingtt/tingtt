import { LinkExternal } from './LinkExternal'
import { SvgGitHub } from './SvgGitHub'

export const LinkGitHub = () => (
  <LinkExternal href='https://github.com/tingtt'>
    <div className='flex items-center gap-2 link link-hover whitespace-wrap'>
      <SvgGitHub width={24} height={24} />
      GitHub
    </div>
  </LinkExternal>
)
