type InfoCardProps = {
  overline?: string
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export function InfoCard({ overline, title, description, icon, className = '' }: InfoCardProps) {
  return (
    <article className={`info-card reveal ${className}`.trim()}>
      {icon && <div className="card-icon">{icon}</div>}
      {overline ? <p className="card-overline">{overline}</p> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
