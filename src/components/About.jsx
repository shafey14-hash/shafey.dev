import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PERSONAL } from '../config'
import styles from './About.module.css'

const details = [
  { label: 'Name', value: PERSONAL.name },
  { label: 'Role', value: PERSONAL.role },
  { label: 'University', value: PERSONAL.university },
  { label: 'Campus', value: PERSONAL.campus },
  { label: 'Degree', value: PERSONAL.degree },
  { label: 'Focus', value: 'Web Apps, E-Commerce & AI' },
  { label: 'Approach', value: 'Practical Business Solutions' },
  { label: 'Availability', value: 'Open for Client Projects' },
]

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">
        <div className={styles.topRow}>
          <div>
            <div className="section-label">About</div>
            <h2 className={`section-title ${styles.heading}`}>
              Practical Engineering,{' '}
              <em className={styles.italic}>Built for Business.</em>
            </h2>
          </div>
          <div className={styles.largeAccent} aria-hidden="true">
            01
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.grid}>
          <motion.div
            className={styles.textBlock}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <p className={styles.intro}>{PERSONAL.positioning}</p>

            <p className={styles.body}>
              I&rsquo;m Shafey Ali, a Computer Science student specializing in Artificial Intelligence
              at Arid Agriculture University Rawalpindi, Gujrat Campus (GIMS). Alongside my studies,
              I work with businesses, startups, and founders to build custom digital products.
            </p>
            <p className={styles.body}>
              My development approach starts with understanding the real operational problem first —
              whether that&rsquo;s launching an online store with order management, building a responsive
              restaurant ordering experience, or integrating AI assistants into existing workflows.
            </p>
            <p className={styles.body}>
              I focus on clean architecture, maintainable code, and user-friendly interfaces so the
              final product is reliable, easy to use, and built to support real growth.
            </p>
          </motion.div>

          <motion.div
            className={styles.detailGrid}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {details.map((d) => (
              <div key={d.label} className={styles.detailItem}>
                <span className={styles.detailLabel}>{d.label}</span>
                <span className={styles.detailValue}>{d.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
