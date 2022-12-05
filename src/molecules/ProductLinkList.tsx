import { ProductLink } from '../../domain/model/Products/@types'
import { LinkDefault } from '../atoms/LinkDefault'
import { LinkDocs } from '../atoms/LinkDocs'
import { LinkGitHub } from '../atoms/LinkGitHub'
import { LinkGitLab } from '../atoms/LinkGitLab'
import { LinkSlide } from '../atoms/LinkSlide'
import { LinkWeb } from '../atoms/LinkWeb'

export const ProductLinkList = ({ links }: { links: ProductLink[] }) => (
  <div className='flex flex-col gap-2 [&>*]:w-max'>
    {(links ?? []).map((l) => {
      if (l.type == 'github') {
        return <LinkGitHub key={l.name} title={l.name} href={l.href} />
      } else if (l.type == 'gitlab') {
        return (
          <LinkGitLab key={l.name} title={l.name} href={l.href} blackAndWhite />
        )
      } else if (l.type == 'web') {
        return <LinkWeb key={l.name} title={l.name ?? ''} href={l.href} />
      } else if (l.type == 'docs') {
        return <LinkDocs key={l.name} title={l.name ?? ''} href={l.href} />
      } else if (l.type == 'slide') {
        return <LinkSlide key={l.name} title={l.name ?? ''} href={l.href} />
      }
      return <LinkDefault key={l.name} title={l.name ?? ''} href={l.href} />
    })}
  </div>
)
