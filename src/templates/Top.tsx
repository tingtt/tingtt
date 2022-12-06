import React from 'react'
import { PropsDarkMode } from '../../domain/model/Theme/@types'
import { ChatBubbleWelcome } from '../atoms/ChatBubbleWelcome'
import { ProductCardProps } from '../atoms/ProductCard'
import { PropsSkillRadarChartGrid } from '../molecules/SkillRadarChartsGrid'
import { AboutMe } from '../organisms/AboutMe'
import { Hero } from '../organisms/Hero'
import { Products } from '../organisms/Products'
import { Skills } from '../organisms/Skills'

export const Top = ({
  genres,
  isDarkMode,
  products,
}: PropsSkillRadarChartGrid &
  PropsDarkMode & {
    products: ({ modalContent: React.ReactNode } & ProductCardProps)[]
  }) => {
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
      <div id={sectionIds[2].id}>
        <Products products={products} />
      </div>
      {/* Toast */}
      <div className='toast toast-bottom toast-end chat chat-end p-8'>
        <div className='opacity-0 animate-[toast-pop_0.25s_ease-out_1s_forwards,toast-push_0.25s_ease-in_5s_forwards]'>
          <ChatBubbleWelcome />
        </div>
      </div>
      {products.map((p) => (
        <div key={p.id}>
          <input type='checkbox' id={p.id} className='modal-toggle' />
          <label htmlFor={p.id} className='modal cursor-pointer'>
            <label
              className={`
                modal-box max-w-[90%] relative rounded-lg
                dark:border dark:border-base-content
              `}
              htmlFor=''
            >
              {p.modalContent}
            </label>
          </label>
        </div>
      ))}
    </div>
  )
}
