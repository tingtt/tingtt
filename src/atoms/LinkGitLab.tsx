import { LinkExternal } from './LinkExternal'
import { SvgGitLab } from './SvgGitLab'

export const LinkGitLab = ({
  href,
  title,
  blackAndWhite,
}: {
  href?: string
  title?: string
  blackAndWhite?: boolean
}) => (
  <LinkExternal href={href ?? 'https://gitlab.tingtt.jp/explore'}>
    <div className='flex items-center gap-2 link link-hover text-blue-500 whitespace-wrap'>
      <div
        className={
          blackAndWhite
            ? 'grayscale brightness-75 dark:contrast-75 dark:brightness-200'
            : ''
        }
      >
        <SvgGitLab width={24} height={24} />
      </div>
      {title ?? 'GitLab (Self-hosted)'}
    </div>
  </LinkExternal>
)
