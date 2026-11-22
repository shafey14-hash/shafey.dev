import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    setVisible(true)
    let mouseX = -100, mouseY = -100
    let curX = -100, curY = -100

    const updateCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
    }

    const handleHover = () => setHovered(true)
    const handleUnhover = () => setHovered(false)

    window.addEventListener('mousemove', updateCursor)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleUnhover)
    })

    let raf
    const lerp = (start, end, t) => start + (end - start) * t
    const animateCursor = () => {
      curX = lerp(curX, mouseX, 0.08)
      curY = lerp(curY, mouseY, 0.08)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${curX - 20}px, ${curY - 20}px)`
      }
      raf = requestAnimationFrame(animateCursor)
    }
    raf = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${hovered ? styles.hovered : ''}`}
      />
      <div ref={dotRef} className={styles.dot} />
    </>
  )
}
