module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Metropolis', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
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
        green: '#28D8A1',
        red: '#F9274D',
        yellow: '#F6AA1C',
        textGray: '#868686',
        secondWhite: '#E3E3E3',
        gray: {
          // darkest: '#1f2d3d',
          // dark: '#3c4858',
          DEFAULT: '#29292C',
          light: '#9D9DA4',
          lightest: '#EBEBEB',
        },
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
