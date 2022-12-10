import {
  useComponent,
  useComponentSelected,
  useInspecting,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_MOLECULE,
  Component,
} from '../../../domain/model/Inspector/@types'
import { ProductLink } from '../../../domain/model/Products/@types'
import { LinkDefault } from '../atoms/LinkDefault'
import { LinkDocs } from '../atoms/LinkDocs'
import { LinkGitHub } from '../atoms/LinkGitHub'
import { LinkGitLab } from '../atoms/LinkGitLab'
import { LinkSlide } from '../atoms/LinkSlide'
import { LinkWeb } from '../atoms/LinkWeb'

export const ProductLinkList = ({ links }: { links: ProductLink[] }) => {
  const [inspecting] = useInspecting()
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'ProductLinkList',
    level: ATOMIC_LEVEL_MOLECULE,
  }
  const isSelected = useComponentSelected(component)

  return (
    <div className='relative flex flex-col gap-2 [&>*]:w-max'>
      {(links ?? []).map((l) => {
        if (l.type == 'github') {
          return <LinkGitHub key={l.href} title={l.name} href={l.href} />
        } else if (l.type == 'gitlab') {
          return (
            <LinkGitLab
              key={l.href}
              title={l.name}
              href={l.href}
              blackAndWhite
            />
          )
        } else if (l.type == 'web') {
          return <LinkWeb key={l.href} title={l.name ?? ''} href={l.href} />
        } else if (l.type == 'docs') {
          return <LinkDocs key={l.href} title={l.name ?? ''} href={l.href} />
        } else if (l.type == 'slide') {
          return <LinkSlide key={l.href} title={l.name ?? ''} href={l.href} />
        }
        return <LinkDefault key={l.href} title={l.name ?? ''} href={l.href} />
      })}
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
