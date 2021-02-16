module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '5xl': '2.5rem',
      },
      height: {
        '1/10': '10%',
        '9/10': '90%',
        '4/5': '80%',
      },
      maxWidth: {
        '4/5': '80%',
      },
      translate: {
        '1/10': '10%',
        '-1/10': '-10%',
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