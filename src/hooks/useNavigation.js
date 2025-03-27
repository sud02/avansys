import { useNavigate } from 'react-router-dom';
import { preventBodyScroll } from '../utils/scrollUtils';

/**
 * Custom hook for handling navigation with transition effects
 * @returns {Function} navigate function with transition
 */
const useNavigation = () => {
  const navigate = useNavigate();

  /**
   * Navigate to a new route with transition effects
   * @param {string} to - Target route
   * @param {Object} options - Navigation options
   * @param {number} options.delay - Delay before navigation in ms
   * @param {boolean} options.preventScroll - Prevent scrolling during transition
   */
  const navigateWithTransition = (to, options = {}) => {
    const { delay = 300, preventScroll = true } = options;
    
    // Add page exit transition class
    document.body.classList.add('page-exit');
    
    // Prevent scrolling if needed
    if (preventScroll) {
      preventBodyScroll(true);
    }
    
    // Navigate after delay
    setTimeout(() => {
      navigate(to);
      
      // Remove transition class after navigation
      setTimeout(() => {
        document.body.classList.remove('page-exit');
        
        // Re-enable scrolling
        if (preventScroll) {
          preventBodyScroll(false);
        }
      }, 50);
    }, delay);
  };

  return navigateWithTransition;
};

export default useNavigation; 