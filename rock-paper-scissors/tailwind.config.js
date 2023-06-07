/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
      },
      container:{
        center: true,
      },
      boxShadow:{
        'scissors': 'inset 0 5px 6px gray, 0 8px #a46e0a',
        'rock': 'inset 0 5px 6px gray, 0 8px #a11b34',
        'paper': 'inset 0 5px 6px gray, 0 8px #0d31e3'

      }
    },
  },
  plugins: [],
}