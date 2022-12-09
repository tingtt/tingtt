import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { SvgCode } from './SvgCode'

export const ProductTechPGLanguage = ({
  name,
  inspecting,
}: {
  name: string
} & PropsInspecting) => (
  <div className='relative flex gap-2'>
    <SvgCode width={24} height={24} inspecting={inspecting} />
    {name}
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
