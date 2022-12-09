import { PropsInspecting } from '../../../domain/model/Inspector/@types'
import { LinkGitHub } from '../atoms/LinkGitHub'
import { LinkGitLab } from '../atoms/LinkGitLab'
import { LinkQiita } from '../atoms/LinkQiita'
import { LinkZenn } from '../atoms/LinkZenn'

export const AboutMeLinkList = ({ inspecting }: PropsInspecting) => (
  <div className='relative flex flex-wrap justify-center items-center gap-8'>
    <LinkGitHub inspecting={inspecting} />
    <LinkGitLab inspecting={inspecting} />
    <LinkQiita inspecting={inspecting} />
    <LinkZenn inspecting={inspecting} />
    {/* Cover */}
    {inspecting && <div className='atomic-molecule-cover' />}
  </div>
)
