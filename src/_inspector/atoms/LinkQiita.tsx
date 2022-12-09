import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { IconQiita } from './IconQiita'
import { LinkExternal } from './LinkExternal'

export const LinkQiita = ({ inspecting }: PropsInspecting) => (
  <LinkExternal href='https://qiita.com/tingtt' inspecting={inspecting}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <IconQiita width={24} height={24} inspecting={inspecting} />
      Qiita
    </div>
  </LinkExternal>
)
