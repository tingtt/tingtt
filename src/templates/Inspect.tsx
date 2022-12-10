import { PropsDarkMode } from '../../domain/model/Theme/@types'
import { PropsToggleInspect, ToggleInspect } from '../atoms/ToggleInspect'
import { AtomicInspectLabelListToast } from '../molecules/AtomicInspectLabelListToast'
import {
  InspectFileTree,
  PropsInspectFileTree,
} from '../organisms/InspectFileTree'
import { ProductCardProps } from '../_inspector/atoms/ProductCard'
import { PropsSkillRadarChartGrid } from '../_inspector/molecules/SkillRadarChartsGrid'
import { Top } from '../_inspector/templates/Top'

export const Inspect = ({
  files,
  genres,
  isDarkMode,
  products,
  inspecting,
  setInspecting,
}: PropsInspectFileTree &
  PropsSkillRadarChartGrid &
  PropsDarkMode & {
    products: ({ modalContent: React.ReactNode } & ProductCardProps)[]
  } & PropsToggleInspect) => {
  return (
    <div className='flex'>
      {/* file tree */}
      <div className='h-screen overflow-y-scroll w-1/5 border-r'>
        <InspectFileTree files={files} />
      </div>
      {/* main */}
      <div className='h-screen overflow-y-scroll overflow-x-hidden'>
        <Top genres={genres} isDarkMode={isDarkMode} products={products} />
      </div>
      <div className='toast toast-top z-[1000] flex-row-reverse'>
        <ToggleInspect inspecting={inspecting} setInspecting={setInspecting} />
        {inspecting && <AtomicInspectLabelListToast />}
      </div>
    </div>
  )
}
