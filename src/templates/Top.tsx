import {
  PropsSkillRadarChartGrid,
  SkillRadarChartGrid,
} from '../molecules/SkillRadarChartsGrid'

export const Top = ({ genres }: PropsSkillRadarChartGrid) => {
  return (
    <div className='w-full'>
      <div className='scale-[0.8]'>
        <SkillRadarChartGrid genres={genres} />
      </div>
    </div>
  )
}
