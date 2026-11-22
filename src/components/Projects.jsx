import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Smartphone, Terminal, AlertCircle } from 'lucide-react'
import { PROJECTS } from '../config'
import styles from './Projects.module.css'

function ProjectCard({ project, index }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (project.type === 'ecommerce') return <EcommerceProject project={project} index={index} inView={inView} ref_={ref} />
  if (project.type === 'restaurant') return <RestaurantProject project={project} index={index} inView={inView} ref_={ref} />
  if (project.type === 'ide') return <IdeProject project={project} index={index} inView={inView} ref_={ref} />
  return null
}

function BrowserMockup({ url, accent = '#c9a86c', children }) {
  return (
    <div className={styles.browserFrame}>
      <div className={styles.browserBar}>
        <div className={styles.browserDots}>
          <span style={{ background: '#ff5f56' }} />
          <span style={{ background: '#ffbd2e' }} />
          <span style={{ background: '#27c93f' }} />
        </div>
        <div className={styles.browserUrl}>
          <span className={styles.urlLock}>🔒</span>
          <span>{url}</span>
        </div>
      </div>
      <div className={styles.browserScreen}>
        {children}
      </div>
    </div>
  )
}

function PhoneMockup({ children }) {
  return (
    <div className={styles.phoneMockup}>
      <div className={styles.phoneCameraArea}>
        <div className={styles.phoneCameraIsland} />
      </div>
      <div className={styles.phoneScreen}>
        {children}
      </div>
      <div className={styles.phoneHomeBar} />
    </div>
  )
}

function EcommerceProject({ project, index, inView, ref_ }) {
  return (
    <motion.div
      ref={ref_}
      className={styles.projectRow}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.projectInfo}>
        <div className={styles.projectNum}>{project.id}</div>
        <div className={styles.projectCategory}>{project.category}</div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <ul className={styles.highlights}>
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className={styles.techTags}>
          {project.tech.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectCta}
        >
          <ExternalLink size={14} />
          {project.cta}
        </a>
      </div>

      <div className={styles.projectVisual}>
        <motion.div
          className={styles.tiltCard}
          whileHover={{ rotateY: -5, rotateX: 3, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{ '--accent': project.accent }}
        >
          <BrowserMockup url="sa-parties.vercel.app">
            <div className={styles.saMockContent}>
              {/* Party e-commerce mock */}
              <div className={styles.mockHeader}>
                <div className={styles.mockLogo}>🎉 SA PARTIES</div>
                <div className={styles.mockNav}>
                  <span>Products</span><span>Orders</span><span>Cart</span>
                </div>
              </div>
              <div className={styles.mockHeroStrip}>
                <span>Celebrate Every Moment ✨</span>
              </div>
              <div className={styles.mockProducts}>
                {['🎂 Birthday', '🎊 Events', '🎈 Balloons', '✨ Decor', '🎁 Gifts', '🪅 Party'].map(p => (
                  <div key={p} className={styles.mockProduct}><span>{p}</span></div>
                ))}
              </div>
            </div>
          </BrowserMockup>
        </motion.div>
      </div>
    </motion.div>
  )
}

