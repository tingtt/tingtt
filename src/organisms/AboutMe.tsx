import { SectionTitle } from '../atoms/SectionTitle'
import { AboutMeContent } from '../molecules/AboutMeContent'
import { AboutMeLinkList } from '../molecules/AboutMeLinkList'

export const AboutMe = () => (
  <div
    className={`
      min-h-screen flex flex-col items-center justify-center gap-16
      py-36 xsm:py-12 px-8 sm:px-16 lg:px-20
    `}
  >
    <SectionTitle>About me</SectionTitle>
    <div className='flex flex-col items-center gap-24 lg:gap-16'>
      <AboutMeContent />
      <AboutMeLinkList />
    </div>
  </div>
)
