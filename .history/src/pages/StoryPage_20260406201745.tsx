import { ArrowRight, Sparkles } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

export function StoryPage() {
  return (
    <>
      {/* ─── MY JOURNEY ─── */}
      <section className="page-hero">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">Story Page</p>
            <h1>My Journey</h1>
            <p className="page-hero-sub">
              From broken foundations to unshakeable conviction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <article className="story-manifesto">
              <div className="story-manifesto-glow" />
              <p>
                Healing did not begin when life became easier. It began when I stopped shrinking,
                listened deeply, and decided to rebuild from truth.
              </p>
              <p>
                Today, I guide professionals and individuals who are ready to stop managing
                limitations and start dismantling them. The body has not failed you. It has been
                waiting for you to come home.
              </p>
              <p className="story-manifesto-signature">
                If I could rise through this, so can you.
              </p>
              <ButtonLink to="/book" className="story-manifesto-cta">
                Book Free Consultation Call <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </article>
          </AnimatedSection>
          <div className="story-timeline doc-story-timeline-enhanced">
            <AnimatedSection>
              <article className="timeline-card">
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                  <span className="timeline-line" />
                </div>
                <div className="timeline-content">
                  <p className="timeline-phase">The Break</p>
                  <h3>Everything cracked open</h3>
                  <p>
                    I broke off my engagement, and it shattered the foundations of my life. I
                    began questioning everything: beliefs, rituals, relationships, and the meaning
                    of life.
                  </p>
                </div>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={90}>
              <article className="timeline-card">
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                  <span className="timeline-line" />
                </div>
                <div className="timeline-content">
                  <p className="timeline-phase">The Promise</p>
                  <h3>A conscious commitment</h3>
                  <p>
                    After 3 years of searching, I was intrigued to learn the essence of religion.
                    That day I promised myself I would never let my emotions derail me in any way.
                    A deeper quest began: not just to heal, but to rediscover the meaning of life.
                  </p>
                </div>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={180}>
              <article className="timeline-card">
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                  <span className="timeline-line" />
                </div>
                <div className="timeline-content">
                  <p className="timeline-phase">The Change</p>
                  <h3>Ancient wisdom, global lens</h3>
                  <p>
                    In 2010, I was introduced to meditation and Indian philosophies. I went deeper
                    with an international perspective, understanding these ancient systems through
                    a global lens.
                  </p>
                </div>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={270}>
              <article className="timeline-card">
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                  <span className="timeline-line" />
                </div>
                <div className="timeline-content">
                  <p className="timeline-phase">The Unexpected Turn</p>
                  <h3>The accident that tested everything</h3>
                  <p>
                    I was hit by a car. I practiced everything I had learned and it worked. I
                    healed naturally, despite doctors suggesting operations to put metal implants
                    and join the bones.
                  </p>
                </div>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={360}>
              <article className="timeline-card">
                <div className="timeline-marker">
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <p className="timeline-phase">What Followed</p>
                  <h3>Unshakeable conviction</h3>
                  <p>
                    This journey showed me that the body is far more capable than we are taught to
                    believe. Not because I read it, but because I lived it.
                  </p>
                  <p className="doc-story-quote">If I could do it, so can you - with commitment.</p>
                </div>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">What I Stand For</p>
              <h2>Speaking from experience, not theory</h2>
              <p className="section-copy">
                Many practitioners speak through intellectual concepts alone. True healing demands
                understanding the connection of physical body, breath, mind, and intellect.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="doc-story-card doc-standfor-card doc-standfor-layout">
              <p>
                The connection of the physical body to breath, mind, and intellect, and how it
                impacts one's nervous system, sleep quality, and food habits is often lost.
              </p>
              <div className="doc-standfor-points">
                <span>Ancient wisdom with practical application</span>
                <span>Depth instead of performance spirituality</span>
                <span>Embodied healing, not abstract theory</span>
              </div>
              <p className="doc-story-quote">
                I hope my journey can inspire people to gain strength. It is imperative for people
                to learn that their body is the most powerful tool.
              </p>
            </div>
          </AnimatedSection>
          <div className="doc-values-grid">
            {['Confident', 'Courageous', 'Knowledgeable', 'Respectful'].map((value, index) => (
              <AnimatedSection key={value} delay={index * 90}>
                <div className="doc-value-chip">{value}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-cta-panel">
              <p className="section-tag">
                <Sparkles size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                Begin Your Journey
              </p>
              <h2>There is always a silver lining awaiting.</h2>
              <ButtonLink to="/book">
                Book Free Consultation Call <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
