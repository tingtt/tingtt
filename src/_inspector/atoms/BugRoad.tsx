import { SvgBug } from './SvgBug'

export const BugRoad = () => {
  return (
    <div className='relative flex items-center bg-[#93E1E1] h-[1400px] md:h-[1600px] lg:h-[2000px] xl:h-[2000px] 2xl:h-[3000px] p-4'>
      {/* Bug icon */}
      <SvgBug />
      {/* Cover */}
      <div className='atomic-atom-cover' />
    </div>
  )
}
