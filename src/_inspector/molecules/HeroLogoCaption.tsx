import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { BugRoad } from '../atoms/BugRoad'
import { HeroCaption } from '../atoms/HeroCaption'
import { HeroCaptionSub } from '../atoms/HeroCaptionSub'

export const HeroLogoCaption = ({ inspecting }: PropsInspecting) => {
  return (
    <div className='relative flex items-center gap-8 md:gap-16 pr-16 w-full max-w-full'>
      <div className='flex items-center w-8 md:w-auto h-0 overflow-visible'>
        <div className='scale-[0.5] md:scale-[0.7] xl:scale-[0.8] 2xl:scale-[0.9] 3xl:scale-100 rotate-45'>
          <BugRoad inspecting={inspecting} />
        </div>
      </div>
      <div className='z-10'>
        <div className='2xl:min-w-[400px] translate-x-10 md:translate-x-0'>
          <HeroCaption inspecting={inspecting} />
        </div>
        <div className='absolute py-6 md:py-8 chat chat-start'>
          <div
            className={`
              chat-bubble chat-bubble-accent opacity-70
              max-w-none text-sm md:text-base xl:text-lg
              before:-scale-y-100 before:top-0
              !rounded-tl-none !rounded-bl-[4px] dark:!rounded-bl-none
            `}
          >
            <HeroCaptionSub inspecting={inspecting} />
          </div>
        </div>
      </div>
      {/* Cover */}
      {inspecting && <div className='atomic-molecule-cover' />}
    </div>
  )
}
