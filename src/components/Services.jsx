import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, ShoppingCart, Layers, Bot, Building2, ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../config'
import styles from './Services.module.css'

const iconMap = {
  Globe,
  ShoppingCart,
  Layers,
  Bot,
  Building2,
}

export default function Services() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className={`section ${styles.services}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-label">Services</div>
            <h2 className="section-title">Solutions Built for Growth.</h2>
          </div>
          <p className={styles.headerDesc}>
            Practical digital products designed to solve operational bottlenecks,
            attract customers, and scale with your business.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.article
                key={service.title}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    {Icon && <Icon size={18} strokeWidth={1.5} />}
                  </div>
                  <span className={styles.cardNum}>0{i + 1}</span>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <button
                  type="button"
                  className={styles.cardLink}
                  onClick={scrollToContact}
                >
                  Discuss a project
                  <ArrowUpRight size={13} />
                </button>
              </motion.article>
            )
          })}

          {/* Conversion CTA card to complete the 3x2 grid cleanly */}
          <motion.div
            className={`${styles.serviceCard} ${styles.ctaCard}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: SERVICES.length * 0.06 }}
          >
            <div className={styles.ctaEyebrow}>Custom Requirements</div>
            <h3 className={styles.ctaTitle}>Have a specific project in mind?</h3>
            <p className={styles.cardDesc}>
              Let&rsquo;s discuss your goals and map out the right technical approach for your business.
            </p>
            <button
              type="button"
              className={styles.ctaButton}
              onClick={scrollToContact}
            >
              Start a Conversation
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
