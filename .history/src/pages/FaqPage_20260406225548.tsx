import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { faqs } from '../data/siteData'

export function FaqPage() {
  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">FAQ</p>
            <h1>Clarity before you begin</h1>
            <p className="page-hero-sub">
              Common questions about the healing process, session packages, and what to expect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ LIST ─── */}
      <section className="section-light">
        <div className="section-shell">
          <div className="faq-enhanced">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 80}>
                <FaqAccordion question={faq.question} answer={faq.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STILL HAVE QUESTIONS ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <h2>Still have questions?</h2>
              <p className="section-copy">
                Reach out directly and I'll be happy to answer anything before you book.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <ButtonLink to="/contact">Contact Me</ButtonLink>
                <ButtonLink to="/book" variant="dark">
                  Book Consultation
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
