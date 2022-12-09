import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { SvgBug } from './SvgBug'

export const BugRoad = ({ inspecting }: PropsInspecting) => {
  return (
    <div className='relative flex items-center bg-[#93E1E1] h-[1400px] lg:h-[1600px] xl:h-[2000px] 2xl:h-[2000px] 3xl:h-[3000px] p-4'>
      {/* Bug icon */}
      <SvgBug inspecting={inspecting} />
      {/* Cover */}
      {inspecting && <div className='atomic-atom-cover' />}
    </div>
  )
}
