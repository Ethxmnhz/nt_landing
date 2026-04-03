import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'dark' | 'secondary'
  className?: string
}

export function ButtonLink({ to, href, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  const btnClass = `btn btn-${variant} ${className}`.trim()

  if (to) {
    return (
      <Link className={btnClass} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <a className={btnClass} href={href}>
      {children}
    </a>
  )
}
