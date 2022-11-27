import { PropsDarkMode } from '../../domain/model/Theme/@types'
import { SectionTitle } from '../atoms/SectionTitle'
import {
  PropsSkillRadarChartGrid,
  SkillRadarChartGrid,
} from '../molecules/SkillRadarChartsGrid'

export const Skills = ({
  genres,
  isDarkMode,
}: PropsSkillRadarChartGrid & PropsDarkMode) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-16 py-36 px-8 sm:px-16 lg:px-20 bg-base-200'>
      <SectionTitle>Skills</SectionTitle>
      <div className='min-h-[260px] w-full'>
        <SkillRadarChartGrid genres={genres} isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}
