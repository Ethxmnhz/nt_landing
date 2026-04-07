import { BookOpen, Sparkles, WandSparkles } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
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


    </>
  )
}
