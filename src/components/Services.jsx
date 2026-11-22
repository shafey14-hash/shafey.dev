import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Globe, ShoppingCart, UtensilsCrossed, LayoutDashboard, Layers, Smartphone, Bot
} from 'lucide-react'
import { SERVICES } from '../config'
import styles from './Services.module.css'

const iconMap = {
  Globe: Globe,
  ShoppingCart: ShoppingCart,
  UtensilsCrossed: UtensilsCrossed,
  LayoutDashboard: LayoutDashboard,
  Layers: Layers,
  Smartphone: Smartphone,
  Bot: Bot,
}

export default function Services() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className={`section ${styles.services}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-label">Services</div>
            <h2 className="section-title">What I Can Build For You.</h2>
          </div>
          <p className={styles.headerDesc}>
            From concept to deployment — turning ideas into<br />
            functional, polished digital products.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    {Icon && <Icon size={18} strokeWidth={1.5} />}
                  </div>
                  <span className={styles.cardNum}>0{i + 1}</span>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
