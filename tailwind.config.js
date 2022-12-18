/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],

  content: [
    "./src/**/*.{html,js}", 
    "../public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
