import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react'
import { PERSONAL } from '../config'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // fallback
      const el = document.createElement('input')
      el.value = PERSONAL.email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      action: copyEmail,
      actionIcon: copied ? Check : Copy,
      actionLabel: copied ? 'Copied!' : 'Copy email',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'shafey14-hash',
      href: PERSONAL.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Shafey Ali',
      href: PERSONAL.linkedin,
      external: true,
    },
  ]

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={ref}>
      <div className="container">
        <div className={styles.inner}>

          {/* Left — heading */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">Contact</div>
            <h2 className={styles.heading}>
              Let&rsquo;s Create Something{' '}
              <em className={styles.italic}>Meaningful.</em>
            </h2>
            <p className={styles.desc}>
              Have an idea, a business, or a project that needs a digital presence?
              Let&rsquo;s discuss how we can turn it into something great.
            </p>

            {/* Large decorative text */}
            <div className={styles.decoText} aria-hidden="true">
              HELLO
            </div>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                className={styles.contactCard}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className={styles.cardLeft}>
                  <div className={styles.cardIcon}>
                    <c.icon size={16} strokeWidth={1.5} />
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardLabel}>{c.label}</span>
                    <a
                      href={c.href}
                      className={styles.cardValue}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                    >
                      {c.value}
                    </a>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  {c.action && (
                    <button
                      className={styles.actionBtn}
                      onClick={c.action}
                      title={c.actionLabel}
                    >
                      <c.actionIcon size={14} />
                    </button>
                  )}
                  {c.external && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionBtn}
                      title={`Open ${c.label}`}
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {c.href.startsWith('mailto') && (
                    <a
                      href={c.href}
                      className={styles.actionBtn}
                      title="Send email"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              className={styles.note}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className={styles.noteDot} />
              <p>Currently open for freelance projects, collaborations, and interesting opportunities.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
