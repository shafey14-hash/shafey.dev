import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROCESS_STEPS } from '../config'
import styles from './Process.module.css'

export default function Process() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className={`section ${styles.process}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-label">How I Work</div>
            <h2 className="section-title">A Clear, Structured Process.</h2>
          </div>
          <p className={styles.headerDesc}>
            From initial discovery to launch, every project follows a transparent workflow
            focused on clarity and reliable delivery.
          </p>
        </div>

        <div className={styles.timeline}>
          {PROCESS_STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={styles.stepTop}>
                <span className={styles.stepNum}>{item.step}</span>
                <span className={styles.stepLine} aria-hidden="true" />
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
