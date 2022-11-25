import { Genre, Skill } from '../../domain/model/Skills/@types'
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

export const SkillRadarChart = ({
  name,
  color,
  skills,
  isDarkMode,
}: Genre & {
  skills: Skill[]
} & { isDarkMode: boolean }) => {
  return (
    <div key={name} className='w-full max-w-[370px] aspect-[9/8] scale-[0.9]'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={skills}>
          <PolarGrid opacity={0.4} />
          <PolarAngleAxis
            dataKey='name'
            opacity={0.5}
            tick={{
              fill: isDarkMode ? 'white' : 'black',
            }}
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
          <Legend margin={{ top: 10 }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}