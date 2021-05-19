module.exports = {
  purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {

       '98': '25rem',
       '112' : '26rem'
      },
      fontFamily: {
        lobster: ['Lobster']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
