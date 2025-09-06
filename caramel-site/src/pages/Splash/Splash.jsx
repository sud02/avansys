import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Splash.module.scss'
import mainLogo from '@/assets/logo/main_logo.png'
import splashLogo from '@/assets/logo/splash_1.png'

const Splash = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Auto navigate to Mood landing page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/landing/mood')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className={styles.splash}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img 
            src={mainLogo} 
            alt="Caramel Logo" 
            className={styles.mainLogo}
            loading="eager"
          />
        </div>

        <img 
          src={splashLogo} 
          alt="Splash Logo" 
          className={styles.splashLogo}
          loading="eager"
        />
      </div>
    </div>
  )
}

export default Splash
