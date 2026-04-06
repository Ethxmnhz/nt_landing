import { ButtonLink } from '../components/ui/ButtonLink'
import { AnimatedSection } from '../components/ui/AnimatedSection'

const findHere = [
  {
    title: 'Energy Healing',
    description:
      'Chakra-based energy work to reset and protect your energetic system, addressing blockages at their root.',
  },
  {
    title: 'Breath & Mind Connection',
    description:
      'Understanding how breath connects to mind, intellect, nervous system, sleep quality, and thinking ability.',
  },
  {
    title: 'Physical Strengthening',
    description:
      'Movements designed to strengthen the body, going beyond popularized fitness to true functional vitality.',
  },
  {
    title: 'Holistic Assessment',
    description:
      'Evaluation of daily routines, family support, work environment, and emotional well-being for a complete picture.',
  },
]

const rightForYou = [
  "You're ready to take ownership of your health and healing",
  'You believe the body has innate healing capabilities',
  'You want to understand the connection between breath, mind, body and intellect',
  "You're willing to change certain areas of your life for better health",
  'You seek prevention over cure and raising your vibrational frequency',
  'You want practical wisdom, not just intellectual concepts',
]

const notRightForYou = [
  'You glorify your struggles without taking action to change',
  "You're looking for a quick fix without putting in the work",
  "You're not open to exploring ancient wisdom alongside modern science",
  'You want someone to just listen to your trauma on repeat',
]

const whatMakesDifferent = [
  {
    title: 'Depth Over Popularity',
    description:
      'Many practitioners speak through intellectual concepts alone. Yoga has been popularized as a physical fitness regime, but the true connection of the physical body to breath, mind, and intellect, and how it impacts the nervous system, sleep quality, and food habits, is often missing.',
  },
  {
    title: 'Practical Experience',
    description: 'Not theories alone, lived wisdom from healing after a life-altering accident.',
  },
  {
    title: 'Ancient + Modern Wisdom',
    description:
      'Indian philosophies understood through an international perspective, bridged with medical science.',
  },
]

const testimonials = [
  {
    quote:
      'Ishita provided a very clear and insightful introduction to Chakra Yoga, which genuinely sparked my interest to explore it further. The practical chanting experience was incredibly calming and left me fully relaxed and at ease.',
    author: 'Ren Hui',
  },
  {
    quote:
      'Even at 76, the session gave me a strong sense of positivity and a deeper spiritual connection. The Maha Mrityunjaya mantra practice was especially powerful and left a lasting impact.',
    author: 'Chandni',
  },
  {
    quote:
      'Ishita guided me through Kriya with great clarity and attention. Her passion, knowledge, and dedication to yoga truly reflect in the way she teaches and guides others.',
    author: 'Client Testimonial',
  },
  {
    quote:
      'A healthy mind and a healthy body go hand in hand, and my session with Ishita truly brought both together. I felt calm and stillness both mentally and physically.',
    author: 'Ajay Sodhi',
  },
  {
    quote:
      'We collaborated with Ishita for employee wellness sessions. The sessions were thoughtfully structured, combining practical techniques with simple explanations around energy balance and well-being.',
    author: 'Burna Kun',
  },
]

