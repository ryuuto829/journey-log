module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        almostBlack: {
          100: '#24242B',
          200: '#26262D',
          300: '#1C1B21',
        },
        slate: {
          100: '#FBFBFC',
          200: '#C3C3C9',
          300: '#51525C',
          400: '#292930',
        },
        salmon: '#FA8072',
        dimSalmon: '#C9665B',
      },
      fontFamily: {
        primary: ['Quicksand'],
      },
      spacing: {
        100: '25rem',
        101: '30rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
