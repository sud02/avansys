import styles from './Header.module.scss'
import headerLogo from '@/assets/header/header_logo.png'
import headerBag from '@/assets/header/Header_bag.png'
import heartMenu from '@/assets/header/heart_menu.png'

const Header = () => {
  const handleMenuClick = () => {
    console.log('Menu clicked')
  }

  const handleBagClick = () => {
    console.log('Bag clicked')
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.menuButton} onClick={handleMenuClick}>
          <img 
            src={heartMenu} 
            alt="Heart Menu" 
            className={styles.heartIcon}
            loading="eager"
          />
        </button>

        <div className={styles.logoContainer}>
          <img 
            src={headerLogo} 
            alt="Caramel Logo" 
            className={styles.logo}
            loading="eager"
          />
        </div>

        <button className={styles.bagButton} onClick={handleBagClick}>
          <img 
            src={headerBag} 
            alt="Shopping Bag" 
            className={styles.bagIcon}
            loading="eager"
          />
        </button>
      </div>
    </header>
  )
}

export default Header
