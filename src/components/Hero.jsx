import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { PERSONAL, HERO } from '../config'
import styles from './Hero.module.css'

const HeroScene = lazy(() => import('./HeroScene'))

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      {/* 3D Scene */}
      <div className={styles.canvas} aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Overlay gradient */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <span className={styles.badgeDot} />
            {HERO.badge}
          </motion.div>

          <motion.h1
            className={styles.heading}
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Turning Ideas Into{' '}
            <em className={styles.italic}>Powerful</em>{' '}
            Digital Products.
          </motion.h1>

          <motion.div
            className={styles.name}
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <span className={styles.nameText}>{PERSONAL.name.toUpperCase()}</span>
            <span className={styles.nameSep}>·</span>
            <span className={styles.nameRole}>{PERSONAL.role}</span>
          </motion.div>

          <motion.p
            className={styles.description}
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            className={styles.ctas}
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.36 }}
          >
            <button
              type="button"
              className={styles.ctaPrimary}
              onClick={() => handleScroll('contact')}
            >
              {HERO.primaryCta}
              <ArrowUpRight size={15} />
            </button>
            <button
              type="button"
              className={styles.ctaOutline}
              onClick={() => handleScroll('projects')}
            >
              {HERO.secondaryCta}
              <ArrowDown size={15} />
            </button>
          </motion.div>

          <motion.div
            className={styles.socials}
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.44 }}
          >
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Shafey Ali on GitHub"
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
              aria-label="Shafey Ali on LinkedIn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <span className={styles.socialDivider} />
            <button
              type="button"
              className={styles.auditTextLink}
              onClick={() => handleScroll('audit')}
            >
              Free Website Audit →
            </button>
          </motion.div>
        </div>

        {/* Right side — concise positioning metadata */}
        <motion.div
          className={styles.meta}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
        >
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Focus</span>
            <span className={styles.metaValue}>Web &amp; SaaS</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Specialty</span>
            <span className={styles.metaValue}>AI Solutions</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Work</span>
            <span className={styles.metaValue}>Remote</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
