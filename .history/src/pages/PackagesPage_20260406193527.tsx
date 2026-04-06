import { Check, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'
import { programs } from '../data/siteData'

export function PackagesPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">Packages</p>
            <h1>Session packages built for your recovery stage</h1>
            <p className="page-hero-sub">
              Currently offering 5–10 sessions per package, with progressive support depending on
              your personal, emotional, and physical condition.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="section-light">
        <div className="section-shell">
          <div className="packages-grid packages-grid-detailed">
            {programs.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 120}>
                <article className="package-card package-card-detailed">
                  <div className="package-header">
                    <p className="package-sessions">{pkg.sessions}</p>
                    <h3>{pkg.name}</h3>
                    <p className="package-ideal">{pkg.ideal}</p>
                  </div>
                  <p className="package-summary">{pkg.summary}</p>
                  <div className="package-focus">
                    <p className="package-focus-label">Focus areas:</p>
                    <ul>
                      {pkg.focus.map((f) => (
                        <li key={f}>
                          <Check size={14} strokeWidth={2.5} className="check-icon" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ButtonLink to="/book">Book This Package</ButtonLink>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Not sure which to choose?</p>
              <h2>Start with what feels right</h2>
              <p className="section-copy">
                Most people begin with the 5-session package. If your recovery phase requires deeper
                work, we can extend to 8 or 10 sessions. The first consultation will help determine
                what's best for you.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <ButtonLink to="/book">
                  Book Consultation <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </ButtonLink>
                <ButtonLink to="/faq" variant="dark">
                  View FAQ
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
