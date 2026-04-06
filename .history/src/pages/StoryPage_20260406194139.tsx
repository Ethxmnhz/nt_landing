import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

const journeyBlocks = [
  {
    title: 'The Break',
    description:
      'I broke off my engagement, and it shattered the foundations of my life. I began questioning everything: beliefs, religious rituals, relationships, and the meaning of life.',
  },
  {
    title: 'The Promise',
    description:
      'After three years of searching, I was intrigued to learn the essence of religion. That day I promised myself I would never let my emotions derail me in any way. A deeper quest began, not just to heal, but to rediscover the meaning of life.',
  },
  {
    title: 'The Change',
    description:
      'In 2010, I was introduced to meditation and Indian philosophies. I went deeper with an international perspective, understanding these ancient systems through a global lens.',
  },
  {
    title: 'The Unexpected Turn',
    description:
      'I was hit by a car. I practiced everything I had learned and it worked. I healed naturally, despite doctors suggesting operations to put metal implants in my bones.',
  },
  {
    title: 'What Followed',
    description:
      'This journey showed me that the body is far more capable than we are taught to believe. Not because I read it, but because I lived it. I speak from practical experience, not theories alone.',
  },
]

const values = ['Confident', 'Courageous', 'Knowledgeable', 'Respectful']

export function StoryPage() {
  return (
    <>
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">My Journey</div>
            <div className="doc-subtitle-box">From broken foundations to unshakeable conviction</div>
            <div className="doc-border-list">
              {journeyBlocks.map((block) => (
                <article key={block.title} className="doc-list-row">
                  <h3>{block.title}</h3>
                  <p>{block.description}</p>
                </article>
              ))}
            </div>
            <p className="doc-inline-quote">If I could do it, so can you, with commitment.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">What I Stand For</div>
            <article className="doc-border-block doc-centered-block">
              <p className="doc-standfor-title">Speaking from experience, not theory</p>
              <p>
                Many practitioners speak through intellectual concepts alone. They cannot provide
                the nuances of practice because yoga has been popularized as a physical fitness
                regime. The connection of the physical body to the breath, mind, and intellect,
                and how it impacts one's nervous system, sleep quality, and food habits, is often
                lost.
              </p>
              <p className="doc-inline-quote">
                I hope that my journey can inspire people to gain strength. It is imperative for
                people to learn that their body is the most powerful tool.
              </p>
              <div className="doc-value-grid">
                {values.map((value) => (
                  <div key={value} className="doc-value-cell">
                    {value}
                  </div>
                ))}
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <article className="doc-border-block doc-centered-block">
              <div className="doc-heading-lite">Begin Your Journey</div>
              <p>There is always a silver lining awaiting.</p>
              <div className="doc-cta-strip">
                <ButtonLink to="/book" variant="dark">
                  Book Free Consultation Call
                </ButtonLink>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
