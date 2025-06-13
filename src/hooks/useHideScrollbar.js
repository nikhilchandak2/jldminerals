import { useEffect } from 'react';

export const useHideScrollbar = () => {
  useEffect(() => {
    // Hide scrollbar with CSS
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
      }
      .hide-scrollbar::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
      }
      body {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
      }
      body::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function to remove style when component unmounts
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
}; 