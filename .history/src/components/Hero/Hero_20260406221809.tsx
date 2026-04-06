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

/* Background */
.heroBg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 20%, rgba(8,145,178,0.12), transparent 30%),
    radial-gradient(circle at 80% 25%, rgba(212,175,55,0.08), transparent 25%),
    linear-gradient(180deg, #020617 0%, #020617 100%);
}

/* Grid */
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
  max-width: 520px;
}

/* Small Label */
.heroLabel {
  font-size: 12px;
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.5);
  margin-bottom: 18px;
}

/* Accent line */
.heroAccentLine {
  width: 60px;
  height: 3px;
  border-radius: 999px;
  margin-bottom: 24px;
  background: linear-gradient(90deg, #22d3ee, #0ea5e9);
}

/* Title */
.heroPremiumTitle {
  margin: 0 0 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.04em;
  max-width: 14ch;
}

.heroTitleBreak {
  display: block;
  color: #38bdf8;
}

/* Subtitle */
.heroPremiumSubtitle {
  margin: 0 0 32px;
  color: rgba(255,255,255,0.7);
  font-size: 1.05rem;
  line-height: 1.6;
}

/* CTA */
.heroPremiumCtaWrapper {
  display: flex;
  gap: 16px;
}

.heroPremiumBtn {
  padding: 16px 28px !important;
  border-radius: 999px !important;
  background: linear-gradient(180deg, #22d3ee, #0284c7) !important;
  color: #fff !important;
  font-weight: 600 !important;
  box-shadow: 0 12px 30px rgba(2,132,199,0.35);
  transition: all 0.25s ease;
}

.heroPremiumBtn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 18px 40px rgba(2,132,199,0.45);
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

/* Overlay (important fix) */
.heroImageOverlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.4) 40%, transparent 70%);
}

/* Glow accents */
.heroVisualAccent {
  position: absolute;
  border-radius: 999px;
  filter: blur(80px);
  opacity: 0.25;
}

.heroVisualAccent1 {
  width: 260px;
  height: 260px;
  top: 15%;
  right: 10%;
  background: #22d3ee;
}

.heroVisualAccent2 {
  width: 200px;
  height: 200px;
  bottom: 10%;
  left: 10%;
  background: #0ea5e9;
}

/* Responsive */
@media (max-width: 1024px) {
  .heroPremiumGrid {
    grid-template-columns: 1fr;
  }

  .heroPremiumVisual {
    height: 50vh;
  }
}

@media (max-width: 640px) {
  .heroPremiumContent {
    padding: 60px 20px;
  }

  .heroPremiumTitle {
    font-size: 2.4rem;
  }
}
`

export function Hero() {
  return (
    <section className="heroPremium">
      <style>{heroStyles}</style>

      <div className="heroBg" />

      <div className="heroPremiumGrid">
        {/* LEFT */}
        <div className="heroPremiumContent">
          <AnimatedSection>
            <div className="heroPremiumInner">

              <div className="heroLabel">MEET ISHITA</div>

              <div className="heroAccentLine" />

              <h1 className="heroPremiumTitle">
                Reset & Protect Your
                <span className="heroTitleBreak">
                  Energetic System Naturally
                </span>
              </h1>

              <p className="heroPremiumSubtitle">
                Bridging modern recovery science with ancient wisdom to restore
                your body’s natural intelligence.
              </p>

              <div className="heroPremiumCtaWrapper">
                <ButtonLink to="/book" className="heroPremiumBtn">
                  Book Free Consultation
                  <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </ButtonLink>
              </div>

            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT */}
        <div className="heroPremiumVisual">
          <img
            className="heroImage"
            src="/assets/hero.jpg"
            alt="Healing and energy concept"
          />

          <div className="heroImageOverlay" />
          <div className="heroVisualAccent heroVisualAccent1" />
          <div className="heroVisualAccent heroVisualAccent2" />
        </div>
      </div>
    </section>
  )
}