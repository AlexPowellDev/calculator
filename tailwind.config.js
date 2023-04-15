/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  gridTemplateColumns:{
    '4': 'repeat(4, 6rem)',
  },
  gridTemplateRows:{
    '5': 'minmax(7rem, auto) repeat(5, 6rem)'
  },
    extend: {},
  },
  plugins: [],
}

