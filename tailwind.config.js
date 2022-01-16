const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
         cyan: colors.cyan,
      },
      animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "50%": { opacity: 0 },
        "100%": { opacity: 1 },
      }
    }
   },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}
