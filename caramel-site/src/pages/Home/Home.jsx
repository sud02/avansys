import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'

const Home = () => {
  const navigate = useNavigate()

  const categories = [
    {
      id: 'classic',
      name: 'Classic Caramels',
      image: '🍬',
      description: 'Timeless favorites',
      count: 12
    },
    {
      id: 'gourmet',
      name: 'Gourmet Collection',
      image: '✨',
      description: 'Premium ingredients',
      count: 8
    },
    {
      id: 'seasonal',
      name: 'Seasonal Specials',
      image: '🍂',
      description: 'Limited time offers',
      count: 6
    },
    {
      id: 'custom',
      name: 'Custom Creations',
      image: '🎨',
      description: 'Made just for you',
      count: 15
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'Salted Caramel Bites',
      price: '$12.99',
      image: '🧂',
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: 'Dark Chocolate Swirl',
      price: '$15.99',
      image: '🍫',
      rating: 4.9,
      isNew: false
    },
    {
      id: 3,
      name: 'Vanilla Bean Delight',
      price: '$11.99',
      image: '🌿',
      rating: 4.7,
      isNew: false
    }
  ]

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  const handleAddOnClick = () => {
    navigate('/addon')
  }

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h1 className={styles.brand}>Caramel</h1>
            <nav className={styles.nav}>
              <button className={styles.navButton} onClick={handleAddOnClick}>
                Add-ons
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h2 className={styles.heroTitle}>Sweet Moments Await</h2>
            <p className={styles.heroSubtitle}>
              Discover our handcrafted caramel collection, made with love and the finest ingredients
            </p>
          </section>

          <section className={styles.categories}>
            <h3 className={styles.sectionTitle}>Explore Categories</h3>
            <div className={styles.categoryGrid}>
              {categories.map((category) => (
                <div key={category.id} className={styles.categoryCard}>
                  <div className={styles.categoryIcon}>{category.image}</div>
                  <h4 className={styles.categoryName}>{category.name}</h4>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  <span className={styles.itemCount}>{category.count} items</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.featured}>
            <h3 className={styles.sectionTitle}>Featured Products</h3>
            <div className={styles.productGrid}>
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className={styles.productCard}
                  onClick={() => handleProductClick(product.id)}
                >
                  {product.isNew && <span className={styles.newBadge}>New</span>}
                  <div className={styles.productImage}>{product.image}</div>
                  <div className={styles.productInfo}>
                    <h4 className={styles.productName}>{product.name}</h4>
                    <div className={styles.productMeta}>
                      <span className={styles.rating}>⭐ {product.rating}</span>
                      <span className={styles.price}>{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
