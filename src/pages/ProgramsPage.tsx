import { programs } from '../data/siteData'
import { ButtonLink } from '../components/ui/ButtonLink'

export function ProgramsPage() {
  return (
    <section className="content-section alt">
      <div className="section-shell">
        <div className="section-intro">
          <p className="section-tag">Programs</p>
          <h2>Session packages built for your recovery stage</h2>
          <p className="section-copy">
            Current offering is 5-10 sessions per package with progressive support depending on
            your personal, emotional, and physical condition.
          </p>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card reveal" key={program.name}>
              <p className="card-overline">{program.sessions}</p>
              <h3>{program.name}</h3>
              <p>{program.summary}</p>
              <ul>
                {program.focus.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <ButtonLink to="/book">Book Program Consultation</ButtonLink>
        </div>
      </div>
    </section>
  )
}
