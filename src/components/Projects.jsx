import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Smartphone, Terminal, AlertCircle } from 'lucide-react'
import { PROJECTS } from '../config'
import styles from './Projects.module.css'

function BrowserMockup({ url, children }) {
  return (
    <div className={styles.browserFrame}>
      <div className={styles.browserBar}>
        <div className={styles.browserDots} aria-hidden="true">
          <span style={{ background: '#ff5f56' }} />
          <span style={{ background: '#ffbd2e' }} />
          <span style={{ background: '#27c93f' }} />
        </div>
        <div className={styles.browserUrl}>
          <span>{url}</span>
        </div>
      </div>
      <div className={styles.browserScreen}>{children}</div>
    </div>
  )
}

function PhoneMockup({ children }) {
  return (
    <div className={styles.phoneMockup}>
      <div className={styles.phoneCameraArea}>
        <div className={styles.phoneCameraIsland} />
      </div>
      <div className={styles.phoneScreen}>{children}</div>
      <div className={styles.phoneHomeBar} />
    </div>
  )
}

function CaseStudyDetails({ project }) {
  return (
    <>
      <div className={styles.caseGrid}>
        <div className={styles.caseBlock}>
          <span className={styles.caseLabel}>Business Problem</span>
          <p className={styles.caseText}>{project.problem}</p>
        </div>
        <div className={styles.caseBlock}>
          <span className={styles.caseLabel}>Solution</span>
          <p className={styles.caseText}>{project.solution}</p>
        </div>
      </div>

      <ul className={styles.highlights}>
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className={styles.techTags}>
        {project.tech.map((t) => (
          <span key={t} className={styles.tag}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.ctaRow}>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCta}
          >
            <ExternalLink size={14} />
            {project.cta || 'Live Demo'}
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubCta}
          >
            <Github size={14} />
            View Code
          </a>
        )}
      </div>
    </>
  )
}

