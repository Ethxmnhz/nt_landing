import { AnimatedSection } from '../components/ui/AnimatedSection'

export function PackagesPage() {
  return (
    <>
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-page-label">Product Page</div>
            <article className="doc-border-block">
              <h1 className="doc-soon-title">Coming Soon</h1>
              <p className="doc-inline-quote">
                We are creating something that your body, mind and energy have been waiting for.
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
            <article className="doc-note-block">
              <h2>Additional Suggestion</h2>
              <p>
                We can add an interactive quiz section where users answer thoughtful
                psychological questions. Based on their responses, they can be guided to a
                personalized results page that naturally leads to booking a consultation,
                improving engagement and conversions.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
