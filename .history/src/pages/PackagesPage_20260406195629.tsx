import { ArrowRight, Sparkles } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

export function PackagesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">Product Page</p>
            <h1>Curated offerings are coming soon</h1>
            <p className="page-hero-sub">
              We are creating something your body, mind, and energy have been waiting for.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <article className="doc-coming-card">
              <h2>Coming Soon</h2>
              <p className="doc-coming-quote">
                "We are creating something that your body, mind and energy have been waiting for."
              </p>
              <p>
                Curated programs, healing tools and conscious living resources, built from ancient
                wisdom, backed by science and rooted in real lived experience.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Additional Suggestion</p>
              <h2>Interactive Quiz Funnel</h2>
              <p className="section-copy">
                We can add an interactive quiz section where visitors answer thoughtful
                psychological questions. Based on responses, they receive personalized results that
                naturally guide them to book a free consultation.
              </p>
              <div className="hero-actions doc-center-actions" style={{ justifyContent: 'center' }}>
                <ButtonLink to="/book">
                  Book Free Consultation <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  <Sparkles size={16} style={{ marginRight: 6 }} /> Discuss Product Roadmap
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
