module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Metropolis', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'body': ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
      },
      fontSize: {
        l: ['18px', '26px'],
      },

      transitionProperty: {
        'width': 'width'
      },
      minWidth: {
        '20': '20rem',
        '200': '100rem'
      },
      minHeight: {
        '150': '600px'
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '5/6': '85%',
        '200': '700px'
      },
      Height: {
        '200': '700px'
      },
      colors:
      {
        'accent-1': '#333',
        primary: {
          '50': '#f4fdfa',
          '100': '#eafbf6',
          '200': '#c9f5e8',
          '300': '#a9efd9',
          '400': '#69e4bd',
          '500': '#28D8A1',
          '600': '#24c291',
          '700': '#1ea279',
          '800': '#188261',
          '900': '#146a4f'
        },
        greenSqill: {
          '50': '#F2F9F7',
          '100': '#D6F1E5',
          '200': '#B8E9D3',
          '300': '#9BDFC1',
          '400': '#7DD7AF',
          '500': '#25B086', // Base color
          '600': '#229E76',
          '700': '#1D8C65',
          '800': '#197A55',
          '900': '#146844',
        },
        green: '#28D8A1',
        // red: '#F9274D',
        yellow: '#F6AA1C',
        textGray: '#858585',
        containerGray: '#8a8a8e',
        secondWhite: '#E3E3E3',
        background: '#121212',
        backgroundLight: '#F9F9F9'

      },
    },
    // container: {
    //   screens: {
    //      sm: "100%",
    //      md: "700px",
    //      lg: "800px",
    //      xl: "900px"
    //   }
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ]
  // corePlugins: {
  //   container: false
  // },
  // plugins: [
  //   function ({ addComponents }) {
  //     addComponents({
  //       '.container': {
  //         maxWidth: '100%',
  //         '@screen sm': {
  //           maxWidth: '600px',
  //         },
  //         '@screen md': {
  //           maxWidth: '700px',
  //         },
  //         '@screen lg': {
  //           maxWidth: '800px',
  //         },
  //         '@screen xl': {
  //           maxWidth: '900px',
  //         },
  //       }
  //     })
  //   }
  // ]
}
