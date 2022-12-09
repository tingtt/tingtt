import React from 'react'
import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const LinkExternal = ({
  href,
  children,
  inspecting,
}: {
  href: string
} & React.PropsWithChildren &
  PropsInspecting) => (
  <a className='relative'>
    {children}
    {/* Cover */}
    {inspecting && <div className='atomic-atom-cover' />}
  </a>
)
