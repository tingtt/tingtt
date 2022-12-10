import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
} from '../../../domain/model/Inspector/@types'
import { Genre, Skill } from '../../../domain/model/Skills/@types'
import { PropsDarkMode } from '../../../domain/model/Theme/@types'
import { SkillRadarChart } from '../atoms/SkillRadarChart'

export type PropsSkillRadarChartGrid = {
  genres: { genre: Genre; skills: Skill[] }[]
}

export const SkillRadarChartGrid = ({
  genres,
  isDarkMode,
}: PropsSkillRadarChartGrid & PropsDarkMode) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'SkillRadarChartsGrid',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative grid gap-12 lg:grid-cols-2 2xl:grid-cols-4 justify-items-center'>
      {genres.map(({ genre, skills }) => (
        <SkillRadarChart
          key={genre.name}
          {...genre}
          skills={skills}
          isDarkMode={isDarkMode ?? false}
        />
      ))}
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-molecule-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
