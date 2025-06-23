/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jldBlue: "#2b235e",
        jldRed: "#ed1d25",
        jldWhite: "#ffffff",
      },
      fontFamily: {
        futura: ['"Work Sans"', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Viewport-based responsive sizes - Conservative scaling
        'responsive-sm': 'clamp(0.875rem, 1.5vw, 1rem)',
        'responsive-base': 'clamp(1rem, 1.8vw, 1.125rem)',
        'responsive-lg': 'clamp(1.125rem, 2vw, 1.25rem)',
        'responsive-xl': 'clamp(1.25rem, 2.5vw, 1.5rem)',
        'responsive-2xl': 'clamp(1.5rem, 3vw, 1.875rem)',
        'responsive-3xl': 'clamp(1.875rem, 3.5vw, 2.25rem)',
        'responsive-4xl': 'clamp(2.25rem, 4vw, 2.75rem)',
        'responsive-5xl': 'clamp(3rem, 5vw, 3.5rem)',
        'responsive-hero': 'clamp(3rem, 6vw, 4.5rem)',
      },
      spacing: {
        'responsive-xs': 'clamp(0.5rem, 1.5vw, 0.75rem)',
        'responsive-sm': 'clamp(1rem, 2vw, 1.25rem)',
        'responsive-md': 'clamp(1.5rem, 3vw, 2rem)',
        'responsive-lg': 'clamp(2rem, 4vw, 3rem)',
        'responsive-xl': 'clamp(3rem, 5vw, 4rem)',
        'responsive-2xl': 'clamp(4rem, 6vw, 6rem)',
      },
    },
  },
  plugins: [],
}