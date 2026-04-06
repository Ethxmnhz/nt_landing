import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

const journeySteps = [
  {
    title: 'The Break',
    description:
      'I broke off my engagement, it shattered the foundations of my life. I began questioning everything, beliefs, religious rituals, relationships, and the meaning of life.',
  },
  {
    title: 'The Promise',
    description:
      'After 3 years of searching, I was intrigued to learn the essence of religion. That day I promised myself I would never let my emotions derail me in any way. A deeper quest began, not just to heal, but to rediscover the meaning of life.',
  },
  {
    title: 'The Change',
    description:
      'In 2010, I was introduced to meditation and the Indian philosophies. I went deeper with an international perspective, understanding these ancient systems through a global lens.',
  },
  {
    title: 'The Unexpected Turn',
    description:
      'I was hit by a car, I practiced everything I had learned and it worked. I healed naturally, despite doctors suggesting operations to put metal implants to join the bones.',
  },
  {
    title: 'What Followed',
    description:
      'This journey showed me that the body is far more capable than we are taught to believe. Not because I read it, but because I lived it. I speak from practical experience, not theories alone. If I could do it, so can you with commitment.',
  },
]

const standForValues = ['Confident', 'Courageous', 'Knowledgeable', 'Respectful']

export function StoryPage() {
  return (
    <>
      <section className="section-light doc-section">
        <div className="section-shell doc-wrap">
          <AnimatedSection>
            <div className="doc-heading-box">My Journey</div>
            <p className="doc-subtitle">From broken foundations to unshakeable conviction</p>
            <div className="doc-list-table">
              {journeySteps.map((step) => (
                <article className="doc-list-row" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">What I Stand For</div>
            <div className="doc-box doc-center doc-copy-block">
              <p className="doc-lead">Speaking from experience, not theory</p>
              <p>
                Many practitioners speak through intellectual concepts alone. They cannot provide
                the nuances of practice because yoga has been popularised as a physical fitness
                regime. The connection of the physical body to the breath, mind, and intellect and
                how it impacts one's nervous system, sleep quality, and food habits is often lost.
              </p>
              <p className="doc-quote">
                "I hope that my journey can inspire people to gain strength. It is imperative for
                people to learn that their body is the most powerful tool."
              </p>
            </div>
            <div className="doc-grid-four doc-top-gap">
              {standForValues.map((value) => (
                <div className="doc-grid-card doc-center" key={value}>
                  <h3>{value}</h3>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-box doc-center">
              <h2>Begin Your Journey</h2>
              <p>There is always a silver lining awaiting.</p>
              <div className="doc-cta-center">
                <ButtonLink to="/book">Book Free Consultation Call</ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
