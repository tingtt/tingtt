import { LinkGitHub } from '../atoms/LinkGitHub'
import { LinkGitLab } from '../atoms/LinkGitLab'
import { LinkQiita } from '../atoms/LinkQiita'
import { LinkZenn } from '../atoms/LinkZenn'

export const AboutMeLinkList = () => (
  <div className='relative flex flex-wrap justify-center items-center gap-8'>
    <LinkGitHub />
    <LinkGitLab />
    <LinkQiita />
    <LinkZenn />
    {/* Cover */}
    <div className='atomic-molecule-cover' />
  </div>
)
