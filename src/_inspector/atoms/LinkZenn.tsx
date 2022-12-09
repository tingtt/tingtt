import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { LinkExternal } from './LinkExternal'
import { SvgZenn } from './SvgZenn'

export const LinkZenn = ({ inspecting }: PropsInspecting) => (
  <LinkExternal href='https://zenn.dev/tingtt' inspecting={inspecting}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <SvgZenn width={24} height={24} inspecting={inspecting} />
      Zenn
    </div>
  </LinkExternal>
)
