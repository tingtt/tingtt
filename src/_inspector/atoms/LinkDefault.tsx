import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { LinkExternal } from './LinkExternal'
import { SvgDefault } from './SvgDefault'

export const LinkDefault = ({
  href,
  title,
  inspecting,
}: {
  href: string
  title: string
} & PropsInspecting) => (
  <LinkExternal href={href} inspecting={inspecting}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgDefault width={24} height={24} inspecting={inspecting} />
      {title}
    </div>
  </LinkExternal>
)
