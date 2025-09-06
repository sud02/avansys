import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState('classic')

  // Mock product data - in real app this would come from an API
  const product = {
    id: id,
    name: 'Salted Caramel Bites',
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.8,
    reviews: 124,
    image: '🧂',
    description: 'Indulge in our signature salted caramel bites, crafted with premium ingredients and a perfect balance of sweet and salty flavors. Each bite is handcrafted to deliver an unforgettable taste experience.',
    ingredients: ['Premium caramel', 'Sea salt', 'Vanilla extract', 'Cream'],
    variants: [
      { id: 'classic', name: 'Classic', price: 12.99 },
      { id: 'dark', name: 'Dark Chocolate', price: 14.99 },
      { id: 'nuts', name: 'With Nuts', price: 13.99 }
    ],
    nutritionalInfo: {
      servingSize: '30g',
      calories: 140,
      sugar: '18g',
      protein: '1g'
    }
  }

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleAddToCart = () => {
    // Mock add to cart functionality
    console.log('Added to cart:', { product, quantity, selectedVariant })
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  const handleBackToHome = () => {
    navigate('/home')
  }

  const selectedVariantData = product.variants.find(v => v.id === selectedVariant)
  const totalPrice = (selectedVariantData?.price || product.price) * quantity

  return (
    <div className={styles.productDetail}>
      <div className={styles.container}>
        <button className={styles.backButton} onClick={handleBackToHome}>
          ← Back to Home
        </button>

        <div className={styles.productContent}>
          <div className={styles.productImage}>
            <div className={styles.imagePlaceholder}>
              {product.image}
            </div>
          </div>

          <div className={styles.productInfo}>
            <div className={styles.header}>
              <h1 className={styles.title}>{product.name}</h1>
              <div className={styles.rating}>
                <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span className={styles.ratingText}>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>${selectedVariantData?.price || product.price}</span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className={styles.discount}>
                  Save ${(product.originalPrice - (selectedVariantData?.price || product.price)).toFixed(2)}
                </span>
              )}
            </div>

            <div className={styles.description}>
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className={styles.variants}>
              <h3>Choose Your Style</h3>
              <div className={styles.variantOptions}>
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`${styles.variantButton} ${
                      selectedVariant === variant.id ? styles.selected : ''
                    }`}
                    onClick={() => setSelectedVariant(variant.id)}
                  >
                    {variant.name} - ${variant.price}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.ingredients}>
              <h3>Ingredients</h3>
              <ul>
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className={styles.purchaseSection}>
              <div className={styles.quantity}>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className={styles.quantityValue}>{quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>

              <div className={styles.total}>
                <span className={styles.totalLabel}>Total:</span>
                <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
              </div>

              <button className={styles.addToCartButton} onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
