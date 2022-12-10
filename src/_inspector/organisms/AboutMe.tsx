import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ORGANISM,
  Component,
} from '../../../domain/model/Inspector/@types'
import { SectionTitle } from '../atoms/SectionTitle'
import { AboutMeContent } from '../molecules/AboutMeContent'
import { AboutMeLinkList } from '../molecules/AboutMeLinkList'

export const AboutMe = () => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'AboutMe', level: ATOMIC_LEVEL_ORGANISM }
  const isSelected = useComponentSelected(component)

  return (
    <div
      className={`
      relative
      min-h-screen flex flex-col items-center justify-center gap-16
      py-36 smm:py-12 px-8 md:px-16 xl:px-20
    `}
    >
      <SectionTitle>About me</SectionTitle>
      <div className='flex flex-col items-center gap-24 xl:gap-16'>
        <AboutMeContent />
        <AboutMeLinkList />
      </div>
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-organism-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
