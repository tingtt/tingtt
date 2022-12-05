import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getProducts } from '../../application/Products'
import { getSkillsGroupedByGenre } from '../../application/Skills'
import { Product } from '../../domain/model/Products/@types'
import { PropsSkillRadarChartGrid } from '../molecules/SkillRadarChartsGrid'
import { ProductModal } from '../organisms/ProductModal'
import { Top } from '../templates/Top'

type Props = PropsSkillRadarChartGrid & { products: Product[] }

const Home: NextPage<Props> = ({ genres, products }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [hooks, setHooks] = useState<any>([])
  useEffect(() => {
    // UI theme
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // add hook to detect prefers-color-scheme changes
    setHooks(() => [window])
  }, [hooks])

  return (
    <Top
      genres={genres}
      isDarkMode={isDarkMode}
      products={products.map((p) => {
        return {
          id: p.id,
          title: p.title,
          modalContent: (
            <ProductModal
              id={p.id}
              title={p.title}
              description={p.description}
              links={p.links}
              images={p.images}
              techs={p.techs}
            />
          ),
        }
      })}
    />
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const [genres, err1] = getSkillsGroupedByGenre()
  if (err1 != null) {
    throw err1
  }

  const [products, err2] = getProducts()
  if (err2 != null) {
    throw err2
  }

  return {
    props: { genres, products },
  }
}

export default Home
