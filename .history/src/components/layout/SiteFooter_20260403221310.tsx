import { Link } from 'react-router-dom'
import { Leaf, ArrowRight } from 'lucide-react'
import { navItems, site } from '../../data/siteData'
import { ButtonLink } from '../ui/ButtonLink'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta-section">
        <div className="section-shell">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <p className="section-tag">Start Your Journey</p>
              <h2>Ready to begin your healing?</h2>
              <p className="footer-cta-sub">
                Book a consultation and take the first step toward structured, compassionate
                recovery support.
              </p>
            </div>
            <div className="footer-cta-actions">
              <ButtonLink to="/book">Book Consultation</ButtonLink>
              <ButtonLink href={site.whatsappUrl} variant="outline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.5 22l6.05-1.45C10.03 21.6 11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="section-shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/home" className="footer-logo">
                <Leaf size={22} strokeWidth={2.2} />
                <span className="brand-name">{site.name}</span>
              </Link>
              <p className="footer-brand-desc">
                Reset and protect your energetic system naturally. Bridging medical science and
                ancient wisdom for better recovery.
              </p>
            </div>

            <div className="footer-links-col">
              <h4>Navigate</h4>
              <ul>
                {navItems
                  .filter((n) => !n.highlight)
                  .map((item) => (
                    <li key={item.to}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Get In Touch</h4>
              <ul>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <a href={site.whatsappUrl}>WhatsApp Direct</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Newsletter</h4>
              <p className="footer-newsletter-text">
                Stay connected with healing insights and updates.
              </p>
              <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-shell">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
