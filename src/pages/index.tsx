import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getSkillsGroupedByGenre } from '../../application/Skills'
import { PropsSkillRadarChartGrid } from '../molecules/SkillRadarChartsGrid'
import { Top } from '../templates/Top'

type Props = PropsSkillRadarChartGrid

const Home: NextPage<Props> = ({ genres }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [hooks, setHooks] = useState<any>([])
  useEffect(() => {
    // UI theme
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // add hook to detect prefers-color-scheme changes
    setHooks(() => [window])
  }, [hooks])

  return <Top genres={genres} isDarkMode={isDarkMode} />
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const [genres, err] = getSkillsGroupedByGenre()
  if (err != null) {
    throw err
  }

  return {
    props: { genres },
  }
}

export default Home
