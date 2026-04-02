import { site } from '../data/siteData'
import { ButtonLink } from '../components/ui/ButtonLink'

export function BookPage() {
  return (
    <section className="content-section booking">
      <div className="section-shell">
        <div className="section-intro narrow">
          <p className="section-tag">Book Consultation</p>
          <h2>Choose your booking method</h2>
          <p className="section-copy">
            This page is production-ready for CTA flow. Replace email link with Calendly URL when
            final schedule system is ready.
          </p>
        </div>

        <div className="booking-cards">
          <article className="info-card reveal">
            <p className="card-overline">Preferred</p>
            <h3>Book by Email</h3>
            <p>For initial intake and scheduling details through your inbox.</p>
            <ButtonLink href={site.bookingEmailUrl}>Email Booking</ButtonLink>
          </article>
          <article className="info-card reveal">
            <p className="card-overline">Fast Contact</p>
            <h3>Book by WhatsApp</h3>
            <p>Quick direct message to start consultation planning immediately.</p>
            <ButtonLink href={site.whatsappUrl} variant="dark">
              WhatsApp Booking
            </ButtonLink>
          </article>
        </div>
      </div>
    </section>
  )
}
