import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ORGANISM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import { SectionTitle } from '../atoms/SectionTitle'
import { AboutMeContent } from '../molecules/AboutMeContent'
import { AboutMeLinkList } from '../molecules/AboutMeLinkList'

export const AboutMe = ({ inspecting }: PropsInspecting) => {
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
      <SectionTitle inspecting={inspecting}>About me</SectionTitle>
      <div className='flex flex-col items-center gap-24 xl:gap-16'>
        <AboutMeContent inspecting={inspecting} />
        <AboutMeLinkList inspecting={inspecting} />
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
