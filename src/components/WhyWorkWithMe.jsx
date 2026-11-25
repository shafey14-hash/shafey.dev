import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { WHY_WORK_WITH_ME } from '../config'
import styles from './WhyWorkWithMe.module.css'

export default function WhyWorkWithMe() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-me" className={`section ${styles.whySection}`} ref={ref}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className="section-label">Why Work With Me</div>
            <h2 className="section-title">
              Built for Function,{' '}
              <em className={styles.italic}>Not Just Aesthetics.</em>
            </h2>
            <p className={styles.lead}>
              Businesses don&rsquo;t need bloated templates or empty promises. They need dependable
              software that solves real problems, loads fast, and is straightforward to use.
            </p>
          </div>

          <div className={styles.grid}>
            {WHY_WORK_WITH_ME.map((item, i) => (
              <motion.div
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <div className={styles.checkWrap} aria-hidden="true">
                  <Check size={14} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
