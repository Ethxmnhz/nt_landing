import { site } from '../../data/siteData'
import { ButtonLink } from '../ui/ButtonLink'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="footer-cta">
        <p className="section-tag">Start Now</p>
        <h2>Book your consultation and start your recovery phase with structure.</h2>
        <div className="footer-actions">
          <ButtonLink to="/book">Book Consultation</ButtonLink>
          <ButtonLink href={site.whatsappUrl} variant="outline">
            WhatsApp
          </ButtonLink>
        </div>
      </section>

      <section className="footer-meta">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <p>{site.email}</p>
        <p>Hosting: Vodien</p>
      </section>
    </footer>
  )
}
