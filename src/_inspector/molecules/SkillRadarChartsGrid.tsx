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
  return (
    <div className='relative grid gap-12 md:grid-cols-2 xl:grid-cols-4 justify-items-center'>
      {genres.map(({ genre, skills }) => (
        <SkillRadarChart
          key={genre.name}
          {...genre}
          skills={skills}
          isDarkMode={isDarkMode ?? false}
        />
      ))}
      {/* Cover */}
      <div className='atomic-molecule-cover' />
    </div>
  )
}
