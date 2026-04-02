import { resources } from '../data/siteData'

export function ResourcesPage() {
  return (
    <section className="content-section alt">
      <div className="section-shell">
        <div className="section-intro">
          <p className="section-tag">Resources</p>
          <h2>Practical tools for ongoing recovery</h2>
          <p className="section-copy">
            Resource architecture mirrors production-level coaching sites: guides, practices, and
            downloadable support content.
          </p>
        </div>
        <div className="cards-grid three">
          {resources.map((item) => (
            <article key={item.title} className="info-card reveal">
              <p className="card-overline">{item.type}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
