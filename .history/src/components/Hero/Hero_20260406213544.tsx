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

.heroBg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 18% 20%, rgba(8, 145, 178, 0.18) 0, transparent 28%),
    radial-gradient(circle at 82% 22%, rgba(212, 175, 55, 0.1) 0, transparent 24%),
    linear-gradient(180deg, rgba(2, 6, 23, 0.94) 0%, rgba(2, 6, 23, 0.96) 100%);
}

.heroOrb {
  position: absolute;
  border-radius: 999px;
  filter: blur(90px);
  opacity: 0.22;
}

.heroOrb1 {
  width: 460px;
  height: 460px;
  background: rgba(14, 116, 144, 0.45);
  top: -140px;
  left: -120px;
}

.heroOrb2 {
  width: 340px;
  height: 340px;
  background: rgba(212, 175, 55, 0.24);
  bottom: -120px;
  left: 38%;
}

.heroContainer {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 90vh;
}

.heroPremiumGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 90vh;
}

.heroPremiumContent {
  position: relative;
  display: flex;
  align-items: center;
  padding: 80px clamp(28px, 5vw, 72px);
  background: linear-gradient(135deg, rgba(2, 6, 23, 0.98) 0%, rgba(7, 19, 34, 0.92) 100%);
  overflow: hidden;
}

.heroPremiumContent::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 16% 22%, rgba(8, 145, 178, 0.16) 0, transparent 28%),
    radial-gradient(circle at 82% 78%, rgba(212, 175, 55, 0.12) 0, transparent 24%);
}

.heroPremiumContent .anim-section {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}

.heroPremiumInner {
  position: relative;
  z-index: 1;
  max-width: 540px;
}

.heroAccentLine {
  width: 68px;
  height: 3px;
  border-radius: 999px;
  margin-bottom: 28px;
  background: linear-gradient(90deg, var(--accent) 0%, var(--primary) 100%);
}

.heroPremiumTitle {
  margin: 0 0 16px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.8rem, 5vw, 4.7rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  font-weight: 800;
  color: #f8fbff;
  text-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
  max-width: 11ch;
}

.heroTitleBreak {
  display: block;
}

.heroPremiumSubtitle {
  max-width: 28rem;
  margin: 0 0 28px;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(1rem, 1.45vw, 1.16rem);
  letter-spacing: 0.02em;
}

.heroPremiumCtaWrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}

.heroPremiumBtn {
  padding: 16px 30px !important;
  border-radius: 999px !important;
  background: linear-gradient(180deg, #26a8da 0%, #1287b4 100%) !important;
  color: #fff !important;
  box-shadow: 0 18px 40px rgba(18, 135, 180, 0.35) !important;
  font-weight: 700 !important;
  letter-spacing: 0.01em;
}

.heroPremiumBtn:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 48px rgba(18, 135, 180, 0.45) !important;
}

.heroPremiumVisual {
  position: relative;
  min-height: 90vh;
  overflow: hidden;
}

.heroImageContainer {
  position: absolute;
  inset: 0;
}

.heroImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.heroImageOverlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(2, 6, 23, 0.94) 0%, rgba(2, 6, 23, 0.56) 24%, rgba(2, 6, 23, 0.18) 58%, rgba(2, 6, 23, 0.1) 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, transparent 18%, transparent 82%, rgba(255, 255, 255, 0.08) 100%);
}

.heroVisualAccent {
  position: absolute;
  border-radius: 999px;
  z-index: 2;
  filter: blur(2px);
  opacity: 0.35;
}

.heroVisualAccent1 {
  width: 320px;
  height: 320px;
  top: 10%;
  right: 12%;
  background: radial-gradient(circle, rgba(255, 88, 191, 0.9) 0%, rgba(255, 88, 191, 0) 72%);
}

.heroVisualAccent2 {
  width: 240px;
  height: 240px;
  bottom: 10%;
  left: 8%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(56, 189, 248, 0) 72%);
}

.heroWave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
  z-index: 2;
}

.heroWave svg {
  width: 100%;
  height: 90px;
  fill: var(--bg);
}

@media (max-width: 1024px) {
  .heroPremiumGrid {
    grid-template-columns: 1fr;
  }

  .heroPremiumContent,
  .heroPremiumVisual {
    min-height: 52vh;
  }

  .heroPremiumTitle {
    max-width: 14ch;
  }
}

@media (max-width: 640px) {
  .heroPremium {
    min-height: auto;
  }

  .heroPremiumGrid {
    min-height: auto;
  }

  .heroPremiumContent {
    padding: 56px 20px;
  }

  .heroPremiumTitle {
    font-size: clamp(2.2rem, 11vw, 3rem);
  }

  .heroPremiumCtaWrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .heroPremiumVisual {
    min-height: 38vh;
  }

  .heroVisualAccent1 {
    width: 180px;
    height: 180px;
  }

  .heroVisualAccent2 {
    width: 130px;
    height: 130px;
  }
}
`

export function Hero() {
  return (
    <section className="heroPremium">
      <style>{heroStyles}</style>
      <div className="heroBg">
        <div className="heroOrb heroOrb1" />
        <div className="heroOrb heroOrb2" />
      </div>

      <div className="heroContainer">
        <div className="heroPremiumGrid">
          {/* LEFT: CONTENT */}
          <div className="heroPremiumContent">
            <AnimatedSection>
              <div className="heroPremiumInner">
                {/* Accent line */}
                <div className="heroAccentLine" />

                {/* Main Title */}
                <h1 className="heroPremiumTitle">
                  Reset &amp; Protect Your
                  <span className="heroTitleBreak">Energetic System</span>
                  Naturally
                </h1>

                {/* Subtitle / Meta */}
                <p className="heroPremiumSubtitle">
                  Recovery Alchemist, and Survivorship Voice
                </p>

                {/* Primary CTA */}
                <div className="heroPremiumCtaWrapper">
                  <ButtonLink to="/book" className="heroPremiumBtn">
                    Book Free Consultation
                    <ArrowRight size={18} style={{ marginLeft: 8 }} />
                  </ButtonLink>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: FULL-BLEED IMAGE */}
          <div className="heroPremiumVisual">
            <div className="heroImageContainer">
              <img
                className="heroImage"
                src="/assets/hero.jpg"
                alt="Abstract energetic wave artwork"
              />
              <div className="heroImageOverlay" />
              <div className="heroVisualAccent heroVisualAccent1" />
              <div className="heroVisualAccent heroVisualAccent2" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="heroWave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,60 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
            fill="var(--bg)"
          />
        </svg>
      </div>
    </section>
  )
}
