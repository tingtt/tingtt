import { LinkExternal } from './LinkExternal'
import { SvgGitLab } from './SvgGitLab'

export const LinkGitLab = () => (
  <LinkExternal href='https://gitlab.tingtt.jp/explore'>
    <div className='flex items-center gap-2 link link-hover whitespace-wrap'>
      <SvgGitLab width={24} height={24} />
      GitLab (Self-hosted)
    </div>
  </LinkExternal>
)
