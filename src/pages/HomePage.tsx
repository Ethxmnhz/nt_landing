import { ButtonLink } from '../components/ui/ButtonLink'
import { featuredProducts, homeHighlights, site, upcomingRetreats } from '../data/siteData'

export function HomePage() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-left">
          <p className="hero-kicker">{site.tagline}</p>
          <h1>Introducing Naturenergy Healing Sessions</h1>
          <p>
            Synchronize your emotional, physical, and energetic recovery through practical
            consultations designed for real-life challenges.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/book">Register Now</ButtonLink>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-visual-card">
            <p>Naturenergy Program</p>
            <h3>Medical Science and Ancient Wisdom</h3>
          </div>
        </div>
        <div className="hero-dots" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="feature-intro">
        <div className="section-shell feature-grid">
          <div className="feature-copy">
            <h2>Register for Naturenergy Recovery Program - 2026</h2>
            <p>
              Discover the science of personal change with grounded energetic support. This program
              is designed for people navigating intense life phases and needing practical recovery
              structure.
            </p>
            <ButtonLink to="/book">Register Now</ButtonLink>
          </div>
          <div className="feature-video">
            <div className="video-thumb">
              <button type="button" className="play-button" aria-label="Play intro">
                &gt;
              </button>
              <p>What is possible in 10 sessions?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="section-shell">
          <h2>Featured Programs</h2>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article key={product.title} className="product-card">
                <div className="product-thumb">{product.category}</div>
                <div className="product-body">
                  <h3>{product.title}</h3>
                  <p className="product-category">{product.category}</p>
                  <div className="product-footer">
                    <span>{product.price}</span>
                    <a href="/programs">View -&gt;</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-list-section">
        <div className="section-shell">
          <div className="list-column">
            <h2>Upcoming Retreats</h2>
            <ul>
              {upcomingRetreats.map((retreat) => (
                <li key={retreat}>{retreat}</li>
              ))}
            </ul>
            <ButtonLink to="/events">Browse Retreats</ButtonLink>
          </div>
        </div>
      </section>

      <section className="home-highlight-section">
        <div className="section-shell">
          <div className="highlight-grid">
            {homeHighlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ButtonLink to="/resources">{item.cta}</ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