export function HomePage() {
  return (
    <>
      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-page-label">Main Page</div>
            <div className="doc-stack">
              <div className="doc-heading-box">Naturenergy</div>
              <div className="doc-hero-box">
                <h1>Reset & Protect Your Energetic System Naturally</h1>
              </div>
              <div className="doc-subhero-box">Recovery Alchemist, and Survivorship Voice</div>
              <div className="doc-cta-box">
                <ButtonLink to="/book" variant="dark">
                  Book Free Consultation
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">Meet Ishita</div>
            <article className="doc-border-block doc-story-copy">
              <p>Modern medicine gave me one perspective.</p>
              <p>Ancient Indian wisdom gave me another.</p>
              <p>My healing demanded both.</p>
              <p>
                I was thrown ten feet across the road in a severe car accident. When I regained
                consciousness, the world looked the same, but nothing in my body felt like my own
                anymore.
              </p>
              <p>
                The doctors were kind and honest. "Manage your expectations," they said. I heard
                them, and I chose a different story.
              </p>
              <p>
                Not out of denial, but out of a deep knowing that the body holds more intelligence
                than any prognosis can measure.
              </p>
              <p>
                I turned to what modern medicine could not offer me; ancient breathwork, conscious
                movement, sound therapy, and practices that do not just treat the body, but awaken
                it.
              </p>
              <p>
                Slowly, then completely, I returned to myself. No physical limitations. No mental
                ones either. Not because I was exceptional. Because the body was always capable of
                this.
              </p>
              <p>It had simply been waiting to be remembered.</p>
              <p>
                If you are feeling lost right now, exhausted by pain, burnout, fear, or a life
                that no longer feels like yours, I want you to know something.
              </p>
              <p>
                That aliveness you are reaching for is not gone. It is buried under everything you
                have been told to accept.
              </p>
              <p>
                Today I work with professionals and individuals who are done shrinking, who are
                ready to stop managing their limitations and start dismantling them.
              </p>
              <p>
                Together, we use ancient wisdom, nervous system science, and the innate
                intelligence of your body to bring you back fully to yourself.
              </p>
              <p className="doc-quote-strong">Your body has not failed you. It has been waiting for you to come home.</p>
              <p className="doc-quote-strong">If you are ready to feel alive again, let us talk.</p>
              <p className="doc-quote-strong">
                The most powerful pharmacy you will ever need lives inside you. And I am here to
                help you unlock it.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">What You Will Find Here</div>
            <div className="doc-border-list">
              {findHere.map((item) => (
                <article key={item.title} className="doc-list-row">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">This Is Your Wake Up Point</div>
            <article className="doc-border-block doc-centered-block">
              <p>The pain? The exhaustion? The feeling that your body has given up on you?</p>
              <p>
                It has not. It never did. You have simply been taught to fight it instead of
                listen to it. But now, you are being called into a deeper understanding.
              </p>
              <p>
                Not just to recover, but to rise naturally, and to return to a life where your
                body, mind, and energy work as one, the way they were always meant to.
              </p>
              <div className="doc-three-grid">
                <div className="doc-grid-cell">
                  <h3>Reset</h3>
                  <p>Cleanse and protect your energetic system</p>
                </div>
                <div className="doc-grid-cell">
                  <h3>Realign</h3>
                  <p>Reconnect your body, mind and breath as one</p>
                </div>
                <div className="doc-grid-cell">
                  <h3>Rise</h3>
                  <p>Live consciously with energy that is fully, naturally yours</p>
                </div>
              </div>
              <div className="doc-cta-strip">
                <ButtonLink to="/book" variant="dark">
                  Take A Step Forward
                </ButtonLink>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">Who Is This For</div>
            <div className="doc-subtitle-box">Is This Path Right for You?</div>
            <div className="doc-two-grid">
              <article className="doc-grid-panel">
                <h3>This is for you if...</h3>
                <ul>
                  {rightForYou.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="doc-grid-panel">
                <h3>This is not for you if...</h3>
                <ul>
                  {notRightForYou.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">What Makes This Different</div>
            <div className="doc-border-list">
              {whatMakesDifferent.map((item) => (
                <article key={item.title} className="doc-list-row">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">Ready To Transform?</div>
            <article className="doc-border-block doc-centered-block">
              <h2>Start From Where You Are</h2>
              <p>You do not need everything figured out, just the willingness to begin.</p>
              <div className="doc-cta-strip">
                <ButtonLink to="/book" variant="dark">
                  Book Free Consultation
                </ButtonLink>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="doc-heading-box">Testimonials</div>
            <div className="doc-subtitle-box">Real People. Real Energy. Real Transformation</div>
            <div className="doc-testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.author} className="doc-testimonial-card">
                  <p>{item.quote}</p>
                  <p className="doc-testimonial-author">{item.author}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
