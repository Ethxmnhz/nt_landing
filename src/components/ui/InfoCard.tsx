type InfoCardProps = {
  overline?: string
  title: string
  description: string
}

export function InfoCard({ overline, title, description }: InfoCardProps) {
  return (
    <article className="info-card reveal">
      {overline ? <p className="card-overline">{overline}</p> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
