/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme: '#0B0B0B',
        txtT: '#D0D4F4',
        txtS: '#8C90AE'
      },
      fontFamily:{
        mont: ['Lato', 'sans-serif'],
        danc: ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}
