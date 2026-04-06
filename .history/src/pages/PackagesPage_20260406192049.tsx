import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

export function PackagesPage() {
  return (
    <>
      <section className="section-light doc-section">
        <div className="section-shell doc-wrap">
          <AnimatedSection>
            <p className="doc-page-label">Product Page</p>
            <div className="doc-box doc-center">
              <h2>Coming Soon</h2>
              <p className="doc-quote">
                "We are creating something that your body, mind and energy have been waiting for."
              </p>
              <p>
                Curated programs, healing tools and conscious living resources, built from ancient
                wisdom, backed by science and rooted in real lived experience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-box doc-copy-block">
              <p className="doc-accent-label">Additional suggestion</p>
              <p>
                We can also add an interactive quiz section on the website where users answer a set
                of thoughtful psychological questions to help them reflect on what they might be
                missing or struggling with.
              </p>
              <p>
                Based on their responses, they can be guided to a personalized results page, which
                naturally leads them to book a free consultation call, making the entire experience
                more engaging, insightful, and conversion-focused.
              </p>
              <div className="doc-top-gap">
                <ButtonLink to="/book" variant="secondary">
                  Book Free Consultation Call
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
