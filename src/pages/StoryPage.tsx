import { ImageIcon, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'
import { founderStory } from '../data/siteData'

export function StoryPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero page-hero-story">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">The Story</p>
            <h1>From adversity to service-led healing</h1>
            <p className="page-hero-sub">
              The Naturenergy story is built through practical lived experience, deep personal
              recovery, and the decision to support others in their own transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section-light">
        <div className="section-shell">
          <div className="story-timeline">
            {founderStory.map((block, i) => (
              <AnimatedSection key={block.phase} delay={i * 100}>
                <article className="timeline-card">
                  <div className="timeline-marker">
                    <span className="timeline-dot" />
                    {i < founderStory.length - 1 && <span className="timeline-line" />}
                  </div>
                  <div className="timeline-content">
                    <p className="timeline-phase">{block.phase}</p>
                    <h3>{block.title}</h3>
                    <p>{block.description}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO GALLERY ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Journey Gallery</p>
              <h2>Moments from the journey</h2>
              <p className="section-copy">
                Personal photos from the recovery journey and the path to becoming a healer.
              </p>
            </div>
          </AnimatedSection>
          <div className="gallery-grid">
            {[1, 2, 3, 4].map((n) => (
              <AnimatedSection key={n} delay={n * 80}>
                <div className="gallery-placeholder">
                  <ImageIcon size={36} strokeWidth={1.3} />
                  <p>Photo {n}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p className="gallery-note">
              Professional photos coming soon. Personal journey photos will be added here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="about-quote-block">
              <p className="section-tag">Why This Work Exists</p>
              <blockquote>
                "I believe energy healing through chakras, physical movements to strengthen the
                body, and providing emotional support can change lives. For never giving up even
                through adversities — there is always a silver lining awaiting for you."
              </blockquote>
              <ButtonLink to="/book">
                Begin Your Own Journey <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
