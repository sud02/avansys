import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header/Header'
import styles from './Mood.module.scss'
import moodHero from '@/assets/hero/mood_hero.png'

const Mood = () => {
  const navigate = useNavigate()
  const [selectedMoods, setSelectedMoods] = useState([])

  const moodCategories = [
    'Off-beat picks',
    'Fandom Nerds Unite',
    'Playdate picks',
    'Unwind & Reset',
    'Slice of Nature',
    'Custom magic',
    'Toast-worthy picks',
    'Style Upgrades',
    'Built for the busy',
    'Festive favorites'
  ]

  const handleMoodToggle = (mood) => {
    setSelectedMoods(prev => 
      prev.includes(mood)
        ? prev.filter(m => m !== mood)
        : [...prev, mood]
    )
  }

  const handleContinue = () => {
    navigate('/login')
  }

  return (
    <div className={styles.mood}>
      <Header />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <img
            src={moodHero}
            alt="Mood Hero"
            className={styles.heroImage}
          />
          <h1 className={styles.headline}>
            Not sure what to gift?<br />
            Start with the feeling!
          </h1>
        </div>

        <div className={styles.moodSection}>
          <h2 className={styles.moodTitle}>MOOD</h2>
          <p className={styles.moodSubtitle}>Tap the mood, we'll handle the rest!</p>
          
          <div className={styles.moodGrid}>
            {moodCategories.map((category, index) => (
              <div
                key={index}
                className={`${styles.moodItem} ${
                  selectedMoods.includes(category) ? styles.selected : ''
                }`}
                onClick={() => handleMoodToggle(category)}
              >
                <div className={styles.checkbox}></div>
                <span className={styles.categoryText}>{category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.melCharacter}>
            <div className={styles.melIcon}></div>
            <div className={styles.speechBubble}>
              have something specific in mind? Mel's got you!
            </div>
          </div>

          <button className={styles.nextButton} onClick={handleContinue}>
            <div className={styles.arrow}></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mood
