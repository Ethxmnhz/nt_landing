import {
  Activity,
  Brain,
  Compass,
  HandHeart,
  Leaf,
  ArrowRight,
  ShieldPlus,
  Sparkles,
} from 'lucide-react'
import { ButtonLink } from '../components/ui/ButtonLink'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { site } from '../data/siteData'

export function HomePage() {
  return (
    <>
      {/* ─── MAIN PAGE HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="section-shell hero-content">
          <p className="hero-kicker">
            <Sparkles size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Main Page
          </p>
          <h1>Naturenergy</h1>
          <p className="hero-subtitle">Reset &amp; Protect Your Energetic System Naturally</p>
          <p className="doc-hero-meta">Recovery Alchemist, and Survivorship Voice</p>
          <div className="hero-actions">
            <ButtonLink to="/book">Book Free Consultation</ButtonLink>
            <ButtonLink to="/about" variant="outline">
              Meet Ishita
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

      {/* ─── MEET ISHITA ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Meet Ishita</p>
              <h2>Modern medicine gave me one perspective. Ancient Indian wisdom gave me another.</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="doc-story-card">
              <p>
                My healing demanded both. I was thrown ten feet across the road in a severe car
                accident. When I regained consciousness, the world looked the same, but nothing in
                my body felt like my own anymore.
              </p>
              <p>
                The doctors were kind and honest. "Manage your expectations," they said. I heard
                them. I chose a different story.
              </p>
              <p>
                I turned to what modern medicine could not offer me: ancient breathwork, conscious
                movement, sound therapy, and practices that do not just treat the body, but awaken
                it.
              </p>
              <p>
                Slowly, then completely, I returned to myself. No physical limitations. No mental
                ones either.
              </p>
              <p className="doc-story-quote">
                Not because I was exceptional. Because the body was always capable of this.
              </p>
              <p>
                It had simply been waiting to be remembered.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHAT YOU WILL FIND HERE ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">What You Will Find Here</p>
              <h2>A practical path back to full aliveness</h2>
              <p className="section-copy">
                Together, we use ancient wisdom, nervous system science, and the innate
                intelligence of your body to bring you back fully to yourself.
              </p>
            </div>
          </AnimatedSection>
          <div className="doc-feature-grid">
            <AnimatedSection delay={0}>
              <article className="doc-feature-card">
                <span className="service-icon">
                  <ShieldPlus size={30} strokeWidth={1.8} />
                </span>
                <h3>Energy Healing</h3>
                <p>
                  Chakra-based energy work to reset and protect your energetic system, addressing
                  blockages at their root.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <article className="doc-feature-card">
                <span className="service-icon">
                  <Brain size={30} strokeWidth={1.8} />
                </span>
                <h3>Breath &amp; Mind Connection</h3>
                <p>
                  Understanding how breath connects to mind, intellect, nervous system, sleep
                  quality, and thinking ability.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <article className="doc-feature-card">
                <span className="service-icon">
                  <Activity size={30} strokeWidth={1.8} />
                </span>
                <h3>Physical Strengthening</h3>
                <p>
                  Movements designed to strengthen the body, going beyond popularized fitness to
                  true functional vitality.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <article className="doc-feature-card">
                <span className="service-icon">
                  <Compass size={30} strokeWidth={1.8} />
                </span>
                <h3>Holistic Assessment</h3>
                <p>
                  Evaluation of daily routines, family support, work environment, and emotional
                  well-being for a complete picture.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── WAKE UP POINT ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">This Is Your Wake Up Point</p>
              <h2>Not just to recover. To rise naturally.</h2>
              <p className="section-copy">
                The pain? The exhaustion? The feeling that your body has given up on you? It has
                not. It never did. You are being called into a deeper understanding.
              </p>
            </div>
          </AnimatedSection>
          <div className="doc-three-up">
            <AnimatedSection delay={0}>
              <article className="doc-mini-card">
                <h3>Reset</h3>
                <p>Cleanse and protect your energetic system.</p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <article className="doc-mini-card">
                <h3>Realign</h3>
                <p>Reconnect your body, mind, and breath as one.</p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <article className="doc-mini-card">
                <h3>Rise</h3>
                <p>Live consciously with energy that is fully, naturally yours.</p>
              </article>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <div className="centered-cta">
              <ButtonLink to="/book" variant="dark">
                Take A Step Forward <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">Who Is This For</p>
              <h2>Is this path right for you?</h2>
            </div>
          </AnimatedSection>
          <div className="doc-two-col">
            <AnimatedSection delay={0}>
              <article className="doc-list-card">
                <h3>This is for you if…</h3>
                <ul className="doc-bullet-list">
                  <li>You're ready to take ownership of your health and healing.</li>
                  <li>You believe the body has innate healing capabilities.</li>
                  <li>
                    You want to understand the connection between breath, mind, body, and
                    intellect.
                  </li>
                  <li>You're willing to change parts of your life for better health.</li>
                  <li>You seek prevention over cure and raising your vibrational frequency.</li>
                  <li>You want practical wisdom, not just intellectual concepts.</li>
                </ul>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <article className="doc-list-card">
                <h3>This is not for you if…</h3>
                <ul className="doc-bullet-list">
                  <li>You glorify your struggles without taking action to change.</li>
                  <li>You're looking for a quick fix without putting in the work.</li>
                  <li>
                    You're not open to exploring ancient wisdom alongside modern science.
                  </li>
                  <li>You want someone to only listen to your trauma on repeat.</li>
                </ul>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── WHAT MAKES THIS DIFFERENT ─── */}
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">What Makes This Different</p>
              <h2>Depth over popularity</h2>
            </div>
          </AnimatedSection>
          <div className="doc-difference-grid">
            <AnimatedSection delay={0}>
              <article className="doc-diff-card">
                <h3>Depth Over Popularity</h3>
                <p>
                  Many practitioners speak through concepts alone. This work focuses on the deeper
                  connection of body, breath, mind, and intellect, and how it affects sleep,
                  nervous system, and daily function.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <article className="doc-diff-card">
                <h3>Practical Experience</h3>
                <p>
                  Not theories alone. Lived wisdom from healing after a life-altering accident,
                  combined with real world application.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <article className="doc-diff-card">
                <h3>Ancient + Modern Wisdom</h3>
                <p>
                  Indian philosophies understood through an international perspective, bridged with
                  modern science for meaningful and sustainable transformation.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── READY TO TRANSFORM ─── */}
      <section className="section-final-cta">
        <div className="section-shell">
          <AnimatedSection>
            <div className="final-cta-inner doc-ready-panel">
              <Leaf size={40} strokeWidth={1.5} style={{ marginBottom: 16, opacity: 0.6 }} />
              <p className="section-tag">Ready To Transform?</p>
              <h2>Start from where you are</h2>
              <p>You do not need everything figured out, just the willingness to begin.</p>
              <div className="hero-actions">
                <ButtonLink to="/book">Book Free Consultation</ButtonLink>
                <ButtonLink href={site.whatsappUrl} variant="outline">
                  Chat on WhatsApp
                </ButtonLink>
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
            </div>
          </AnimatedSection>
          <div className="doc-testimonial-grid">
            <AnimatedSection delay={0}>
              <article className="doc-testimonial-card">
                <p>
                  "Ishita provided a clear and insightful introduction to chakra yoga, which truly
                  sparked my interest. The practical chanting experience was calming to the point
                  where I felt completely relaxed and at ease."
                </p>
                <p className="doc-sign">Ren Hui</p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={80}>
              <article className="doc-testimonial-card">
                <p>
                  "Even at 76, this session gave me a strong sense of positivity and deeper
                  spiritual connection. The Maha Mrityunjaya mantra practice was especially powerful
                  and left a lasting impact."
                </p>
                <p className="doc-sign">Chandni</p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={160}>
              <article className="doc-testimonial-card">
                <p>
                  "Ishita guided me through kriya process with great clarity. Her passion,
                  knowledge, and dedication reflect in the way she teaches and supports others."
                </p>
                <p className="doc-sign">Client Review</p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={240}>
              <article className="doc-testimonial-card">
                <p>
                  "A healthy mind and healthy body go hand in hand. Through self-reflection and
                  yoga, I felt calm and stillness both mentally and physically. I found clarity and
                  confidence to make decisive action."
                </p>
                <p className="doc-sign">Ajay Sodhi</p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={320}>
              <article className="doc-testimonial-card">
                <p>
                  "Our employees felt calm, balanced, and mentally refreshed after corporate chakra
                  sessions. I highly recommend Ishita for both corporate and individual wellness
                  journeys."
                </p>
                <p className="doc-sign">Burna Kun</p>
              </article>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <div className="centered-cta">
              <ButtonLink to="/story" variant="secondary">
                Read The Journey <HandHeart size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
