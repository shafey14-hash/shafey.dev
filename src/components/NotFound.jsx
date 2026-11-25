import { ArrowLeft } from 'lucide-react'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.desc}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <a href="/" className={styles.homeBtn}>
          <ArrowLeft size={15} />
          Back to Portfolio
        </a>
      </div>
    </main>
  )
}
