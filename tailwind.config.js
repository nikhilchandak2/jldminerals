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
    },
  },
  plugins: [],
}