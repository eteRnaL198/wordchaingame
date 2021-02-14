module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
        '1/10': '10%',
        '4/5': '80%',
        'full': '100%',
      'screen': '100vh',
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      zIndex: {
        '-10': '-10'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}