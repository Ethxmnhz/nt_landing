/* ═════════════════════════════════════════════════════════════
   PREMIUM HERO V2 - CLEAN, BALANCED, PROFESSIONAL
═════════════════════════════════════════════════════════════ */

.heroPremium {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--gradient-hero);
  color: #ffffff;
}

/* BACKGROUND ORBS - MORE SUBTLE */
.heroBg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.heroOrb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
}

.heroOrb1 {
  width: 500px;
  height: 500px;
  background: #d4af37;
  top: -120px;
  right: -100px;
  opacity: 0.06;
}

.heroOrb2 {
  width: 400px;
  height: 400px;
  background: #38bdf8;
  bottom: -150px;
  left: -80px;
  opacity: 0.05;
}

/* GRID */
.heroContainer {
  width: min(1300px, calc(100% - 3rem));
  margin: 0 auto;
}

.heroPremiumGrid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: 40px;
  min-height: 100vh;
  position: relative;
  z-index: 2;
}

/* LEFT CONTENT - GLASS CARD */
.heroPremiumContent {
  display: flex;
  align-items: center;
}

.heroPremiumInner {
  max-width: 540px;
  padding: 60px 50px;

  /* 🔥 Glassmorphism */
  background: rgba(10, 20, 35, 0.55);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  position: relative;
}

/* subtle glow */
.heroPremiumInner::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 20px;
  background: linear-gradient(120deg, transparent, rgba(212,175,55,0.2), transparent);
  opacity: 0.2;
  z-index: 0;
}

/* CONTENT LAYER FIX */
.heroPremiumInner > * {
  position: relative;
  z-index: 2;
}

/* ACCENT LINE */
.heroAccentLine {
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--primary));
  margin-bottom: 24px;
}

/* TITLE */
.heroPremiumTitle {
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}

/* SUBTITLE */
.heroPremiumSubtitle {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin-bottom: 22px;
}

/* DIVIDER */
.heroPremiumDivider {
  width: 40px;
  height: 1px;
  background: rgba(255,255,255,0.25);
  margin-bottom: 28px;
}

/* CTA */
.heroPremiumBtn {
  padding: 14px 34px;
  border-radius: 999px;
  font-weight: 700;
  background: #ffffff;
  color: var(--primary);
  transition: all 0.25s ease;

  box-shadow: 0 10px 25px rgba(255,255,255,0.12);
}

.heroPremiumBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 35px rgba(255,255,255,0.18);
}

/* RIGHT SIDE IMAGE */
.heroPremiumVisual {
  position: relative;
  height: 100%;
  min-height: 90vh;
  border-radius: 24px;
  overflow: hidden;

  /* adds premium feel */
  box-shadow:
    0 30px 80px rgba(0,0,0,0.5),
    inset 0 0 0 1px rgba(255,255,255,0.05);
}

/* IMAGE */
.heroImageContainer {
  position: absolute;
  inset: 0;
}

.heroImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* BETTER OVERLAY (LESS HARSH) */
.heroImageOverlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(110deg,
      rgba(3,7,18,0.85) 0%,
      rgba(3,7,18,0.4) 45%,
      rgba(3,7,18,0.1) 100%);
}

/* LIGHT GLOW ON IMAGE */
.heroPremiumVisual::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15), transparent 60%);
  pointer-events: none;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .heroPremiumGrid {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 40px 0;
  }

  .heroPremiumVisual {
    min-height: 50vh;
  }

  .heroPremiumInner {
    padding: 40px 30px;
  }
}

@media (max-width: 600px) {
  .heroPremium {
    min-height: auto;
  }

  .heroPremiumTitle {
    font-size: 2rem;
  }

  .heroPremiumInner {
    padding: 30px 20px;
  }

  .heroPremiumVisual {
    min-height: 40vh;
    border-radius: 16px;
  }
}