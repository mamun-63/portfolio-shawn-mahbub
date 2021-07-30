module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        teko: ['Teko']
      },
      colors: {
        primary: '#0E1620',
        onSurface: '#192533',
        secondary: '#19A463'
      },
      height: {
        18: ['72px']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
