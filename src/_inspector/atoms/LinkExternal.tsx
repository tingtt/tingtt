import React from 'react'

export const LinkExternal = ({
  href,
  children,
}: {
  href: string
} & React.PropsWithChildren) => (
  <a className='relative'>
    {children}
    {/* Cover */}
    <div className='atomic-atom-cover' />
  </a>
)
