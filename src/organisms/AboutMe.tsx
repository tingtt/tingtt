import { SectionTitle } from '../atoms/SectionTitle'
import { AboutMeContent } from '../molecules/AboutMeContent'

export const AboutMe = () => (
  <div className='min-h-screen flex flex-col items-center justify-center gap-16 p-8 sm:p-16'>
    <SectionTitle>About me</SectionTitle>
    <AboutMeContent />
  </div>
)