function EcommerceProject({ project, inView, ref_ }) {
  return (
    <motion.article
      ref={ref_}
      className={styles.projectRow}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.projectInfo}>
        <div className={styles.projectNum}>{project.id}</div>
        <div className={styles.projectCategory}>{project.category}</div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <CaseStudyDetails project={project} />
      </div>

      <div className={styles.projectVisual}>
        <div className={styles.tiltCard} style={{ '--accent': project.accent }}>
          <BrowserMockup url="sa-parties.vercel.app">
            <div className={styles.saMockContent}>
              <div className={styles.mockHeader}>
                <div className={styles.mockLogo}>SA PARTIES</div>
                <div className={styles.mockNav}>
                  <span>Catalog</span>
                  <span>Orders</span>
                  <span>Cart</span>
                </div>
              </div>
              <div className={styles.mockHeroStrip}>
                <span>Celebration &amp; Party Supplies Store</span>
              </div>
              <div className={styles.mockProducts}>
                {['Birthday', 'Events', 'Balloons', 'Decor', 'Gifts', 'Party'].map((p) => (
                  <div key={p} className={styles.mockProduct}>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </BrowserMockup>
        </div>
      </div>
    </motion.article>
  )
}

function RestaurantProject({ project, inView, ref_ }) {
  return (
    <motion.article
      ref={ref_}
      className={`${styles.projectRow} ${styles.reversed}`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.projectVisual}>
        <div className={styles.dualMockup}>
          <div className={styles.browserWrap} style={{ '--accent': project.accent }}>
            <BrowserMockup url="little-chef-pizza.vercel.app">
              <div className={styles.pizzaMockContent}>
                <div className={styles.mockHeader} style={{ background: '#1a0a00' }}>
                  <div className={styles.mockLogo} style={{ color: '#e8572a' }}>
                    LITTLE CHEF PIZZA
                  </div>
                </div>
                <div className={styles.mockHeroStrip} style={{ background: '#e8572a', color: '#fff' }}>
                  <span>Order Online · Gujrat, Pakistan</span>
                </div>
                <div className={styles.mockProducts}>
                  {['Margherita', 'Spicy', 'Cheese', 'BBQ'].map((p) => (
                    <div key={p} className={`${styles.mockProduct} ${styles.pizzaItem}`}>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BrowserMockup>
          </div>

          <div className={styles.phoneWrap}>
            <div className={styles.appBadge}>
              <Smartphone size={12} />
              WEBSITE + MOBILE APP
            </div>
            <PhoneMockup>
              <div className={styles.appMock}>
                <div className={styles.appHeader}>
                  <span>Little Chef</span>
                  <span style={{ fontSize: 10, color: '#e8572a' }}>Gujrat</span>
                </div>
                <div className={styles.appMenuSection}>
                  <div className={styles.appSectionLabel}>MENU</div>
                  {['Margherita', 'BBQ Chicken', 'Spicy Blast'].map((item) => (
                    <div key={item} className={styles.appMenuItem}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={styles.appOrderBtn}>Order Now →</div>
              </div>
            </PhoneMockup>
          </div>
        </div>
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
        <CaseStudyDetails project={project} />
      </div>
    </motion.article>
  )
}

function IdeProject({ project, inView, ref_ }) {
  return (
    <motion.article
      ref={ref_}
      className={styles.projectRow}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
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
        <CaseStudyDetails project={project} />
        <div className={styles.devNote}>
          <AlertCircle size={13} />
          Currently in active development — preview reflects implemented capabilities.
        </div>
      </div>

      <div className={styles.projectVisual}>
        <div className={`${styles.tiltCard} ${styles.ideCard}`} style={{ '--accent': project.accent }}>
          <div className={styles.ideEditor}>
            <div className={styles.ideTitleBar}>
              <div className={styles.browserDots} aria-hidden="true">
                <span style={{ background: '#ff5f56' }} />
                <span style={{ background: '#ffbd2e' }} />
                <span style={{ background: '#27c93f' }} />
              </div>
              <span className={styles.ideName}>
                <Terminal size={12} /> py-terminal
              </span>
              <span className={styles.ideLang}>Python / C++</span>
            </div>

            <div className={styles.ideContent}>
              <div className={styles.ideLines} aria-hidden="true">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
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
                  <span className={styles.cTxt}>.generate(prompt=prompt)</span>
                </div>
                <div className={styles.codeLine}>&nbsp;</div>
                <div className={styles.codeLine}>
                  <span className={styles.cCmt}># AI-assisted coding workflow</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.cNm}>result</span>
                  <span className={styles.cTxt}> = solve_problem(</span>
                  <span className={styles.cStr}>&quot;Optimize loop&quot;</span>
                  <span className={styles.cTxt}>)</span>
                </div>
              </div>
            </div>

            <div className={styles.ideTerminal}>
              <div className={styles.termTitle}>
                <Terminal size={10} /> terminal
              </div>
              <div className={styles.termOutput}>
                <span className={styles.termPrompt}>$</span> python main.py
                <br />
                <span style={{ color: '#4ade80' }}>Execution complete ✓</span>
                <br />
                <span style={{ color: '#5b8def' }}>Gemini AI Assistant: Ready</span>
              </div>
            </div>

            <div className={styles.aiPanel}>
              <div className={styles.aiPanelHeader}>
                <span className={styles.aiDot} />
                Gemini AI Agent
              </div>
              <div className={styles.aiMsg}>
                <span>Contextual code assistance &amp; debugging in the browser.</span>
              </div>
              <div className={styles.aiBadge}>UNDER DEVELOPMENT</div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectCard({ project }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (project.type === 'ecommerce') return <EcommerceProject project={project} inView={inView} ref_={ref} />
  if (project.type === 'restaurant') return <RestaurantProject project={project} inView={inView} ref_={ref} />
  if (project.type === 'ide') return <IdeProject project={project} inView={inView} ref_={ref} />
  return null
}

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-label">Featured Projects</div>
            <h2 className="section-title">Selected Works.</h2>
            <p className={styles.subtitle}>
              Real-world applications built to solve practical business and user challenges.
            </p>
          </div>
          <div className={styles.projectCount} aria-hidden="true">
            03
          </div>
        </div>

        <div className={styles.projectsList}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.projectWrapper}>
              <div className={styles.projectDivider} />
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
