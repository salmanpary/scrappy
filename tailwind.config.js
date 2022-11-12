/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'base': ['Oswald', 'sans-serif'] ,
      'poppins': ['Poppins', 'sans-serif'],
      'poor': ['Poor Story', 'cursive'],
      'logo': ['Ruler Modern', 'normal'],
    },
  },
  },
  plugins: [],
}
