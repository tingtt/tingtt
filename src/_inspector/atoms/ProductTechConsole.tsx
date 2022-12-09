import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { SvgConsole } from './SvgConsole'

export const ProductTechConsole = ({
  name,
  inspecting,
}: { name: string } & PropsInspecting) => (
  <div className='relative flex gap-2'>
    <SvgConsole width={24} height={24} inspecting={inspecting} />
    {name}
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </div>
)
