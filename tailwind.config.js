/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'cabin': ['Cabin', 'sans-serif'],
        'Merriweather': ['Merriweather', 'sans-serif']
      }
    },
  },
  plugins: [],
}

