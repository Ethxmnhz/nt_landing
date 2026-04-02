import { services } from '../data/siteData'
import { InfoCard } from '../components/ui/InfoCard'

export function ServicesPage() {
  return (
    <section className="content-section">
      <div className="section-shell">
        <div className="section-intro">
          <p className="section-tag">Services</p>
          <h2>Integrated modalities for deeper and safer recovery</h2>
          <p className="section-copy">
            Service design is outcome-based: better self-regulation, stronger body response,
            emotional support, and clearer recovery decisions.
          </p>
        </div>
        <div className="cards-grid two">
          {services.map((service) => (
            <InfoCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
