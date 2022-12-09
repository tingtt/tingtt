import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getProducts } from '../../application/Products'
import { getSkillsGroupedByGenre } from '../../application/Skills'
import { COMPONENTS } from '../../data/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  ATOMIC_LEVEL_MOLECULE,
  ATOMIC_LEVEL_ORGANISM,
  ATOMIC_LEVEL_PAGE,
} from '../../domain/model/Inspector/@types'
import { Product } from '../../domain/model/Products/@types'
import { Inspect } from '../templates/Inspect'
import { PropsSkillRadarChartGrid } from '../_inspector/molecules/SkillRadarChartsGrid'
import { ProductModal } from '../_inspector/organisms/ProductModal'

type Props = PropsSkillRadarChartGrid & { products: Product[] }

const Home: NextPage<Props> = ({ genres, products }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [inspecting, setInspecting] = useState(true)

  const [hooks, setHooks] = useState<any>([])
  useEffect(() => {
    // UI theme
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    // add hook to detect prefers-color-scheme changes
    setHooks(() => [window])
  }, [hooks])

  return (
    <Inspect
      files={{
        pages: COMPONENTS.filter((c) => c.level == ATOMIC_LEVEL_PAGE),
        templates: COMPONENTS.filter((c) => c.level == ATOMIC_LEVEL_MOLECULE),
        organisms: COMPONENTS.filter((c) => c.level == ATOMIC_LEVEL_ORGANISM),
        molecules: COMPONENTS.filter((c) => c.level == ATOMIC_LEVEL_MOLECULE),
        atoms: COMPONENTS.filter((c) => c.level == ATOMIC_LEVEL_ATOM),
      }}
      selected={{
        name: '',
        level: {
          name: 'atom',
          color: 'cyan-500',
        },
      }}
      genres={genres}
      isDarkMode={isDarkMode}
      products={products.map((p) => {
        return {
          id: p.id,
          title: p.title,
          thumbnail: p.thumbnail,
          modalContent: (
            <ProductModal
              id={p.id}
              title={p.title}
              description={p.description}
              links={p.links}
              images={p.images}
              techs={p.techs}
              inspecting={inspecting}
            />
          ),
        }
      })}
      inspecting={inspecting}
      setInspecting={setInspecting}
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
