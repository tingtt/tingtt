import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import {
  getSkillsAggregatedByGenre,
  getSkillsGroupedByGenre,
} from '../../application/Skills'
import { PropsGenreSkillBarChart } from '../atoms/GenreSkillBarChart'
import { PropsSkillRadarChartGrid } from '../molecules/SkillRadarChartsGrid'
import { Top } from '../templates/Top'

type Props = PropsSkillRadarChartGrid & PropsGenreSkillBarChart

const Home: NextPage<Props> = ({ genres, genreSkills }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [hooks, setHooks] = useState<any>([])
  useEffect(() => {
    // UI theme
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // add hook to detect prefers-color-scheme changes
    setHooks(() => [window])
  }, [hooks])

  return (
    <Top genres={genres} genreSkills={genreSkills} isDarkMode={isDarkMode} />
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const [genres, err] = getSkillsGroupedByGenre()
  if (err != null) {
    throw err
  }

  const [genreSkills, err1] = getSkillsAggregatedByGenre()
  if (err1 != null) {
    throw err
  }

  return {
    props: { genres, genreSkills },
  }
}

export default Home
