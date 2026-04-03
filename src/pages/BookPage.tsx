import { Mail, MessageCircle, ArrowRight, Check } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'
import { site } from '../data/siteData'

export function BookPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero page-hero-book">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">Book Consultation</p>
            <h1>Take the first step</h1>
            <p className="page-hero-sub">
              Your healing journey begins with a simple conversation. Choose how you'd like to
              connect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── BOOKING OPTIONS ─── */}
      <section className="section-light">
        <div className="section-shell">
          <div className="booking-grid">
            <AnimatedSection>
              <article className="booking-card booking-card-primary">
                <span className="booking-icon"><Mail size={36} strokeWidth={1.5} /></span>
                <p className="booking-badge">Recommended</p>
                <h3>Book by Email</h3>
                <p>
                  Send me an email with a brief description of what you're going through. I'll
                  respond with available times and next steps.
                </p>
                <ButtonLink href={site.bookingEmailUrl}>
                  Email Booking <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </ButtonLink>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <article className="booking-card">
                <span className="booking-icon"><MessageCircle size={36} strokeWidth={1.5} /></span>
                <h3>Book by WhatsApp</h3>
                <p>
                  For a faster reply, send me a direct WhatsApp message. Great for quick questions
                  before committing.
                </p>
                <ButtonLink href={site.whatsappUrl} variant="dark">
                  WhatsApp Booking <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </ButtonLink>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── WHAT HAPPENS AFTER ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">What Happens Next</p>
              <h2>After you reach out</h2>
            </div>
          </AnimatedSection>
          <div className="after-booking-grid">
            <AnimatedSection delay={0}>
              <article className="after-step">
                <span className="after-step-num">1</span>
                <h3>We Connect</h3>
                <p>I respond personally to understand your situation and answer any questions.</p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <article className="after-step">
                <span className="after-step-num">2</span>
                <h3>First Consultation</h3>
                <p>
                  We review your routines, support system, and emotional landscape together.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={240}>
              <article className="after-step">
                <span className="after-step-num">3</span>
                <h3>Your Plan</h3>
                <p>
                  I design a personalized session package tailored to your recovery needs.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── TRUST ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="about-quote-block">
              <h2>Your first consultation includes:</h2>
              <ul className="trust-list">
                <li><Check size={18} strokeWidth={2.5} className="check-icon" /> Review of daily routines and support systems</li>
                <li><Check size={18} strokeWidth={2.5} className="check-icon" /> Emotional and energetic assessment</li>
                <li><Check size={18} strokeWidth={2.5} className="check-icon" /> Personalized recovery recommendations</li>
                <li><Check size={18} strokeWidth={2.5} className="check-icon" /> No pressure — just honest guidance</li>
              </ul>
              <ButtonLink to="/services">
                Learn More About Services <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
