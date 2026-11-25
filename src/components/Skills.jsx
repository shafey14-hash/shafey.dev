import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../config'
import styles from './Skills.module.css'

const categoryIcons = {
  Frontend: '◈',
  Backend: '◉',
  Database: '◍',
  'Programming & AI': '◎',
}

export default function Skills() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className={`section ${styles.skills}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Technical Stack</div>
          <h2 className="section-title">Technologies I Work With.</h2>
          <p className={styles.subtitle}>
            A focused stack of modern frontend, backend, database, and programming tools used to build reliable products.
          </p>
        </div>

        <div className={styles.grid}>
          {Object.entries(SKILLS).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              className={styles.categoryBlock}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon} aria-hidden="true">
                  {categoryIcons[category]}
                </span>
                <span className={styles.categoryName}>{category}</span>
              </div>

              <div className={styles.skillList}>
                {items.map((skill) => (
                  <div key={skill} className={styles.skillItem}>
                    <span className={styles.skillDash} />
                    <span className={styles.skillName}>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
