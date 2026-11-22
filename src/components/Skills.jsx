import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../config'
import styles from './Skills.module.css'

const categoryIcons = {
  'Frontend Development': '◈',
  'Backend Development': '◉',
  'Database Management': '◍',
  'Programming Languages': '◎',
}

export default function Skills() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Stack</div>
          <h2 className="section-title">Technologies I Work With.</h2>
          <p className={styles.subtitle}>
            Tools and languages I use to build real-world digital products.
          </p>
        </div>

        <div className={styles.grid}>
          {Object.entries(SKILLS).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              className={styles.categoryBlock}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{categoryIcons[category]}</span>
                <span className={styles.categoryName}>{category}</span>
              </div>

              <div className={styles.skillList}>
                {items.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: catIdx * 0.1 + skillIdx * 0.07 + 0.2,
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <span className={styles.skillDash} />
                    <span className={styles.skillName}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee strip */}
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            {[...Object.values(SKILLS).flat(), ...Object.values(SKILLS).flat()].map((skill, i) => (
              <span key={i} className={styles.marqueeItem}>
                {skill}
                <span className={styles.marqueeDot}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
