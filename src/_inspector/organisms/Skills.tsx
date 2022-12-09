import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ORGANISM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import { PropsDarkMode } from '../../../domain/model/Theme/@types'
import { SectionTitle } from '../atoms/SectionTitle'
import {
  PropsSkillRadarChartGrid,
  SkillRadarChartGrid,
} from '../molecules/SkillRadarChartsGrid'

export const Skills = ({
  genres,
  isDarkMode,
  inspecting,
}: PropsSkillRadarChartGrid & PropsDarkMode & PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'Skills', level: ATOMIC_LEVEL_ORGANISM }
  const isSelected = useComponentSelected(component)

  return (
    <div
      className={`
        relative
        min-h-screen flex flex-col items-center justify-center gap-16
        py-36 smm:py-12 px-8 md:px-16 xl:px-20
        bg-base-200 bark:bg-base-300
      `}
    >
      <SectionTitle inspecting={inspecting}>Skills</SectionTitle>
      <div className='min-h-[260px] w-full'>
        <SkillRadarChartGrid
          genres={genres}
          isDarkMode={isDarkMode}
          inspecting={inspecting}
        />
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
