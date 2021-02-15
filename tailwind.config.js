module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '1/10': '10%',
        '4/5': '80%',
      },
      borderRadius: {
        '5xl': '2.5rem',
      },
      zIndex: {
        '-10': '-10',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}