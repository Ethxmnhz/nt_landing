import { Link } from 'react-router-dom'
import { Leaf, ArrowRight } from 'lucide-react'
import { navItems, site } from '../../data/siteData'

export function SiteFooter() {
  return (
    <footer className="site-footer">
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
