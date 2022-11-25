import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from 'recharts'
import { GenreSkill } from '../../domain/model/Skills/@types'
import { PropsDarkMode } from '../../domain/model/Theme/@types'

export type PropsGenreSkillBarChart = {
  genreSkills: GenreSkill[]
}

export const GenreSkillBarChart = ({
  genreSkills,
  isDarkMode = false,
}: PropsGenreSkillBarChart & PropsDarkMode) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart width={730} height={250} data={genreSkills} layout='vertical'>
        <YAxis
          dataKey='name'
          type='category'
          opacity={0.6}
          orientation='right'
          axisLine={false}
          tickLine={false}
          fontSize={18}
          width={112}
          tick={{
            fill: isDarkMode ? 'white' : 'black',
          }}
        />
        <XAxis dataKey='level' type='number' reversed hide />
        <Bar dataKey='level' fill='#8884d8' barSize={16} radius={20}>
          {genreSkills.map((d) => {
            return <Cell key={d.name} fill={d.color} />
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
