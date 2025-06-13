// Navigation utilities
export const navigateToSection = (sectionNumber) => {
  if (window.fullpage_api) {
    window.fullpage_api.moveTo(sectionNumber);
  }
};

export const navigateToHome = () => {
  window.location.href = '/home';
};

export const navigateBack = () => {
  window.history.back();
};

// Scroll utilities
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// SEO utilities
export const generatePageTitle = (pageTitle, includeCompany = true) => {
  return includeCompany ? `${pageTitle} | JLD Minerals` : pageTitle;
};

export const generateMetaDescription = (description, maxLength = 160) => {
  return description.length > maxLength 
    ? `${description.substring(0, maxLength)}...` 
    : description;
};

// Image optimization utilities
export const getOptimizedImageSrc = (imagePath, width = null, quality = 85) => {
  // For future implementation with image optimization service
  if (width) {
    return `${imagePath}?w=${width}&q=${quality}`;
  }
  return imagePath;
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (imageArray) => {
  try {
    const promises = imageArray.map(src => preloadImage(src));
    return await Promise.all(promises);
  } catch (error) {
    console.warn('Failed to preload some images:', error);
    return [];
  }
};

// Format utilities
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 12) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
  }
  return phoneNumber;
};

// Performance utilities
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Local storage utilities
export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn('Failed to set localStorage:', error);
    return false;
  }
};

export const getLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn('Failed to get localStorage:', error);
    return defaultValue;
  }
};

export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn('Failed to remove localStorage:', error);
    return false;
  }
};

// Device detection utilities
export const isMobile = () => {
  return window.innerWidth <= 768;
};

export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

export const isDesktop = () => {
  return window.innerWidth > 1024;
};

// Analytics utilities (for future implementation)
export const trackEvent = (eventName, properties = {}) => {
  // Placeholder for analytics tracking
  if (process.env.NODE_ENV === 'development') {
    console.log('Track Event:', eventName, properties);
  }
  // Future: implement with analytics service like Google Analytics, Mixpanel, etc.
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', { page: pageName });
};

// Error handling utilities
export const logError = (error, context = '') => {
  console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  // Future: send to error tracking service like Sentry
};

export const handleAsyncError = (asyncFunction) => {
  return async (...args) => {
    try {
      return await asyncFunction(...args);
    } catch (error) {
      logError(error, asyncFunction.name);
      throw error;
    }
  };
}; 