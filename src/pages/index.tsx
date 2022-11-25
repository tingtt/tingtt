import type { NextPage } from 'next'
import { getKillsGroupedByGenre } from '../../application/Skills'
import { PropsSkillRadarChartGrid } from '../molecules/SkillRadarChartsGrid'
import { Top } from '../templates/Top'

type Props = PropsSkillRadarChartGrid

const Home: NextPage<Props> = ({ genres }) => {
  return <Top genres={genres} />
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const [genres, err] = getKillsGroupedByGenre()
  if (err != null) {
    throw err
  }

  return {
    props: { genres },
  }
}

export default Home
