import React from "react";
import { motion } from "framer-motion";

const HeroPremium: React.FC = () => {
  return (
    <section style={styles.hero}>

      {/* BACKGROUND ORBS */}
      <div style={styles.bg}>
        <motion.div
          style={{ ...styles.orb, ...styles.orb1 }}
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          style={{ ...styles.orb, ...styles.orb2 }}
          animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div style={styles.container}>
        <div style={styles.grid}>

          {/* LEFT CONTENT */}
          <motion.div
            style={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.card}>

              <div style={styles.accentLine} />

              <h1 style={styles.title}>
                Reset and protect
                <span style={styles.break}>
                  your energetic system
                </span>
              </h1>

              <div style={styles.subtitle}>
                Bridging the gap between medical science and ancient wisdom
              </div>

              <div style={styles.divider} />

              <motion.a
                href="#"
                style={styles.button}
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </motion.a>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.imageWrap}>
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1400&auto=format&fit=crop"
                alt="hero"
                style={styles.image}
              />
              <div style={styles.overlay} />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default HeroPremium;

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {

  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg, #020617 0%, #071326 100%)",
    color: "#fff",
    overflow: "hidden",
  },

  bg: {
    position: "absolute",
    inset: 0,
  },

  orb: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(120px)",
  },

  orb1: {
    width: 500,
    height: 500,
    background: "#d4af37",
    top: -120,
    right: -100,
    opacity: 0.06,
  },

  orb2: {
    width: 400,
    height: 400,
    background: "#38bdf8",
    bottom: -150,
    left: -80,
    opacity: 0.05,
  },

  container: {
    width: "min(1300px, calc(100% - 3rem))",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: "40px",
    alignItems: "center",
  },

  left: {
    display: "flex",
    alignItems: "center",
  },

  card: {
    padding: "60px 50px",
    borderRadius: "20px",
    background: "rgba(10,20,35,0.55)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    maxWidth: "540px",
  },

  accentLine: {
    width: "50px",
    height: "3px",
    background: "linear-gradient(90deg,#d4af37,#0ea5e9)",
    marginBottom: "24px",
  },

  title: {
    fontSize: "clamp(2.4rem,5vw,3.4rem)",
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: "14px",
  },

  break: {
    display: "block",
  },

  subtitle: {
    fontSize: "0.9rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "22px",
  },

  divider: {
    width: "40px",
    height: "1px",
    background: "rgba(255,255,255,0.25)",
    marginBottom: "28px",
  },

  button: {
    display: "inline-block",
    padding: "14px 34px",
    borderRadius: "999px",
    background: "#fff",
    color: "#0ea5e9",
    fontWeight: 700,
    textDecoration: "none",
  },

  right: {
    position: "relative",
  },

  imageWrap: {
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    minHeight: "80vh",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(110deg, rgba(3,7,18,0.85) 0%, rgba(3,7,18,0.4) 45%, rgba(3,7,18,0.1) 100%)",
  },

};