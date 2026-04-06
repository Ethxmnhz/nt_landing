import { ArrowRight, BookOpen, Sparkles, WandSparkles } from 'lucide-react'
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
            <div className="packages-coming-showcase">
              <div className="packages-coming-header">
                <div className="packages-coming-tag">Launching Soon</div>
                <h2 className="packages-coming-title">Curated Offerings Coming</h2>
                <p className="packages-coming-desc">
                  We are creating something that your body, mind, and energy have been waiting for.
                  Structured programs, healing tools, and conscious resources—all built from ancient
                  wisdom, backed by science, and rooted in real lived experience.
                </p>
              </div>
              <div className="packages-coming-items">
                <AnimatedSection delay={80}>
                  <article className="packages-coming-item">
                    <div className="packages-coming-icon">
                      <BookOpen size={28} strokeWidth={1.8} />
                    </div>
                    <h3>Curated Programs</h3>
                    <p>Structured journeys built for progressive transformation and embodied healing.</p>
                  </article>
                </AnimatedSection>
                <AnimatedSection delay={160}>
                  <article className="packages-coming-item">
                    <div className="packages-coming-icon">
                      <WandSparkles size={28} strokeWidth={1.8} />
                    </div>
                    <h3>Healing Tools</h3>
                    <p>Daily practices designed for consistency and deep nervous system support.</p>
                  </article>
                </AnimatedSection>
                <AnimatedSection delay={240}>
                  <article className="packages-coming-item">
                    <div className="packages-coming-icon">
                      <Sparkles size={28} strokeWidth={1.8} />
                    </div>
                    <h3>Conscious Resources</h3>
                    <p>Knowledge that translates directly into embodied daily action and transformation.</p>
                  </article>
                </AnimatedSection>
              </div>
            </div>
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
              <div className="doc-flow-grid">
                <article className="doc-flow-step">
                  <span>01</span>
                  <h3>Reflect</h3>
                  <p>Visitors answer guided prompts about current challenges and energy levels.</p>
                </article>
                <article className="doc-flow-step">
                  <span>02</span>
                  <h3>Reveal</h3>
                  <p>They receive personalized insight with practical direction and clarity.</p>
                </article>
                <article className="doc-flow-step">
                  <span>03</span>
                  <h3>Respond</h3>
                  <p>A contextual CTA invites them to book a consultation with confidence.</p>
                </article>
              </div>
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
