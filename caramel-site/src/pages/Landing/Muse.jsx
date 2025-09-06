import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header/Header'
import styles from './Muse.module.scss'

const Muse = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/landing/mood')
  }

  const handleSkip = () => {
    navigate('/login')
  }

  return (
    <div className={styles.muse}>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Find Your Muse</h1>
          <p className={styles.subtitle}>
            Discover the perfect caramel creation that speaks to your soul
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.inspirationGrid}>
            <div className={styles.inspirationCard}>
              <div className={styles.icon}>🎨</div>
              <h3>Creative Expression</h3>
              <p>Let your imagination run wild with our artisanal caramel designs</p>
            </div>

            <div className={styles.inspirationCard}>
              <div className={styles.icon}>✨</div>
              <h3>Magical Moments</h3>
              <p>Create unforgettable memories with every sweet bite</p>
            </div>

            <div className={styles.inspirationCard}>
              <div className={styles.icon}>🌟</div>
              <h3>Personal Touch</h3>
              <p>Crafted just for you, with love and attention to detail</p>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <button
              className={styles.primaryButton}
              onClick={handleGetStarted}
            >
              Discover Your Style
            </button>

            <button
              className={styles.secondaryButton}
              onClick={handleSkip}
            >
              Skip to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Muse
