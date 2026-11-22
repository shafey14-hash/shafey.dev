import { Suspense, lazy, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react'
import { PERSONAL } from '../config'
import styles from './Hero.module.css'

const HeroScene = lazy(() => import('./HeroScene'))

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      {/* 3D Scene */}
      <div className={styles.canvas}>
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Overlay gradient */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={styles.badgeDot} />
            Available for Freelance Projects
          </motion.div>

          <motion.h1
            className={styles.heading}
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Building Digital{' '}
            <em className={styles.italic}>Experiences</em>{' '}
            That Make an Impact.
          </motion.h1>

          <motion.div
            className={styles.name}
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <span className={styles.nameLabel}>Developer</span>
            <span className={styles.nameText}>{PERSONAL.name.toUpperCase()}</span>
          </motion.div>

          <motion.p
            className={styles.subtitle}
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Computer Science Student · AI Enthusiast · Freelance Developer
          </motion.p>

          <motion.p
            className={styles.description}
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            I build modern websites, intelligent applications, and interactive digital
            experiences that turn ideas into reality.
          </motion.p>

          <motion.div
            className={styles.ctas}
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <button
              className={styles.ctaPrimary}
              onClick={() => handleScroll('projects')}
            >
              Explore My Work
              <ArrowDown size={15} />
            </button>
            <button
              className={styles.ctaOutline}
              onClick={() => handleScroll('contact')}
            >
              Let's Talk
            </button>
          </motion.div>

          <motion.div
            className={styles.socials}
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <span className={styles.socialDivider} />
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>

        {/* Right side — vertical metadata */}
        <motion.div
          className={styles.meta}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Year</span>
            <span className={styles.metaValue}>2024</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>Developer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Exp</span>
            <span className={styles.metaValue}>1 Yr</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
