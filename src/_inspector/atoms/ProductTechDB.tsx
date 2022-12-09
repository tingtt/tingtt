import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { SvgDB } from './SvgDB'

export const ProductTechDB = ({
  name,
  inspecting,
}: { name: string } & PropsInspecting) => (
  <div className='relative flex gap-2'>
    <SvgDB width={24} height={24} inspecting={inspecting} />
    {name}
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