function RestaurantProject({ project, index, inView, ref_ }) {
  return (
    <motion.div
      ref={ref_}
      className={`${styles.projectRow} ${styles.reversed}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.projectVisual}>
        <motion.div
          className={styles.dualMockup}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className={styles.browserWrap}
            whileHover={{ rotateY: 3, rotateX: -2 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            style={{ '--accent': project.accent }}
          >
            <BrowserMockup url="little-chef-pizza.vercel.app">
              <div className={styles.pizzaMockContent}>
                <div className={styles.mockHeader} style={{ background: '#1a0a00' }}>
                  <div className={styles.mockLogo} style={{ color: '#e8572a' }}>🍕 LITTLE CHEF PIZZA</div>
                </div>
                <div className={styles.mockHeroStrip} style={{ background: '#e8572a' }}>
                  <span>Order Online · Gujrat, Pakistan</span>
                </div>
                <div className={styles.mockProducts}>
                  {['🍕 Margherita', '🌶️ Spicy', '🧀 Cheese', '🥩 BBQ'].map(p => (
                    <div key={p} className={`${styles.mockProduct} ${styles.pizzaItem}`}><span>{p}</span></div>
                  ))}
                </div>
              </div>
            </BrowserMockup>
          </motion.div>

          {/* Phone mockup for the app */}
          <motion.div
            className={styles.phoneWrap}
            whileHover={{ rotateY: -4, rotateX: 2, translateY: -8 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <div className={styles.appBadge}>
              <Smartphone size={12} />
              WEBSITE + MOBILE APP
            </div>
            <PhoneMockup>
              <div className={styles.appMock}>
                <div className={styles.appHeader}>
                  <span>🍕 Little Chef</span>
                  <span style={{ fontSize: 10, color: '#e8572a' }}>Gujrat</span>
                </div>
                <div className={styles.appMenuSection}>
                  <div className={styles.appSectionLabel}>MENU</div>
                  {['Margherita — Rs. 450', 'BBQ Chicken — Rs. 650', 'Spicy Blast — Rs. 550'].map(i => (
                    <div key={i} className={styles.appMenuItem}>{i}</div>
                  ))}
                </div>
                <button className={styles.appOrderBtn}>Order Now →</button>
              </div>
            </PhoneMockup>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.projectNum}>{project.id}</div>
        <div className={styles.projectCategory}>{project.category}</div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.appHighlight}>
          <Smartphone size={14} />
          Website + Mobile Application
        </div>
        <p className={styles.projectDesc}>{project.description}</p>
        <ul className={styles.highlights}>
          {project.highlights.map((h, i) => (
            <li key={i} style={h.includes('mobile') ? { color: 'var(--text-primary)', fontWeight: 500 } : {}}>{h}</li>
          ))}
        </ul>
        <div className={styles.techTags}>
          {project.tech.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectCta}
          style={{ '--cta-color': project.accent, '--cta-bg': project.accent }}
        >
          <ExternalLink size={14} />
          {project.cta}
        </a>
      </div>
    </motion.div>
  )
}

function IdeProject({ project, index, inView, ref_ }) {
  return (
    <motion.div
      ref={ref_}
      className={styles.projectRow}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.projectInfo}>
        <div className={styles.projectNum}>{project.id}</div>
        <div className={styles.projectCategory}>{project.category}</div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.devBadge}>
          <div className={styles.devDot} />
          Under Development
        </div>
        <p className={styles.projectDesc}>{project.description}</p>
        <ul className={styles.highlights}>
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className={styles.techTags}>
          {project.tech.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <div className={styles.devNote}>
          <AlertCircle size={13} />
          This project is currently under active development.
        </div>
      </div>

      <div className={styles.projectVisual}>
        <motion.div
          className={`${styles.tiltCard} ${styles.ideCard}`}
          whileHover={{ rotateY: -4, rotateX: 2, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          style={{ '--accent': project.accent }}
        >
          <div className={styles.ideEditor}>
            {/* Title bar */}
            <div className={styles.ideTitleBar}>
              <div className={styles.browserDots}>
                <span style={{ background: '#ff5f56' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#27c93f' }} />
              </div>
              <span className={styles.ideName}>
                <Terminal size={12} /> py-terminal
              </span>
              <span className={styles.ideLang}>Python</span>
            </div>

            {/* Code editor */}
            <div className={styles.ideContent}>
              <div className={styles.ideLines}>
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <span key={n}>{n}</span>
                ))}
              </div>
              <div className={styles.ideCode}>
                <div className={styles.codeLine}>
                  <span className={styles.cKw}>import</span>
                  <span className={styles.cNm}> gemini</span>
                  <span className={styles.cTxt}> as ai</span>
                </div>
                <div className={styles.codeLine}>&nbsp;</div>
                <div className={styles.codeLine}>
                  <span className={styles.cKw}>def</span>
                  <span className={styles.cFn}> solve_problem</span>
                  <span className={styles.cTxt}>(prompt):</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.cTxt}>    </span>
                  <span className={styles.cKw}>return</span>
                  <span className={styles.cNm}> ai</span>
                  <span className={styles.cTxt}>.generate(</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.cTxt}>        prompt=prompt</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.cTxt}>    )</span>
                </div>
                <div className={styles.codeLine}>&nbsp;</div>
                <div className={styles.codeLine}>
                  <span className={styles.cCmt}># AI-powered coding ✨</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.cNm}>result</span>
                  <span className={styles.cTxt}> = solve_problem(</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.cStr}>    &quot;Write hello world&quot;</span>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className={styles.ideTerminal}>
              <div className={styles.termTitle}>
                <Terminal size={10} /> terminal
              </div>
              <div className={styles.termOutput}>
                <span className={styles.termPrompt}>$</span> python main.py<br />
                <span style={{ color: '#4ade80' }}>Hello, World! ✓</span><br />
                <span style={{ color: '#5b8def' }}>AI Assistant: Ready</span><br />
                <span className={styles.termCursor}>█</span>
              </div>
            </div>

            {/* AI Panel */}
            <div className={styles.aiPanel}>
              <div className={styles.aiPanelHeader}>
                <span className={styles.aiDot} />
                Gemini AI Agent
              </div>
              <div className={styles.aiMsg}>
                <span>💡 Suggestion: Use list comprehension for better performance</span>
              </div>
              <div className={styles.aiBadge}>UNDER DEVELOPMENT</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className={`section ${styles.projects}`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-label">Work</div>
            <h2 className="section-title">Selected Works.</h2>
            <p className={styles.subtitle}>
              Real projects, practical solutions, and digital experiences built with purpose.
            </p>
          </div>
          <div className={styles.projectCount} aria-hidden="true">
            03
          </div>
        </div>

        <div className={styles.projectsList}>
          {PROJECTS.map((project, i) => (
            <div key={project.id} className={styles.projectWrapper}>
              <div className={styles.projectDivider} />
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
