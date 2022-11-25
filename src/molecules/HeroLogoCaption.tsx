import { BugRoad } from '../atoms/BugRoad'
import { HeroCaption } from '../atoms/HeroCaption'
import { HeroCaptionSub } from '../atoms/HeroCaptionSub'

export const HeroLogoCaption = () => {
  return (
    <div className='flex items-center gap-8 sm:gap-16 pr-16 w-full max-w-full'>
      <div className='flex items-center w-8 sm:w-auto h-0 overflow-visible'>
        <div className='scale-[0.6] sm:scale-[0.7] lg:scale-100 rotate-45'>
          <BugRoad />
        </div>
      </div>
      <div className='z-10'>
        <div className='xl:min-w-[400px] translate-x-10 sm:translate-x-0'>
          <HeroCaption />
        </div>
        <div className='absolute py-6 pt-28 sm:pt-6'>
          <HeroCaptionSub />
        </div>
      </div>
    </div>
  )
}
