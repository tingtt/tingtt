import { BugRoat } from '../atoms/BugRoad'
import { HeroCaption } from '../atoms/HeroCaption'

export const HeroLogoCaption = () => {
  return (
    <div className='flex items-center gap-8 sm:gap-16 pr-16'>
      <div className='flex items-center h-0 overflow-visible'>
        <div className='scale-[0.6] sm:scale-100 sm:w-auto rotate-45'>
          <BugRoat />
        </div>
      </div>
      <div className='z-10 xl:min-w-[400px]'>
        <HeroCaption />
      </div>
    </div>
  )
}
