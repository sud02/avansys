/**
 * Utility functions for handling scroll behavior and page transitions
 */

/**
 * Resets the scroll position to the top of the page
 */
export const scrollToTop = () => {
  window.scrollTo(0, 0);
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

/**
 * Handles smooth scrolling to a specific element
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Offset from the top in pixels (default: 70)
 */
export const scrollToElement = (elementId, offset = 70) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Prevents scrolling on the body
 * @param {boolean} prevent - Whether to prevent scrolling
 */
export const preventBodyScroll = (prevent) => {
  if (prevent) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

/**
 * Reset all scroll containers
 */
export const resetScrollContainers = () => {
  const scrollContainers = document.querySelectorAll('.scroll-container');
  scrollContainers.forEach(container => {
    if (container) {
      container.scrollTop = 0;
    }
  });
}; 