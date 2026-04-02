import { faqs } from '../data/siteData'

export function FaqPage() {
  return (
    <section className="content-section">
      <div className="section-shell">
        <div className="section-intro">
          <p className="section-tag">FAQ</p>
          <h2>Clarity before you begin</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-item reveal">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
