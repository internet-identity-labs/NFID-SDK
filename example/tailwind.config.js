module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#303030',
        white: '#FFFFFF',
        blue: {
          50: '#94d5f1',
          100: '#7fcdee',
          200: '#69c4eb',
          300: '#54bce8',
          400: '#3eb3e5',
          500: '#29abe2',
          600: '#259acb',
          700: '#2189b5',
          800: '#1d789e',
          900: '#196788'
        },
        yellow: {
          50: '#fdd89d',
          100: '#fdd089',
          200: '#fcc876',
          300: '#fcc062 ',
          400: '#fbb84f',
          500: '#fbb03b',
          600: '#e29e35',
          700: '#c98d2f',
          800: '#b07b29',
          900: '#976a23'
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
