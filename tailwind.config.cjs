/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'regular': '0px 0px 32px rgba(159, 255, 64, 0.3)',
        'secondary': '0px 0px 64px rgba(255, 255, 255, 1)',
        'secondaryimg': '0px 0px 64px rgba(255, 255, 255, 0.3)'
      },
      colors: {
        'primary': '#9FFF40'
      }
    },
  },
  plugins: [],
}