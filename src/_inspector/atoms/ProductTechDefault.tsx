import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { SvgTag } from './SvgTag'

export const ProductTechDefault = ({
  name,
  inspecting,
}: { name: string } & PropsInspecting) => (
  <div className='relative flex gap-2'>
    <SvgTag width={24} height={24} inspecting={inspecting} />
    {name}
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
