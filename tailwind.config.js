/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"#26355D",
        accent:"#FFDB00",
        tangy:"#FF8F00",
        purps:"#AF47D2"
      }
    },
  },
  plugins: [],
}

