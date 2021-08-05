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
      backgroundImage: {
        beetle:
          "url('https://d2u0ktu8omkpf6.cloudfront.net/6ff4a2e594db65cde86151276a1a09edfe990d062e15b137.jpg')"
      },
      fontFamily: {
        inter: ['Inter'],
        teko: ['Teko']
      },
      colors: {
        primary: '#0E1620',
        onSurface: '#192533',
        secondary: '#19A463'
      },
      spacing: {
        30: '120px'
      },
      height: {
        18: ['72px'],
        156: ['624px']
      },
      borderWidth: {
        12: '12px',
        24: '24px'
      },
      boxShadow: {
        card: '24px 24px 250px 12px rgba(3, 187, 87, 0.24)'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
}
