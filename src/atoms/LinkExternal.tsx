import React from 'react'

export const LinkExternal = ({
  href,
  children,
}: {
  href: string
} & React.PropsWithChildren) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
)
