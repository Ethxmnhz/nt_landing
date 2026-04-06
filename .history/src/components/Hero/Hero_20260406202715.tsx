import { ArrowRight, HandHeart } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ButtonLink } from '../ui/ButtonLink'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.heroPremium}>
      <div className={styles.heroBg}>
        <div className={`${styles.heroOrb} ${styles.heroOrb1}`} />
        <div className={`${styles.heroOrb} ${styles.heroOrb2}`} />
        <div className={`${styles.heroOrb} ${styles.heroOrb3}`} />
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
                  Reset <span className={styles.heroHighlight}>&</span> Protect Your Energetic System Naturally
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
                  <p className={styles.heroPremiumCtaMeta}>
                    30-minute personalized assessment
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: FULL-WIDTH IMAGE */}
          <div className={styles.heroPremiumVisual}>
            <AnimatedSection delay={200}>
              <div className={styles.heroImageContainer}>
                {/* Background wallpaper effect */}
                <div className={styles.heroImageBg} />
                
                {/* Icon placeholder */}
                <div className={styles.heroImagePlaceholder}>
                  <HandHeart size={72} strokeWidth={1.2} />
                  <p>Ishita's Healing Journey</p>
                </div>

                {/* Decorative accents */}
                <div className={`${styles.heroVisualAccent} ${styles.heroVisualAccent1}`} />
                <div className={`${styles.heroVisualAccent} ${styles.heroVisualAccent2}`} />
              </div>
            </AnimatedSection>
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
