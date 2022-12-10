import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
} from '../../../domain/model/Inspector/@types'
import { LinkGitHub } from '../atoms/LinkGitHub'
import { LinkGitLab } from '../atoms/LinkGitLab'
import { LinkQiita } from '../atoms/LinkQiita'
import { LinkZenn } from '../atoms/LinkZenn'

export const AboutMeLinkList = () => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'AboutMeLinkList',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex flex-wrap justify-center items-center gap-8'>
      <LinkGitHub />
      <LinkGitLab />
      <LinkQiita />
      <LinkZenn />
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
