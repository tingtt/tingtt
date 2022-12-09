import React from 'react'
import {
  useComponent,
  useComponentSelected,
} from '../../../domain/model/Inspector'
import {
  ATOMIC_LEVEL_ATOM,
  Component,
  PropsInspecting,
} from '../../../domain/model/Inspector/@types'

export const LinkExternal = ({
  href,
  children,
  inspecting,
}: {
  href: string
} & React.PropsWithChildren &
  PropsInspecting) => {
  const [_, setComponent] = useComponent()
  const component: Component = {
    name: 'LinkExternal',
    level: ATOMIC_LEVEL_ATOM,
  }
  const isSelected = useComponentSelected(component)

  return (
    <a className='relative'>
      {children}
      {/* Cover */}
      {inspecting && (
        <div
          className={`atomic-atom-cover ${isSelected ? 'atomic-atom' : ''}`}
          onClick={() => setComponent(component)}
        />
      )}
    </a>
  )
}
