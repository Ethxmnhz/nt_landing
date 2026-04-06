import {
  Compass,
  Zap,
  Sprout,
  Users,
  ArrowRight,
} from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'
import { consultationProcess, services } from '../data/siteData'

const serviceIcons = [
  <Compass size={32} strokeWidth={1.8} />,
  <Zap size={32} strokeWidth={1.8} />,
  <Sprout size={32} strokeWidth={1.8} />,
  <Users size={32} strokeWidth={1.8} />,
]

export function ServicesPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">Services</p>
            <h1>Integrated modalities for deeper and safer recovery</h1>
            <p className="page-hero-sub">
              Service design is outcome-based: better self-regulation, stronger body response,
              emotional support, and clearer recovery decisions.
            </p>
            <div className="doc-outcome-strip">
              <span>Regulation</span>
              <span>Resilience</span>
              <span>Recovery Clarity</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FIRST CONSULTATION ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Your First Session</p>
              <h2>What happens in the first consultation</h2>
              <p className="section-copy">
                Before any healing work begins, I take time to understand your complete context —
                daily routines, family support, work environment, and emotional landscape. This
                ensures every session plan is built on real understanding.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">What I Offer</p>
              <h2>Four areas of focused support</h2>
            </div>
          </AnimatedSection>
          <div className="services-grid">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <article className="service-card">
                  <span className="service-icon">{serviceIcons[i]}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS FLOW ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">The Process</p>
              <h2>Assess → Heal → Integrate</h2>
              <p className="section-copy">
                Your healing journey follows a clear, structured path from initial assessment
                through active healing to long-term integration.
              </p>
            </div>
          </AnimatedSection>
          <div className="process-grid">
            {consultationProcess.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150}>
                <article className="process-card">
                  <span className="process-number">{String(step.step).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="centered-cta">
              <ButtonLink to="/book">
                Book Your First Consultation <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
