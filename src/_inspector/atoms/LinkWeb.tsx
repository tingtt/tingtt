import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { LinkExternal } from './LinkExternal'
import { SvgWeb } from './SvgWeb'

export const LinkWeb = ({
  href,
  title,
  inspecting,
}: {
  href: string
  title: string
} & PropsInspecting) => (
  <LinkExternal href={href} inspecting={inspecting}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgWeb width={24} height={21} inspecting={inspecting} />
      {title}
    </div>
  </LinkExternal>
)
