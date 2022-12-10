import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ORGANISM,
  Component,
} from '../../../domain/model/Inspector/@types'
import { HeroLogoCaption } from '../molecules/HeroLogoCaption'
import { Outline, PropsOutline } from '../molecules/Outline'

export const Hero = ({ outline }: { outline: PropsOutline }) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = { name: 'Hero', level: ATOMIC_LEVEL_ORGANISM }
  const isSelected = useComponentSelected(component)

  return (
    <div
      className={`
        relative
        min-h-screen bg-base-200 bark:bg-base-300 px-[6%] 2xl:px-[10%] 3xl:px-[12%]
        grid grid-cols-1 xl:grid-cols-2 items-center justify-items-center
      `}
    >
      <div className='xl:justify-self-start'>
        <HeroLogoCaption />
      </div>
      <div className='w-full min-w-[300px] max-w-[300px] md:max-w-[360px] xl:max-w-[300px] 2xl:max-w-[360px] flex xl:justify-self-end'>
        <Outline {...outline} />
      </div>
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-organism-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
