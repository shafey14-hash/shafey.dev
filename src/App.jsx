import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Process from './components/Process'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import WebsiteAudit from './components/WebsiteAudit'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

export default function App() {
  const lenisRef = useRef(null)
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const isHome = pathname === '/' || pathname === '/index.html'

  useEffect(() => {
    if (!isHome) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [isHome])

  if (!isHome) {
    return <NotFound />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <WhyWorkWithMe />
        <WebsiteAudit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
