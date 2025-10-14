/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // 'sans-serif' acts as a fallback font
      },
    },
  },
plugins: [
    tailwindScrollbar,
  ],
}