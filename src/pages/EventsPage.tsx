import { events } from '../data/siteData'

export function EventsPage() {
  return (
    <section className="content-section">
      <div className="section-shell">
        <div className="section-intro">
          <p className="section-tag">Events</p>
          <h2>Workshops, circles, and speaking sessions</h2>
          <p className="section-copy">
            Event features are prepared in the same ecosystem style as the reference sites: regular
            sessions, educational events, and guided participation formats.
          </p>
        </div>
        <div className="cards-grid three">
          {events.map((event) => (
            <article key={event.title} className="info-card reveal">
              <p className="card-overline">{event.format} - {event.status}</p>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
