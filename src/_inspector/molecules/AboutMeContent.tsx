import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { AboutMeText } from '../atoms/AboutMeText'
import { IconProfile } from '../atoms/IconProfile'

export const AboutMeContent = ({ inspecting }: PropsInspecting) => (
  <div className='relative flex flex-wrap justify-center items-center gap-16'>
    <IconProfile width={200} height={200} inspecting={inspecting} />
    <div className='min-w-[100px] max-w-[600px]'>
      <AboutMeText inspecting={inspecting} />
    </div>
    {/* Cover */}
    {inspecting && <div className='atomic-molecule-cover' />}
  </div>
)
