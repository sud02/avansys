import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './AddOn.module.scss'

const AddOn = () => {
  const navigate = useNavigate()
  const [selectedAddons, setSelectedAddons] = useState([])

  const addons = [
    {
      id: 'chocolate-dipped',
      name: 'Chocolate Dipped',
      price: 3.99,
      image: '🍫',
      description: 'Premium dark chocolate coating',
      category: 'coating'
    },
    {
      id: 'nuts-mix',
      name: 'Mixed Nuts',
      price: 2.49,
      image: '🥜',
      description: 'Almonds, walnuts, and pecans',
      category: 'topping'
    },
    {
      id: 'sea-salt',
      name: 'Extra Sea Salt',
      price: 0.99,
      image: '🧂',
      description: 'Fleur de sel from Brittany',
      category: 'seasoning'
    },
    {
      id: 'gold-dust',
      name: 'Edible Gold Dust',
      price: 5.99,
      image: '✨',
      description: '24k edible gold for luxury',
      category: 'luxury'
    },
    {
      id: 'rose-petals',
      name: 'Rose Petal Garnish',
      price: 2.99,
      image: '🌹',
      description: 'Organic dried rose petals',
      category: 'garnish'
    },
    {
      id: 'coconut-flakes',
      name: 'Toasted Coconut',
      price: 1.99,
      image: '🥥',
      description: 'Premium toasted coconut flakes',
      category: 'topping'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Add-ons' },
    { id: 'coating', name: 'Coatings' },
    { id: 'topping', name: 'Toppings' },
    { id: 'seasoning', name: 'Seasonings' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'garnish', name: 'Garnish' }
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredAddons = activeCategory === 'all'
    ? addons
    : addons.filter(addon => addon.category === activeCategory)

  const handleAddonToggle = (addonId) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
  }

  const handleAddToCart = () => {
    const selectedAddonDetails = addons.filter(addon => selectedAddons.includes(addon.id))
    console.log('Adding add-ons to cart:', selectedAddonDetails)
    alert(`Added ${selectedAddons.length} add-on(s) to your cart!`)
    navigate('/home')
  }

  const selectedAddonDetails = addons.filter(addon => selectedAddons.includes(addon.id))
  const totalPrice = selectedAddonDetails.reduce((sum, addon) => sum + addon.price, 0)

  return (
    <div className={styles.addon}>
      <div className={styles.container}>
        <header className={styles.header}>
          <button className={styles.backButton} onClick={() => navigate('/home')}>
            ← Back to Home
          </button>
          <h1 className={styles.title}>Customize Your Caramel</h1>
          <p className={styles.subtitle}>
            Add premium toppings and enhancements to make your caramel experience extraordinary
          </p>
        </header>

        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${
                activeCategory === category.id ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.addonGrid}>
          {filteredAddons.map((addon) => (
            <div
              key={addon.id}
              className={`${styles.addonCard} ${
                selectedAddons.includes(addon.id) ? styles.selected : ''
              }`}
              onClick={() => handleAddonToggle(addon.id)}
            >
              <div className={styles.addonImage}>
                {addon.image}
              </div>
              <div className={styles.addonInfo}>
                <h3 className={styles.addonName}>{addon.name}</h3>
                <p className={styles.addonDescription}>{addon.description}</p>
                <span className={styles.addonPrice}>+${addon.price.toFixed(2)}</span>
              </div>
              <div className={styles.checkbox}>
                {selectedAddons.includes(addon.id) && <span className={styles.checkmark}>✓</span>}
              </div>
            </div>
          ))}
        </div>

        {selectedAddons.length > 0 && (
          <div className={styles.cartSummary}>
            <div className={styles.summaryContent}>
              <div className={styles.selectedItems}>
                <h3>Selected Add-ons ({selectedAddons.length})</h3>
                <div className={styles.itemList}>
                  {selectedAddonDetails.map((addon) => (
                    <div key={addon.id} className={styles.summaryItem}>
                      <span>{addon.name}</span>
                      <span>${addon.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.total}>
                  <span>Total Add-on Cost:</span>
                  <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button className={styles.addToCartButton} onClick={handleAddToCart}>
                Add to Cart (${totalPrice.toFixed(2)})
              </button>
            </div>
          </div>
        )}

        <div className={styles.infoSection}>
          <h3>Why Choose Our Add-ons?</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🎨</div>
              <h4>Customization</h4>
              <p>Personalize your caramel experience with unique combinations</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⭐</div>
              <h4>Premium Quality</h4>
              <p>All add-ons use the finest ingredients and artisanal techniques</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🚚</div>
              <h4>Fast Delivery</h4>
              <p>Fresh preparation and quick shipping to your door</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddOn
