import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { LinkExternal } from './LinkExternal'
import { SvgSlide } from './SvgSlide'

export const LinkSlide = ({
  href,
  title,
  inspecting,
}: {
  href: string
  title: string
} & PropsInspecting) => (
  <LinkExternal href={href} inspecting={inspecting}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgSlide width={24} height={20} inspecting={inspecting} />
      {title}
    </div>
  </LinkExternal>
)