import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  ATOMIC_LEVEL_MOLECULE,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'
import { AboutMeText } from '../atoms/AboutMeText'
import { IconProfile } from '../atoms/IconProfile'

export const AboutMeContent = ({ inspecting }: PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'AboutMeContent',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex flex-wrap justify-center items-center gap-16'>
      <IconProfile width={200} height={200} inspecting={inspecting} />
      <div className='min-w-[100px] max-w-[600px]'>
        <AboutMeText inspecting={inspecting} />
      </div>
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-molecule-cover ${
            isSelected ? 'atomic-molecule' : ''
          }`}
          onClick={() => setComponent(component)}
        />
      )}
    </div>
  )
}
