import {
  ArrowRight,
  Image,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

export function AboutPage() {
  return (
    <>
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-about-intro">
              <article className="doc-about-card">
                <p className="section-tag">About Ishita</p>
                <h1>Energy Healer &amp; Natural Wellness Guide</h1>
                <p className="section-copy">
                  Bridging ancient wisdom and modern science for those ready to heal from within.
                </p>
                <p className="doc-story-quote">
                  If your body has been trying to tell you something, I will help you finally
                  listen to it.
                </p>
                <ButtonLink to="/book" variant="dark">
                  Book a Consultation <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </ButtonLink>
              </article>
              <article className="doc-photo-frame">
                <div className="about-visual-placeholder">
                  <Image size={44} strokeWidth={1.5} />
                  <p>Ishita Photo</p>
                </div>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-purpose-head">
              <p className="section-tag">My Purpose</p>
              <h2>Your body is the most powerful healer you will ever meet.</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="doc-story-card">
              <p>
                I work on the overall aspect of the individual: mental, emotional, and physical.
                Through energy healing via chakras, physical movements to strengthen the body, and
                practical wisdom gained through lived experience.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-mission-grid">
              <article className="doc-mission-card">
                <h3>Mission Statement</h3>
                <p>
                  To empower individuals to rediscover their body's innate healing capabilities by
                  bridging the gap between medical science and ancient wisdom.
                </p>
              </article>
              <article className="doc-mission-card doc-mission-card-alt">
                <p>
                  Raising one's vibrational frequency is crucial. I bridge the gap between medical
                  science and ancient wisdom, connecting the physical body to breath, mind, and
                  intellect, and revealing how it impacts your nervous system, sleep quality, and
                  thinking ability.
                </p>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Vision</p>
              <h2>A world where people understand their body as their greatest gift</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="doc-story-card">
              <p>
                A world where people understand their body as the most powerful gift they have and
                live consciously, heal naturally, and never give up through adversity.
              </p>
              <p>
                A world where understanding the profound connection between breath, mind, body, and
                intellect becomes a practical daily tool for healing.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Pillars I Stand On</p>
              <h2>Values that shape every session</h2>
            </div>
          </AnimatedSection>
          <div className="doc-pillars-grid">
            <AnimatedSection delay={0}>
              <article className="doc-pillar-card">
                <span className="service-icon">
                  <Lightbulb size={28} strokeWidth={1.8} />
                </span>
                <h3>Clarity</h3>
                <p>
                  Seeing through the noise of gossip, power, and superficial rituals to find the
                  true essence of spirituality and healing.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={90}>
              <article className="doc-pillar-card">
                <span className="service-icon">
                  <ShieldCheck size={28} strokeWidth={1.8} />
                </span>
                <h3>Conviction</h3>
                <p>
                  I healed naturally after a car accident, refusing metal implants and trusting the
                  practices I learned. If I can do it, anyone can.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={180}>
              <article className="doc-pillar-card">
                <span className="service-icon">
                  <Target size={28} strokeWidth={1.8} />
                </span>
                <h3>Commitment</h3>
                <p>
                  I embody discipline and follow through on every commitment. No half-measures, no
                  shortcuts.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={270}>
              <article className="doc-pillar-card">
                <span className="service-icon">
                  <Sparkles size={28} strokeWidth={1.8} />
                </span>
                <h3>Compounded Effect</h3>
                <p>
                  Building a conscious community that lives consciously, understanding that small
                  daily practices create extraordinary transformation.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
