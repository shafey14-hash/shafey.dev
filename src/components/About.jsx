import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PERSONAL } from '../config'
import styles from './About.module.css'

const details = [
  { label: 'Name', value: PERSONAL.name },
  { label: 'Age', value: PERSONAL.age },
  { label: 'University', value: PERSONAL.university },
  { label: 'Campus', value: PERSONAL.campus },
  { label: 'Degree', value: PERSONAL.degree },
  { label: 'Semester', value: PERSONAL.semester },
  { label: 'Experience', value: PERSONAL.experience },
  { label: 'Role', value: PERSONAL.role },
]

const stats = [
  { number: '01', label: 'Year Experience', sub: 'in development' },
  { number: '03', label: 'Live Projects', sub: 'deployed & running' },
  { number: '5th', label: 'Semester', sub: 'CS / AI program' },
]

export default function About() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className={`section ${styles.about}`} ref={ref}>
      <div className="container">

        {/* Top row */}
        <div className={styles.topRow}>
          <div>
            <div className="section-label">About</div>
            <h2 className={`section-title ${styles.heading}`}>
              Beyond the{' '}
              <em className={styles.italic}>Code.</em>
            </h2>
          </div>

          {/* Large number accent */}
          <div className={styles.largeAccent} aria-hidden="true">
            01
          </div>
        </div>

        {/* Fine line */}
        <div className={styles.divider} />

        {/* Main content grid */}
        <div className={styles.grid}>
          {/* Left — text */}
          <motion.div
            className={styles.textBlock}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className={styles.intro}>{PERSONAL.intro}</p>

            <p className={styles.body}>
              I&rsquo;m Shafey Ali, a 21-year-old Computer Science student specializing in
              Artificial Intelligence at Arid Agriculture University Rawalpindi, Gujrat Campus (GIMS).
            </p>
            <p className={styles.body}>
              Currently in my 5th semester, I also work as a part-time freelance developer
              with one year of experience in the development field.
            </p>
            <p className={styles.body}>
              I enjoy building digital products, experimenting with modern technologies, and
              transforming ideas into practical solutions. My focus is on creating functional,
              visually appealing, and user-friendly digital experiences.
            </p>
          </motion.div>

          {/* Right — editorial detail grid */}
          <motion.div
            className={styles.detailGrid}
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {details.map((d, i) => (
              <div key={i} className={styles.detailItem}>
                <span className={styles.detailLabel}>{d.label}</span>
                <span className={styles.detailValue}>{d.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <div className={styles.statsRow}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className={styles.statBlock}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <span className={styles.statNumber}>{s.number}</span>
              <div className={styles.statText}>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statSub}>{s.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
