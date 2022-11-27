import { HeroLogoCaption } from '../molecules/HeroLogoCaption'
import { Outline, PropsOutline } from '../molecules/Outline'

export const Hero = ({ outline }: { outline: PropsOutline }) => {
  return (
    <div
      className={`
        min-h-screen bg-base-200 lg:p-16 xl:p-48 xl:pr-16 2xl:pr-48
        grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center
      `}
    >
      <div className='lg:justify-self-start'>
        <HeroLogoCaption />
      </div>
      <div className='w-full min-w-[300px] max-w-[300px] sm:max-w-[360px] lg:max-w-[300px] xl:max-w-[360px] flex lg:justify-self-end'>
        <Outline {...outline} />
      </div>
    </div>
  )
}
