module.exports = {
  content: [
    //dev testing purposes for html files. delete 1st one below before live deployment
    './public/**/*.html',
    './public/js/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
    './views/**/*.handlebars',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      scale: {
        flip: '-1',
      },
      scrollMargin: {
        22: '88px',
      },
      margin: {
        22: '88px',
      },
      flex: {
        0.5: '0.5 1 0%',
      },
      height: {
        '10vh': '10vh',
        '40vh': '40vh',
        '60vh': '60vh',
        '80vh': '80vh',
        96: '384px',
      },
      width: {
        '10vw': '10vw',
        '40vw': '40vw',
        '60vw': '60vw',
        '80vw': '80vw',
        '90vw': '90vw',
        64: '256px',
      },
      maxWidth: {
        276: '69rem',
      },
      transitionProperty: {
        flex: 'flex',
        filter: 'filter',
      },
      keyframes: {
        radiate: {
          '0%': { boxShadow: '0 0 0 0 rgba(255,255,255,1)' },
          '70%': { boxShadow: '0 0 2rem 1.5rem rgba(255,255,255, 0)' },
        },
      },
      animation: {
        radiate: 'radiate 2s infinite',
      },
      colors: {
        'rich-black-fogra-29': '#001219ff',
        'blue-sapphire': ' #005f73ff',
        'viridian-green': '#0a9396ff',
        'middle-blue-green': '#94d2bdff',
        'medium-champagne': '#e9d8a6ff',
        gamboge: '#ee9b00ff',
        'alloy-orange': '#ca6702ff',
        rust: '#bb3e03ff',
        rufous: '#ae2012ff',
        'sonic-silver': '#6c757dff',
        cultured: '#f8f9faff',
        'ruby-red': '#9b2226ff',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
