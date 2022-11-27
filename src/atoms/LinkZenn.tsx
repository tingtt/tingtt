import { LinkExternal } from './LinkExternal'
import { SvgZenn } from './SvgZenn'

export const LinkZenn = () => (
  <LinkExternal href='https://zenn.dev/tingtt'>
    <div className='flex items-center gap-2 link link-hover whitespace-wrap'>
      <SvgZenn width={24} height={24} />
      Zenn
    </div>
  </LinkExternal>
)
