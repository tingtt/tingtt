import { useEffect, useState } from 'react'
import { Genre, Skill } from '../../domain/model/Skills/@types'
import { SkillRadarChart } from '../atoms/SkillRadarChart'

export type PropsSkillRadarChartGrid = {
  genres: { genre: Genre; skills: Skill[] }[]
}

export const SkillRadarChartGrid = ({ genres }: PropsSkillRadarChartGrid) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [hooks, setHooks] = useState<any>([])
  useEffect(() => {
    // UI theme
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // add hook to detect prefers-color-scheme changes
    setHooks(() => [window])
  }, [hooks])

  return (
    <div className='w-full grid md:grid-cols-2 xl:grid-cols-4 justify-items-center'>
      {genres.map(({ genre, skills }) => (
        <SkillRadarChart
          key={genre.name}
          {...genre}
          skills={skills}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  )
}
