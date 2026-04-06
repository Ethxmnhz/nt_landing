import { Mail, MessageCircle, Leaf, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'
import { site } from '../data/siteData'

export function ContactPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">Contact</p>
            <h1>Let's connect</h1>
            <p className="page-hero-sub">
              Have a question about the healing process, session packages, or just want to say
              hello? I'd love to hear from you.
            </p>
            <div className="doc-outcome-strip">
              <span>Personal Response</span>
              <span>24-48h Reply Window</span>
              <span>Email + WhatsApp</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CONTACT CARDS ─── */}
      <section className="section-light">
        <div className="section-shell">
          <div className="contact-grid">
            <AnimatedSection>
              <article className="contact-card">
                <span className="contact-icon"><Mail size={32} strokeWidth={1.5} /></span>
                <h3>Email</h3>
                <p>For detailed inquiries and booking questions.</p>
                <a href={`mailto:${site.email}`} className="contact-link">
                  {site.email} <ArrowRight size={14} style={{ marginLeft: 4 }} />
                </a>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <article className="contact-card">
                <span className="contact-icon"><MessageCircle size={32} strokeWidth={1.5} /></span>
                <h3>WhatsApp</h3>
                <p>Quick direct message to start a conversation.</p>
                <a href={site.whatsappUrl} className="contact-link">
                  Send a message <ArrowRight size={14} style={{ marginLeft: 4 }} />
                </a>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={240}>
              <article className="contact-card">
                <span className="contact-icon"><Leaf size={32} strokeWidth={1.5} /></span>
                <h3>Solo Practice</h3>
                <p>
                  Naturenergy is currently operated by one dedicated practitioner. I personally
                  respond to every message.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="contact-form-section">
              <div className="section-intro">
                <p className="section-tag">Send a Message</p>
                <h2>Write to me directly</h2>
                <p className="section-copy">
                  I typically respond within 24–48 hours. For faster response, use WhatsApp.
                </p>
              </div>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input type="text" id="contact-name" placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Your Email</label>
                    <input type="email" id="contact-email" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me a bit about what you're looking for..."
                  />
                </div>
                <ButtonLink href={site.bookingEmailUrl}>
                  Send Message <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </ButtonLink>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
