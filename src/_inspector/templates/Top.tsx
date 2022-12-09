import React, { useEffect } from 'react'
import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { PropsDarkMode } from '../../../domain/model/Theme/@types'
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
  inspecting,
}: PropsSkillRadarChartGrid &
  PropsDarkMode & {
    products: ({ modalContent: React.ReactNode } & ProductCardProps)[]
  } & PropsInspecting) => {
  const sectionIds = [
    { id: 'section-about-me', name: 'About me', sub: '私について' },
    { id: 'section-skills', name: 'Skills', sub: 'スキル' },
    { id: 'section-products', name: 'Products', sub: '製作物' },
  ]
  Object.freeze(sectionIds)

  return (
    <div className='relative'>
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
                  className='relative flex items-center gap-4 link link-hover'
                >
                  <div className='text-2xl md:text-3xl 2xl:text-4xl whitespace-nowrap'>
                    {s.name}
                  </div>
                  <div className='divider w-full' />
                  <div className='whitespace-nowrap text-sm md:text-base'>
                    {s.sub}
                  </div>
                  {/* Cover */}
                  {inspecting && <div className='atomic-atom-cover' />}
                </div>
              ),
            }
          }),
          smooth: true,
        }}
        inspecting={inspecting}
      />
      {/* About me */}
      <div id={sectionIds[0].id}>
        <AboutMe inspecting={inspecting} />
      </div>
      {/* Skills */}
      <div id={sectionIds[1].id}>
        <Skills
          genres={genres}
          isDarkMode={isDarkMode}
          inspecting={inspecting}
        />
      </div>
      {/* Products */}
      <div id={sectionIds[2].id}>
        <Products products={products} inspecting={inspecting} />
      </div>
      {/* Toast */}
      <div className='toast toast-bottom toast-end chat chat-end p-8'>
        <div className='opacity-0 animate-[toast-pop_0.25s_ease-out_1s_forwards,toast-push_0.25s_ease-in_5s_forwards]'>
          <ChatBubbleWelcome inspecting={inspecting} />
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
      {/* Cover */}
      {inspecting && <div className='atomic-template-cover' />}
    </div>
  )
}
