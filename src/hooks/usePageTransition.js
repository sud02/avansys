import { useEffect, useState } from 'react';

/**
 * Custom hook to handle component-level page transitions
 * @param {boolean} delayMount - Whether to delay the mount of children
 * @param {number} duration - Duration of transition in ms
 * @returns {Object} - Object containing isVisible state and ref
 */
const usePageTransition = (delayMount = false, duration = 300) => {
  const [isVisible, setIsVisible] = useState(!delayMount);

  useEffect(() => {
    if (delayMount) {
      // If delayMount is true, we start with isVisible false
      // and then set it to true after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 50); // Small delay to ensure DOM is ready
      
      return () => clearTimeout(timer);
    }
  }, [delayMount]);

  // Provide CSS variables for the transition
  const style = {
    '--transition-duration': `${duration}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  };

  return { isVisible, style };
};

export default usePageTransition; 