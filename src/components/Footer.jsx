import { Github, Linkedin, Mail } from 'lucide-react'
import { PERSONAL } from '../config'
import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: Github, href: PERSONAL.github, label: 'GitHub' },
  { icon: Linkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topInner}>
            <div className={styles.wordmark}>
              <span>SHAFEY</span>
              <span className={styles.accent}> ALI</span>
            </div>
            <nav className={styles.nav} aria-label="Footer Navigation">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={styles.navLink}
                  onClick={(e) => handleNav(e, l.href)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={styles.socialBtn}
                  aria-label={s.label}
                >
                  <s.icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.credit}>
              Designed &amp; Developed by{' '}
              <span className={styles.accent}>Shafey Ali</span>
            </p>
            <p className={styles.copy}>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
