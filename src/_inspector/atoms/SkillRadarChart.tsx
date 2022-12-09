import { Genre, Skill } from '../../../domain/model/Skills/@types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { PropsDarkMode } from '../../../domain/model/Theme/@types'
import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const SkillRadarChart = ({
  name,
  color,
  skills,
  isDarkMode,
  inspecting,
}: Genre & {
  skills: Skill[]
} & PropsDarkMode &
  PropsInspecting) => {
  return (
    <div key={name} className='relative w-full max-w-[370px] aspect-[9/7]'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={skills}>
          <PolarGrid opacity={0.4} />
          <PolarAngleAxis
            dataKey='name'
            opacity={0.5}
            tick={{
              fill: isDarkMode ? 'white' : 'black',
            }}
            fontSize={13}
          />
          <PolarRadiusAxis
            angle={0}
            domain={[0, 5]}
            scale={'pow'}
            opacity={0.4}
          />
          <Radar
            name={name}
            dataKey='level'
            stroke={color}
            fill={color}
            fillOpacity={0.2}
          />
          <Legend height={4} />
        </RadarChart>
      </ResponsiveContainer>
      {/* Cover */}
      {inspecting && <div className='atomic-atom-cover' />}
    </div>
  )
}
