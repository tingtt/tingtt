import { SectionTitle } from '../atoms/SectionTitle'
import { AboutMeContent } from '../molecules/AboutMeContent'
import { LinkList } from '../molecules/LinkList'

export const AboutMe = () => (
  <div className='min-h-screen flex flex-col items-center justify-center gap-16 p-8 sm:p-16'>
    <SectionTitle>About me</SectionTitle>
    <div className='flex flex-col items-center gap-24 lg:gap-16'>
      <AboutMeContent />
      <LinkList />
    </div>
  </div>
)
