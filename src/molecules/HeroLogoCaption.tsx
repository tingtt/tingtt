import { BugRoad } from '../atoms/BugRoad'
import { HeroCaption } from '../atoms/HeroCaption'
import { HeroCaptionSub } from '../atoms/HeroCaptionSub'

export const HeroLogoCaption = () => {
  return (
    <div className='flex items-center gap-8 sm:gap-16 pr-16 w-full max-w-full'>
      <div className='flex items-center w-8 sm:w-auto h-0 overflow-visible'>
        <div className='scale-[0.5] sm:scale-[0.7] lg:scale-100 rotate-45'>
          <BugRoad />
        </div>
      </div>
      <div className='z-10'>
        <div className='xl:min-w-[400px] translate-x-10 sm:translate-x-0'>
          <HeroCaption />
        </div>
        <div className='absolute py-6 sm:py-8 chat chat-start'>
          <div className='chat-bubble chat-bubble-accent max-w-none before:-scale-y-100 before:top-0 text-sm sm:text-base lg:text-lg opacity-70'>
            <HeroCaptionSub />
          </div>
        </div>
      </div>
    </div>
  )
}
