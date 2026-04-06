import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

const missionPoints = [
  'To empower individuals to rediscover their body\'s innate healing capabilities by bridging the gap between medical science and ancient wisdom.',
  "Raising one's vibrational frequency is crucial. I bridge the gap between medical science and ancient wisdom, connecting the physical body to the breath, mind, and intellect, and revealing how it impacts your nervous system, sleep quality, and thinking ability.",
]

const pillars = [
  {
    title: 'Clarity',
    description:
      'Seeing through the noise of gossip, power, and superficial rituals to find the true essence of spirituality and healing.',
  },
  {
    title: 'Conviction',
    description:
      'I healed naturally after a car accident, refusing metal implants, trusting the practices I had learned. If I can do it, anyone can.',
  },
  {
    title: 'Commitment',
    description:
      'I embody discipline and follow through on every commitment. No half-measures, no shortcuts.',
  },
  {
    title: 'Compounded Effect',
    description:
      'Building a community that lives consciously, understanding that small daily practices create extraordinary transformation, one body, one breath at a time.',
  },
]

export function AboutPage() {
  return (
    <>
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-about-grid">
              <article className="doc-grid-panel">
                <h2>About Ishita</h2>
                <p>
                  Energy Healer and Natural Wellness Guide bridging ancient wisdom and modern
                  science for those ready to heal from within.
                </p>
                <p className="doc-inline-quote">
                  If your body has been trying to tell you something, I will help you finally
                  listen to it.
                </p>
                <ButtonLink to="/book" variant="dark">
                  Book a Consultation
                </ButtonLink>
              </article>
              <article className="doc-grid-panel doc-photo-panel">
                <h3>Ishita Photo</h3>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">My Purpose</div>
            <article className="doc-border-block doc-centered-block">
              <h2>Your Body Is the Most Powerful Healer You Will Ever Meet.</h2>
            </article>
            <article className="doc-border-block doc-purpose-copy">
              <p>
                I work on the overall aspect of the individual: mental, emotional, and physical.
                Through energy healing via chakras, physical movements to strengthen the body, and
                practical wisdom gained through lived experience.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">Mission Statement</div>
            <div className="doc-two-grid">
              {missionPoints.map((point) => (
                <article key={point} className="doc-grid-panel">
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">Vision</div>
            <article className="doc-border-block doc-purpose-copy">
              <p>
                A world where people understand their body as the most powerful gift they have and
                live consciously, heal naturally, and never give up through adversity.
              </p>
              <p>
                A world where understanding the profound connection between breath, mind, body, and
                intellect is used to heal.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">Pillars I Stand On</div>
            <div className="doc-pillar-grid">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="doc-grid-panel">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
