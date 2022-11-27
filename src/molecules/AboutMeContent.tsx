import { AboutMeText } from '../atoms/AboutMeText'
import { IconProfile } from '../atoms/IconProfile'

export const AboutMeContent = () => (
  <div className='flex flex-wrap justify-center items-center gap-16'>
    <IconProfile width={200} height={200} />
    <div className='min-w-[100px] max-w-[600px]'>
      <AboutMeText />
    </div>
  </div>
)
