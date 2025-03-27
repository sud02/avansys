import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop, resetScrollContainers } from '../utils/scrollUtils';

// This component will automatically scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position when route changes
    scrollToTop();
    resetScrollContainers();
    
    // Add class to body to trigger page transition effects
    document.body.classList.add('page-transition');
    
    // Remove transition class after animation completes
    const timeout = setTimeout(() => {
      document.body.classList.remove('page-transition');
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop; 