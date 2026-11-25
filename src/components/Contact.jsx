import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import { PERSONAL } from '../config'
import { submitForm, buildMailtoUrl } from '../utils/submitForm'
import styles from './Contact.module.css'

const INITIAL_FORM = {
  name: '',
  email: '',
  projectType: 'Web Development',
  budget: '',
  description: '',
}

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.description.trim()) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email address, and project description.')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    const result = await submitForm({
      _subject: `New Project Inquiry (${form.projectType}) — ${form.name}`,
      formType: 'Project Inquiry',
      name: form.name,
      email: form.email,
      projectType: form.projectType,
      estimatedBudget: form.budget || 'Not specified',
      description: form.description,
    })

    if (result.ok) {
      setStatus('success')
      setForm(INITIAL_FORM)
    } else {
      setStatus('error')
      setErrorMsg(result.error)
    }
  }

  const mailtoFallback = buildMailtoUrl(
    `Project Inquiry (${form.projectType}) — ${form.name || 'Client'}`,
    [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType}`,
      `Estimated Budget: ${form.budget || 'Not specified'}`,
      `Project Description:\n${form.description}`,
    ]
  )

  return (
    <section id="contact" className={`section ${styles.contact}`} ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left — headline & direct channels */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Contact</div>
            <h2 className={styles.heading}>
              Have an Idea? Let&rsquo;s Build Something{' '}
              <em className={styles.italic}>Great.</em>
            </h2>
            <p className={styles.desc}>
              Tell me about your project, timeline, or business goals. Reach out directly via
              WhatsApp, email, or the project inquiry form.
            </p>

            {/* Primary Direct CTAs */}
            <div className={styles.directCtas}>
              <a
                href={PERSONAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <MessageCircle size={15} />
                WhatsApp Chat
                <ArrowUpRight size={14} />
              </a>

              <a href={`mailto:${PERSONAL.email}`} className={styles.emailBtn}>
                <Mail size={15} />
                Send Email
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Direct contact info cards */}
            <div className={styles.infoList}>
              <div className={styles.infoRow}>
                <div className={styles.infoLeft}>
                  <Mail size={15} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href={`mailto:${PERSONAL.email}`} className={styles.infoValue}>
                      {PERSONAL.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  title={copied ? 'Copied!' : 'Copy email'}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoLeft}>
                  <Github size={15} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>GitHub</span>
                    <a
                      href={PERSONAL.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoValue}
                    >
                      github.com/shafey14-hash
                    </a>
                  </div>
                </div>
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.copyBtn}
                  aria-label="Open GitHub profile"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoLeft}>
                  <Linkedin size={15} className={styles.infoIcon} />
                  <div>
                    <span className={styles.infoLabel}>LinkedIn</span>
                    <a
                      href={PERSONAL.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoValue}
                    >
                      Shafey Ali
                    </a>
                  </div>
                </div>
                <a
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.copyBtn}
                  aria-label="Open LinkedIn profile"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Project Inquiry Form */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <span className={styles.formTitle}>Project Inquiry Form</span>
                <span className={styles.formSub}>Replies within 24 hours</span>
              </div>

              {status === 'success' ? (
                <div className={styles.feedbackSuccess} role="status">
                  <CheckCircle2 size={24} className={styles.successIcon} />
                  <h3>Inquiry Sent</h3>
                  <p>
                    Thank you for reaching out. Your project details have been delivered to{' '}
                    {PERSONAL.email}. I&rsquo;ll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    className={styles.resetBtn}
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="contact-name">Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="contact-email">Email *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="contact-type">Project Type</label>
                      <select
                        id="contact-type"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="E-Commerce Development">E-Commerce Development</option>
                        <option value="Full-Stack Application">Full-Stack Application</option>
                        <option value="AI Integration & Automation">AI Integration &amp; Automation</option>
                        <option value="Business Website">Business Website</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="contact-budget">Estimated Budget (Optional)</label>
                      <input
                        id="contact-budget"
                        name="budget"
                        type="text"
                        placeholder="e.g. $500 – $1,500"
                        value={form.budget}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="contact-desc">Project Description *</label>
                    <textarea
                      id="contact-desc"
                      name="description"
                      rows={4}
                      required
                      placeholder="Briefly describe what you need built, key features, and your timeline..."
                      value={form.description}
                      onChange={handleChange}
                    />
                  </div>

                  {status === 'error' && (
                    <div className={styles.feedbackError} role="alert">
                      <div className={styles.errorHeader}>
                        <AlertTriangle size={16} />
                        <span>{errorMsg}</span>
                      </div>
                      <a href={mailtoFallback} className={styles.fallbackLink}>
                        <Mail size={14} />
                        Send Inquiry via Email Client
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Project Inquiry'}
                    <ArrowUpRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
