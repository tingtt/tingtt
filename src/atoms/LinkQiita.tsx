import { IconQiita } from './IconQiita'
import { LinkExternal } from './LinkExternal'

export const LinkQiita = () => (
  <LinkExternal href='https://qiita.com/tingtt'>
    <div className='flex items-center gap-2 link link-hover whitespace-wrap'>
      <IconQiita width={24} height={24} />
      Qiita
    </div>
  </LinkExternal>
)
