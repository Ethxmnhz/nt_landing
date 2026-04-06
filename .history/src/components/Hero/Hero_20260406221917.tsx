import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ButtonLink } from '../ui/ButtonLink'

const heroStyles = `
.heroPremium {
  position: relative;
  min-height: 90vh;
  overflow: hidden;
  color: #fff;
  background: #020617;
}

.heroPremiumGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 90vh;
}

/* LEFT */
.heroPremiumContent {
  display: flex;
  align-items: center;
  padding: 80px clamp(24px, 5vw, 72px);
}

.heroPremiumInner {
  max-width: 540px;
}

/* Who it's for */
.heroTag {
  font-size: 13px;
  letter-spacing: 0.12em;
  color: #38bdf8;
  margin-bottom: 16px;
}

/* Headline */
.heroTitle {
  font-size: clamp(2.5rem, 4vw, 3.8rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 20px;
}

/* Highlight */
.heroHighlight {
  color: #22d3ee;
  display: block;
}

/* Sub */
.heroSub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.75);
  margin-bottom: 24px;
  line-height: 1.6;
}

/* Proof */
.heroProof {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 32px;
}

/* CTA */
.heroCtaWrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.heroBtn {
  padding: 16px 28px !important;
  border-radius: 999px !important;
  background: linear-gradient(180deg, #22d3ee, #0284c7) !important;
  font-weight: 600 !important;
  box-shadow: 0 12px 30px rgba(2,132,199,0.35);
  transition: all 0.25s ease;
}

.heroBtn:hover {
  transform: translateY(-2px);
}

/* Risk reversal */
.heroNote {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
}

/* RIGHT IMAGE */
.heroPremiumVisual {
  position: relative;
}

.heroImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heroOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(2,6,23,0.85), transparent);
}

@media (max-width: 1024px) {
  .heroPremiumGrid {
    grid-template-columns: 1fr;
  }

  .heroPremiumVisual {
    height: 50vh;
  }
}
`

export function Hero() {
  return (
    <section className="heroPremium">
      <style>{heroStyles}</style>

      <div className="heroPremiumGrid">

        {/* LEFT */}
        <div className="heroPremiumContent">
          <AnimatedSection>
            <div className="heroPremiumInner">

              {/* WHO */}
              <div className="heroTag">
                FOR PEOPLE DEALING WITH BURNOUT, PAIN, OR DISCONNECTION
              </div>

              {/* RESULT */}
              <h1 className="heroTitle">
                Rewire Your Body & Regain Control
                <span className="heroHighlight">
                  Without Forcing or Fighting It
                </span>
              </h1>

              {/* HOW */}
              <p className="heroSub">
                A guided approach combining nervous system science, breathwork,
                and ancient healing practices to restore how your body naturally works.
              </p>

              {/* PROOF */}
              <div className="heroProof">
                Trusted by individuals recovering from chronic stress, fatigue, and post-trauma shutdown.
              </div>

              {/* CTA */}
              <div className="heroCtaWrap">
                <ButtonLink to="/book" className="heroBtn">
                  Book Free Consultation
                  <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </ButtonLink>

                <div className="heroNote">
                  No pressure. Just a conversation to see if this is right for you.
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT */}
        <div className="heroPremiumVisual">
          <img
            src="/assets/hero.jpg"
            className="heroImage"
            alt="Healing"
          />
          <div className="heroOverlay" />
        </div>

      </div>
    </section>
  )
}