import {
  Orbit,
  Activity,
  HeartHandshake,
  Award,
  Heart,
  Target,
  Atom,
  ArrowRight,
} from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'
import { healingPillars } from '../data/siteData'

const pillarIcons = [
  <Orbit size={32} strokeWidth={1.8} />,
  <Activity size={32} strokeWidth={1.8} />,
  <HeartHandshake size={32} strokeWidth={1.8} />,
]

export function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">About Naturenergy</p>
            <h1>Healing is not only physical. It is emotional, mental, and energetic.</h1>
            <p className="page-hero-sub">
              I believe this has been widely discussed and deeply experienced by many people in
              recovery. Even with supportive people around, individuals can still feel alone. This
              work addresses that reality directly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── THREE PILLARS ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">The Approach</p>
              <h2>Three dimensions of integrated healing</h2>
            </div>
          </AnimatedSection>
          <div className="pillars-grid">
            {healingPillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 120}>
                <article className="pillar-card">
                  <span className="pillar-icon">{pillarIcons[i]}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SCIENCE + WISDOM ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="about-split">
              <div className="about-split-visual">
                <div className="about-visual-placeholder">
                  <Atom size={48} strokeWidth={1.2} />
                  <p>Science & Wisdom</p>
                </div>
              </div>
              <div className="about-split-copy">
                <p className="section-tag">Philosophy</p>
                <h2>Bridging medical science and ancient wisdom</h2>
                <p className="section-copy">
                  The method combines practical experience, relevant certifications, chakra-based
                  healing, and body-strengthening movement practices for an integrated process. It is
                  not about choosing science or spirituality — it is about using both to serve your
                  recovery.
                </p>
                <p className="section-copy">
                  Every first consultation reviews routine, family support, and work environment to
                  understand the complete healing context. This ensures that sessions are built on
                  real understanding, not assumptions.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── QUALIFICATIONS ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Experience & Credentials</p>
              <h2>Grounded in practice, not theory</h2>
              <p className="section-copy">
                This work is built on practical lived experience — recovering from adversity,
                gaining relevant certifications, and years of supporting others through their own
                healing journeys.
              </p>
            </div>
          </AnimatedSection>
          <div className="credential-grid">
            <AnimatedSection delay={0}>
              <article className="credential-card">
                <span className="credential-icon"><Award size={36} strokeWidth={1.5} /></span>
                <h3>Relevant Certifications</h3>
                <p>
                  Trained in energy healing modalities with certifications that support the practice
                  framework.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <article className="credential-card">
                <span className="credential-icon"><Heart size={36} strokeWidth={1.5} /></span>
                <h3>Lived Experience</h3>
                <p>
                  Personal recovery from a serious accident — understanding what healing truly
                  requires from the inside.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={240}>
              <article className="credential-card">
                <span className="credential-icon"><Target size={36} strokeWidth={1.5} /></span>
                <h3>Practical Approach</h3>
                <p>
                  Every session includes real routine changes, movement practices, and emotional
                  support tools.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="about-quote-block">
              <blockquote>
                "For never giving up even through adversities, there is always a silver lining
                awaiting for you."
              </blockquote>
              <ButtonLink to="/book">
                Begin Your Healing Journey <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
