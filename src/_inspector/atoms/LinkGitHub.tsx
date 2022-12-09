import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { LinkExternal } from './LinkExternal'
import { SvgGitHub } from './SvgGitHub'

export const LinkGitHub = ({
  href,
  title,
  inspecting,
}: {
  href?: string
  title?: string
} & PropsInspecting) => (
  <LinkExternal
    href={href ?? 'https://github.com/tingtt'}
    inspecting={inspecting}
  >
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgGitHub width={24} height={24} inspecting={inspecting} />
      {title ?? 'GitHub'}
    </div>
  </LinkExternal>
)
