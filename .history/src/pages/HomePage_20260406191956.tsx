import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { ButtonLink } from '../components/ui/ButtonLink'

const whatYouWillFind = [
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
      'Movements designed to strengthen the body beyond popularized fitness into true functional vitality.',
  },
  {
    title: 'Holistic Assessment',
    description:
      'Evaluation of daily routines, family support, work environment, and emotional well-being for a complete picture.',
  },
]

const thisIsForYou = [
  "You're ready to take ownership of your health and healing",
  'You believe the body has innate healing capabilities',
  'You want to understand the connection between breath, mind, body and intellect',
  "You're willing to change certain areas of your life for better health",
  'You seek prevention over cure and raising your vibrational frequency',
  'You want practical wisdom, not just intellectual concepts',
]

const thisIsNotForYou = [
  'You glorify your struggles without taking action to change',
  "You're looking for a quick fix without putting in the work",
  "You're not open to exploring ancient wisdom alongside modern science",
  'You want someone to just listen to your trauma on repeat',
]

const whatMakesDifferent = [
  {
    title: 'Depth Over Popularity',
    description:
      'Many practitioners speak through intellectual concepts alone. Yoga has been popularised as a physical fitness regime, but the true connection of the physical body to breath, mind, and intellect is often missed.',
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
      'Ishita provided a very clear and insightful introduction to Chakra Yoga. The practical chanting experience was incredibly calming and deeply grounding.',
    author: 'Ren Hui',
  },
  {
    quote:
      'Even at 76, I felt a strong sense of positivity and spiritual connection. The session was powerful and left a lasting impact.',
    author: 'Chandni',
  },
  {
    quote:
      'Ishita guided me through the Kriya process with great clarity and attention. Her passion and knowledge truly reflect in the way she teaches.',
    author: 'Anonymous Client',
  },
  {
    quote:
      'Through self-reflection and yoga, I felt deep grounding and calm. I reconnected with myself and gained practical clarity.',
    author: 'Ajay Sodhi',
  },
  {
    quote:
      'We collaborated in a corporate wellness program and saw meaningful impact. Sessions were thoughtful, practical, and well structured.',
    author: 'Burna Kun',
  },
]

export function HomePage() {
  return (
    <>
      <section className="section-light doc-section">
        <div className="section-shell doc-wrap">
          <AnimatedSection>
            <p className="doc-page-label">Main Page</p>
            <div className="doc-heading-box">Naturenergy</div>
            <div className="doc-box doc-center doc-hero-title">
              <h1>Reset &amp; Protect Your Energetic System Naturally</h1>
            </div>
            <div className="doc-box doc-center doc-subline">Recovery Alchemist, and Survivorship Voice</div>
            <div className="doc-cta-center">
              <ButtonLink to="/book">Book Free Consultation</ButtonLink>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">Meet Ishita</div>
            <div className="doc-box doc-copy-block">
              <p>Modern medicine gave me one perspective.</p>
              <p>Ancient Indian wisdom gave me another.</p>
              <p>My healing demanded both.</p>
              <p>I was thrown ten feet across the road in a severe car accident.</p>
              <p>When I regained consciousness, the world looked the same.</p>
              <p>But nothing in my body felt like my own anymore.</p>
              <p>
                The doctors were kind and also honest. <em>"Manage your expectations."</em> they
                said.
              </p>
              <p>I heard them.</p>
              <p>I chose a different story.</p>
              <p>
                Not out of denial. But out of a deep knowing that the body holds more intelligence
                than any prognosis can measure.
              </p>
              <p>
                I turned to what modern medicine could not offer me; ancient breathwork, conscious
                movement, sound therapy, and practices that do not just treat the body, but awaken
                it.
              </p>
              <p>Slowly, then completely, I returned to myself.</p>
              <p>No physical limitations. No mental ones either.</p>
              <p>Not because I was exceptional. Because the body was always capable of this.</p>
            </div>
            <div className="doc-box doc-copy-block">
              <p>It had simply been waiting to be remembered.</p>
              <p>
                If you are feeling lost right now, exhausted by pain, burnout, fear, or a life that
                no longer feels like yours, I want you to know something.
              </p>
              <p>
                That aliveness you are reaching for? It is not gone. It is buried under everything
                you have been told to accept.
              </p>
              <p>
                Today I work with professionals and individuals who are done shrinking. Who are
                ready to stop managing their limitations and start dismantling them.
              </p>
              <p>
                Together, we use ancient wisdom, nervous system science, and the innate
                intelligence of your body to bring you back fully to yourself.
              </p>
              <p className="doc-strong-quote">"Your body has not failed you. It has been waiting for you to come home."</p>
              <p className="doc-strong-quote">→ If you're ready to feel alive again - let's talk.</p>
              <p className="doc-strong-quote">
                "The most powerful pharmacy you will ever need lives inside you. And I am here to
                help you unlock it."
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">What You Will Find Here</div>
            <div className="doc-list-table">
              {whatYouWillFind.map((item) => (
                <article className="doc-list-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">This Is Your Wake Up Point</div>
            <div className="doc-box doc-center doc-copy-block">
              <p>The pain? The exhaustion? The feeling that your body has given up on you?</p>
              <p>
                It has not. It never did. You've simply been taught to fight it instead of listen
                to it. But now, you are being called into a deeper understanding.
              </p>
              <p>
                Not just to recover, but to rise naturally. And to return to a life where your
                body, mind, and energy work as one, the way they were always meant to.
              </p>
              <div className="doc-grid-three doc-tight">
                <div className="doc-grid-card">
                  <h3>Reset</h3>
                  <p>Cleanse and protect your energetic system.</p>
                </div>
                <div className="doc-grid-card">
                  <h3>Realign</h3>
                  <p>Reconnect your body, mind and breath as one.</p>
                </div>
                <div className="doc-grid-card">
                  <h3>Rise</h3>
                  <p>Live consciously with energy that is fully, naturally yours.</p>
                </div>
              </div>
              <ButtonLink to="/book" variant="secondary">
                Take A Step Forward <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </ButtonLink>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">Who Is This For Is This Path Right For You?</div>
            <div className="doc-grid-two">
              <article className="doc-grid-card doc-list-card">
                <h3>This is for you if...</h3>
                <ul>
                  {thisIsForYou.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="doc-grid-card doc-list-card">
                <h3>This is not for you if...</h3>
                <ul>
                  {thisIsNotForYou.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="doc-grid-two doc-top-gap">
              <article className="doc-grid-card doc-list-card">
                <ul>
                  {thisIsForYou.slice(4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="doc-grid-card" aria-hidden="true" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">What Makes This Different</div>
            <div className="doc-list-table">
              {whatMakesDifferent.map((item) => (
                <article className="doc-list-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">Ready To Transform?</div>
            <div className="doc-box doc-center">
              <h2>Start From Where You Are</h2>
              <p>You do not need everything figured out, just the willingness to begin.</p>
              <div className="doc-cta-center">
                <ButtonLink to="/book">Book Free Consultation</ButtonLink>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="doc-heading-box">Testimonials Real People. Real Energy. Real Transformation</div>
            <div className="doc-grid-three">
              {testimonials.map((item, index) => (
                <article className="doc-grid-card doc-testimonial" key={`${item.author}-${index}`}>
                  <p>{item.quote}</p>
                  <p className="doc-author">- {item.author}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
