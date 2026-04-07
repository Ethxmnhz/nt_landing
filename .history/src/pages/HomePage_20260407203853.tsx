import {
  Orbit,
  Activity,
  HeartHandshake,
  UserCircle,
  Leaf,
  ArrowRight,
  Sparkles,
  HandHeart,
} from 'lucide-react'
import { ButtonLink } from '../components/ui/ButtonLink'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { useAutoScroll } from '../components/hooks/useAutoScroll'
import { consultationProcess, healingPillars, programs, site } from '../data/siteData'

const pillarIcons = [
  <Orbit size={32} strokeWidth={1.8} />,
  <Activity size={32} strokeWidth={1.8} />,
  <HeartHandshake size={32} strokeWidth={1.8} />,
]

const testimonials = [
  {
    quote:
      'Ishita created a safe, healing space where I could finally breathe. Every session left me lighter, clearer, and more grounded.',
    name: 'Ren Hui',
    role: 'Chakra Yoga Session',
  },
  {
    quote:
      'At 76, I felt renewed optimism and spiritual clarity. The mantra practice was powerful and stayed with me long after.',
    name: 'Chandni',
    role: 'Maha Mrityunjaya Practice',
  },
  {
    quote:
      'Her kriya guidance was precise and compassionate. The progress I felt in just a few sessions was remarkable.',
    name: 'Client Review',
    role: 'Kriya Process',
    highlight: true,
  },
  {
    quote:
      'The experience was calming yet energizing. I walked away with clarity and the confidence to take decisive action.',
    name: 'Ajay Sodhi',
    role: 'Mind-Body Reset',
  },
  {
    quote:
      'Our team felt calm, centered, and mentally refreshed. I highly recommend Ishita for corporate wellness programs.',
    name: 'Burna Kun',
    role: 'Corporate Sessions',
  },
]

export function HomePage() {
  useAutoScroll('testimonialScroll', { speed: 28, pauseOnHover: true, loop: true })

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="section-shell hero-content">
          <p className="hero-kicker">
            <Sparkles size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            {site.tagline}
          </p>
          <h1>{site.heroTitle}</h1>
          <p className="hero-subtitle">{site.heroSubtitle}</p>
          <div className="hero-actions">
            <ButtonLink to="/book">Book Consultation</ButtonLink>
            <ButtonLink to="/story" variant="outline">
              My Story
            </ButtonLink>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,60 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
              fill="var(--bg)"
            />
          </svg>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="intro-grid">
              <div className="intro-photo">
                <div className="intro-photo-placeholder">
                  <UserCircle size={56} strokeWidth={1.2} />
                  <p>Founder Photo</p>
                </div>
              </div>
              <div className="intro-copy">
                <p className="section-tag">Welcome to Naturenergy</p>
                <h2>Healing is not just physical. It is emotional, mental, and energetic.</h2>
                <p className="section-copy">
                  I work on the overall aspect of each individual. During the first consultation, I
                  ask about daily routines, family support, and work environment — to gauge if the
                  individual is well supported emotionally. Sometimes, even with supportive people
                  around, they still feel alone.
                </p>
                <ButtonLink to="/about" variant="dark">
                  Learn About My Approach <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── HEALING PILLARS ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">How I Work</p>
              <h2>Three pillars of integrated healing</h2>
              <p className="section-copy">
                Every session is designed around these core modalities, adapted to your unique
                recovery phase and needs.
              </p>
            </div>
          </AnimatedSection>
          <div className="pillars-grid">
            {healingPillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 120}>
                <article className="pillar-card">
                  <span className="pillar-icon">{pillarIcons[i]}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">The Process</p>
              <h2>How your healing journey unfolds</h2>
            </div>
          </AnimatedSection>
          <div className="process-grid">
            {consultationProcess.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150}>
                <article className="process-card">
                  <span className="process-number">{String(step.step).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PACKAGES PREVIEW ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Session Packages</p>
              <h2>Structured support for every recovery stage</h2>
              <p className="section-copy">
                Currently offering 5–10 sessions per package, tailored to your personal, emotional,
                and physical needs.
              </p>
            </div>
          </AnimatedSection>
          <div className="packages-grid">
            {programs.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 120}>
                <article className="package-card">
                  <p className="package-sessions">{pkg.sessions}</p>
                  <h3>{pkg.name}</h3>
                  <p className="package-ideal">{pkg.ideal}</p>
                  <p>{pkg.summary}</p>
                  <ButtonLink to="/book" variant="dark">
                    Book This Package
                  </ButtonLink>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="centered-cta">
              <ButtonLink to="/packages">
                View All Package Details <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STORY TEASER ─── */}
      <section className="section-story-teaser">
        <div className="section-shell">
          <AnimatedSection>
            <div className="story-teaser-inner">
              <div className="story-teaser-content">
                <p className="section-tag">The Story Behind Naturenergy</p>
                <h2>From adversity to service-led healing</h2>
                <p className="section-copy">
                  A serious accident became the turning point. What began as a physical recovery
                  journey revealed deeper emotional and energetic dimensions. Through personal
                  healing, the bridge between medical science and ancient wisdom became clear.
                </p>
                <p className="quote-line">
                  "For never giving up even through adversities, there is always a silver lining
                  awaiting for you."
                </p>
                <ButtonLink to="/story" variant="outline">
                  Read Full Story <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </ButtonLink>
              </div>
              <div className="story-teaser-visual">
                <div className="story-photo-placeholder">
                  <HandHeart size={48} strokeWidth={1.2} />
                  <p>Personal Journey Photo</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Testimonials</p>
              <h2>Real People. Real Energy. Real Transformation.</h2>
              <p className="section-copy">
                These stories reflect the calm, clarity, and emotional strength clients experience
                through Naturenergy sessions.
              </p>
            </div>
          </AnimatedSection>
          <div className="doc-testimonial-grid" id="testimonialScroll">
            {testimonials.map((item) => (
              <AnimatedSection key={item.name} delay={0}>
                <article
                  className={`doc-testimonial-card${item.highlight ? ' doc-testimonial-card-highlight' : ''}`}
                >
                  <p>"{item.quote}"</p>
                  <div className="testimonial-meta">
                    <div className="testimonial-avatar">
                      {item.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="testimonial-name">{item.name}</p>
                      <p className="testimonial-role">{item.role}</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="section-final-cta">
        <div className="section-shell">
          <AnimatedSection>
            <div className="final-cta-inner">
              <Leaf size={40} strokeWidth={1.5} style={{ marginBottom: 16, opacity: 0.6 }} />
              <h2>Begin your healing journey today</h2>
              <p>
                Take the first step toward structured, compassionate recovery support that addresses
                your complete well-being.
              </p>
              <div className="hero-actions">
                <ButtonLink to="/book">Book Your Consultation</ButtonLink>
                <ButtonLink href={site.whatsappUrl} variant="outline">
                  Chat on WhatsApp
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
