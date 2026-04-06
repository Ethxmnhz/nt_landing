import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

const pillars = [
  {
    title: 'Clarity',
    description:
      'Seeing through the noise of gossip, power, and superficial rituals to find the true essence of spirituality and healing.',
  },
  {
    title: 'Conviction',
    description:
      'I healed naturally after a car accident, refusing metal implants, trusting the practices I learned. If I can do it, anyone can.',
  },
  {
    title: 'Commitment',
    description:
      'I embody discipline and follow through on every commitment. No half-measures, no shortcuts.',
  },
  {
    title: 'Compounded Effect',
    description:
      'Building a community that lives consciously, understanding that small daily practices create extraordinary transformation one body, one breath at a time.',
  },
]

export function AboutPage() {
  return (
    <>
      <section className="section-light doc-section">
        <div className="section-shell doc-wrap">
          <AnimatedSection>
            <p className="doc-page-label">About Page</p>
            <div className="doc-grid-two doc-about-grid">
              <article className="doc-grid-card doc-copy-block">
                <h2>About Ishita</h2>
                <p>
                  Energy Healer &amp; Natural Wellness Guide bridging ancient wisdom and modern
                  science for those ready to heal from within.
                </p>
                <p className="doc-quote">
                  If your body has been trying to tell you something, I will help you finally
                  listen to it.
                </p>
                <div className="doc-top-gap">
                  <ButtonLink to="/book">Book a Consultation</ButtonLink>
                </div>
              </article>
              <article className="doc-grid-card doc-photo-placeholder">
                <p>Ishita Photo</p>
              </article>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">My Purpose</div>
            <div className="doc-box doc-center">
              <h2>Your Body Is the Most Powerful Healer You Will Ever Meet.</h2>
            </div>
            <div className="doc-box doc-copy-block">
              <p>
                I work on the overall aspect of the individual, mental, emotional, and physical.
                Through energy healing via chakras, physical movements to strengthen the body, and
                practical wisdom gained through lived experience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-grid-two doc-mission-grid">
              <article className="doc-grid-card doc-copy-block">
                <h3>Mission Statement</h3>
                <div className="doc-box doc-inner-box">
                  <p>
                    To empower individuals to rediscover their body's innate healing capabilities by
                    bridging the gap between medical science and ancient wisdom.
                  </p>
                </div>
              </article>
              <article className="doc-grid-card doc-copy-block">
                <p>
                  Raising one's vibrational frequency is crucial. I bridge the gap between medical
                  science and ancient wisdom, connecting the physical body to the breath, mind, and
                  intellect, and revealing how it impacts your nervous system, sleep quality, and
                  thinking ability.
                </p>
              </article>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">Vision</div>
            <div className="doc-box doc-copy-block">
              <p>
                A world where people understand their body as the most powerful gift they have and
                live consciously, heal naturally, and never give up through adversity.
              </p>
              <p>
                A world where understanding the profound connection between breath, mind, body, and
                intellect and use it to heal.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">Pillars I Stand On</div>
            <div className="doc-grid-two">
              {pillars.map((pillar) => (
                <article className="doc-grid-card doc-copy-block" key={pillar.title}>
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
