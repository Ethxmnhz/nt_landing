import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ButtonLink } from '../ui/ButtonLink'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.heroPremium}>
      <div className={styles.heroBg}>
        <div className={`${styles.heroOrb} ${styles.heroOrb1}`} />
        <div className={`${styles.heroOrb} ${styles.heroOrb2}`} />
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroPremiumGrid}>
          {/* LEFT: CONTENT */}
          <div className={styles.heroPremiumContent}>
            <AnimatedSection>
              <div className={styles.heroPremiumInner}>
                {/* Accent line */}
                <div className={styles.heroAccentLine} />

                {/* Main Title */}
                <h1 className={styles.heroPremiumTitle}>
                  Reset &amp; Protect Your
                  <span className={styles.heroTitleBreak}>Energetic System</span>
                  Naturally
                </h1>

                {/* Subtitle / Meta */}
                <p className={styles.heroPremiumSubtitle}>
                  Recovery Alchemist, and Survivorship Voice
                </p>

                {/* Divider */}
                <div className={styles.heroPremiumDivider} />

                {/* Primary CTA */}
                <div className={styles.heroPremiumCtaWrapper}>
                  <ButtonLink to="/book" className={styles.heroPremiumBtn}>
                    Book Free Consultation
                    <ArrowRight size={18} style={{ marginLeft: 8 }} />
                  </ButtonLink>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: FULL-BLEED IMAGE */}
          <div className={styles.heroPremiumVisual}>
            <div className={styles.heroImageContainer}>
              <img
                className={styles.heroImage}
                src="/assets/hero.jpg"
                alt="Abstract energetic wave artwork"
              />
              <div className={styles.heroImageOverlay} />
              <div className={`${styles.heroVisualAccent} ${styles.heroVisualAccent1}`} />
              <div className={`${styles.heroVisualAccent} ${styles.heroVisualAccent2}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className={styles.heroWave}>
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
