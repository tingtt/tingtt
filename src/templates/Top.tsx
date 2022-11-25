import { PropsDarkMode } from '../../domain/model/Theme/@types'
import {
  PropsSkillRadarChartGrid,
  SkillRadarChartGrid,
} from '../molecules/SkillRadarChartsGrid'

export const Top = ({
  genres,
  isDarkMode,
}: PropsSkillRadarChartGrid & PropsDarkMode) => {
  return (
    <div className='w-full'>
      <div className='scale-[0.8]'>
        <SkillRadarChartGrid genres={genres} isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}
