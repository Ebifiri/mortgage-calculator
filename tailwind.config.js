/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime': 'hsl(61, 70%, 52%)',
        'red': 'hsl(4, 69%, 50%)',
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans, sans-serif'],
      },
    },
  },
  plugins: [],
}