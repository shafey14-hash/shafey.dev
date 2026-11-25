import { useState } from 'react'
import { CheckCircle2, AlertTriangle, ArrowUpRight, Mail } from 'lucide-react'
import { submitForm, buildMailtoUrl } from '../utils/submitForm'
import styles from './WebsiteAudit.module.css'

const AUDIT_POINTS = [
  'UI/UX review & visual clarity',
  'Mobile responsiveness review',
  'Performance & loading observations',
  'Conversion improvement suggestions',
]

const INITIAL_FORM = {
  fullName: '',
  email: '',
  websiteUrl: '',
  businessType: '',
  improvementGoal: '',
}

export default function WebsiteAudit() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.fullName.trim() || !form.email.trim() || !form.websiteUrl.trim()) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email address, and website URL.')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    const result = await submitForm({
      _subject: `Free Website Audit Request — ${form.fullName}`,
      formType: 'Free Website Audit',
      fullName: form.fullName,
      email: form.email,
      websiteUrl: form.websiteUrl,
      businessType: form.businessType || 'Not specified',
      improvementGoal: form.improvementGoal || 'Not specified',
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
    `Free Website Audit Request — ${form.fullName || 'Client'}`,
    [
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Website URL: ${form.websiteUrl}`,
      `Business Type: ${form.businessType}`,
      `Main Improvement Goal: ${form.improvementGoal}`,
    ]
  )

  return (
    <section id="audit" className={`section ${styles.audit}`}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.left}>
            <div className="section-label">Free Offer</div>
            <h2 className={styles.heading}>Get a Free Website Audit</h2>
            <p className={styles.desc}>
              Already have a website? I&rsquo;ll review its design, user experience, mobile
              responsiveness, performance, and conversion opportunities — and share practical
              recommendations to improve your online presence.
            </p>

            <ul className={styles.points}>
              {AUDIT_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className={styles.noObligation}>
              100% Free · Honest, practical feedback · No obligation to hire
            </div>
          </div>

          <div className={styles.right}>
            {status === 'success' ? (
              <div className={styles.feedbackSuccess} role="status">
                <CheckCircle2 size={24} className={styles.successIcon} />
                <h3>Audit Request Received</h3>
                <p>
                  Thank you! Your website audit request has been sent. I&rsquo;ll review your site
                  and send practical recommendations to your email.
                </p>
                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setStatus('idle')}
                >
                  Submit Another Website
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="audit-name">Full Name *</label>
                    <input
                      id="audit-name"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="audit-email">Email Address *</label>
                    <input
                      id="audit-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="audit-url">Website URL *</label>
                    <input
                      id="audit-url"
                      name="websiteUrl"
                      type="url"
                      required
                      placeholder="https://yourwebsite.com"
                      value={form.websiteUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="audit-business">Business Type</label>
                    <input
                      id="audit-business"
                      name="businessType"
                      type="text"
                      placeholder="e.g. Restaurant, E-Commerce, Agency"
                      value={form.businessType}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="audit-goal">Main Improvement Goal</label>
                  <textarea
                    id="audit-goal"
                    name="improvementGoal"
                    rows={3}
                    placeholder="What would you like to improve? (e.g. mobile layout, speed, more inquiries)"
                    value={form.improvementGoal}
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
                      Send Audit Request via Email Client
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending Request...' : 'Request My Free Audit'}
                  <ArrowUpRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
