import { PropsDarkMode } from '../../domain/model/Theme/@types'
import { PropsGenreSkillBarChart } from '../atoms/GenreSkillBarChart'
import {
  PropsSkillRadarChartGrid,
  SkillRadarChartGrid,
} from '../molecules/SkillRadarChartsGrid'
import { Hero } from '../organisms/Hero'

export const Top = ({
  genres,
  genreSkills,
  isDarkMode,
}: PropsSkillRadarChartGrid & PropsGenreSkillBarChart & PropsDarkMode) => {
  return (
    <div className=''>
      <Hero genreSkills={genreSkills} isDarkMode={isDarkMode} />
      <div className='scale-[0.8]'>
        <SkillRadarChartGrid genres={genres} isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}
