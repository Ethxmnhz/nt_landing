import { site } from '../data/siteData'
import { ButtonLink } from '../components/ui/ButtonLink'

export function ContactPage() {
  return (
    <section className="content-section">
      <div className="section-shell">
        <div className="contact-layout">
          <article className="info-card reveal">
            <p className="card-overline">Contact</p>
            <h3>Connect with Naturenergy</h3>
            <p>
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              WhatsApp: <a href={site.whatsappUrl}>Direct message</a>
            </p>
            <p>Team structure: currently one practitioner.</p>
          </article>

          <article className="info-card reveal">
            <p className="card-overline">Booking Guidance</p>
            <h3>Best setup for production booking flow</h3>
            <p>
              Use Calendly and embed it in the Book page, then connect CTA buttons to your
              Calendly link for instant slot booking.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/book">Go to Book Page</ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
