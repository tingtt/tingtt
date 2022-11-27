import { PropsDarkMode } from '../../domain/model/Theme/@types'
import {
  PropsSkillRadarChartGrid,
  SkillRadarChartGrid,
} from '../molecules/SkillRadarChartsGrid'
import { AboutMe } from '../organisms/AboutMe'
import { Hero } from '../organisms/Hero'
import { Skills } from '../organisms/Skills'

export const Top = ({
  genres,
  isDarkMode,
}: PropsSkillRadarChartGrid & PropsDarkMode) => {
  const sectionIds = [
    { id: 'section-about-me', name: 'About me', sub: '私について' },
    { id: 'section-skills', name: 'Skills', sub: 'スキル' },
    { id: 'section-products', name: 'Products', sub: '製作物' },
  ]
  Object.freeze(sectionIds)

  return (
    <div>
      {/* Hero */}
      <Hero
        outline={{
          orientation: 'vertical',
          targets: sectionIds.map((s) => {
            return {
              id: s.id,
              content: (
                <div
                  key={s.id}
                  className='flex items-center gap-4 link link-hover'
                >
                  <div className='text-2xl sm:text-3xl xl:text-4xl whitespace-nowrap'>
                    {s.name}
                  </div>
                  <div className='divider w-full' />
                  <div className='whitespace-nowrap text-sm sm:text-base'>
                    {s.sub}
                  </div>
                </div>
              ),
            }
          }),
          smooth: true,
        }}
      />
      {/* About me */}
      <div id={sectionIds[0].id}>
        <AboutMe />
      </div>
      {/* Skills */}
      <div id={sectionIds[1].id}>
        <Skills genres={genres} isDarkMode={isDarkMode} />
      </div>
      {/* Products */}
      <div
        id={sectionIds[2].id}
        className='min-h-screen flex flex-col items-center justify-center gap-16 py-16'
      >
        <div className='text-6xl'>Products</div>
      </div>
    </div>
  )
}
