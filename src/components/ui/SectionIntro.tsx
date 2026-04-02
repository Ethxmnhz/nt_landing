type SectionIntroProps = {
  tag: string
  title: string
  copy?: string
}

export function SectionIntro({ tag, title, copy }: SectionIntroProps) {
  return (
    <header className="section-intro">
      <p className="section-tag">{tag}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </header>
  )
}
