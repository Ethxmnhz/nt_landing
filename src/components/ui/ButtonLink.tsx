import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'dark'
}

export function ButtonLink({ to, href, children, variant = 'primary' }: ButtonLinkProps) {
  const className = `btn btn-${variant}`

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}
