import { PropsDarkMode } from '../../../domain/model/Theme/@types'
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
    <div
      className={`
        relative
        min-h-screen flex flex-col items-center justify-center gap-16
        py-36 xsm:py-12 px-8 sm:px-16 lg:px-20
        bg-base-200 bark:bg-base-300
      `}
    >
      <SectionTitle>Skills</SectionTitle>
      <div className='min-h-[260px] w-full'>
        <SkillRadarChartGrid genres={genres} isDarkMode={isDarkMode} />
      </div>
      {/* Cover */}
      <div className='atomic-organism-cover' />
    </div>
  )
}
