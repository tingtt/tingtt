import React from 'react'
import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_TEMPLATE,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import { PropsDarkMode } from '../../../domain/model/Theme/@types'
import { ChatBubbleWelcome } from '../atoms/ChatBubbleWelcome'
import { OutlineContent } from '../atoms/OutlineContent'
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

  const [_, setComponent] = useComponent()
  const component: Component = { name: 'Top', level: ATOMIC_LEVEL_TEMPLATE }
  const isSelected = useComponentSelected(component)

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
                <OutlineContent
                  name={s.name}
                  subText={s.sub}
                  inspecting={inspecting}
                />
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
          <label htmlFor={p.id} className='modal cursor-pointer left-[20%]'>
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
      {inspecting && (
        <div
          className={`atomic-template-cover ${
            isSelected ? 'atomic-template' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
