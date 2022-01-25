const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        'p-r': '40vh',
        'plr' : '12vw'
      },
      backgroundImage: {      
      },
      height: {
        '1080': '1080px',
        'hs': '20vh',
        'hl': '80vh'
      },
      colors: {
        'chillSlate': "rgb(25, 26, 34)",
        'neon-blue': "#2dfcfc",
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
