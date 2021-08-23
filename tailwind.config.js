module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
       default: 'repeat(3, minmax(500px, 1fr)) ',
      }
    },
    borderRadius: {
     default: '4px',
    },
    boxShadow: {
      default: '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    },
    fontSize: {
      base: '12px',
    },
    colors: {
      darkGray: '#373737',
      gray: '#BDBDBD',
      lightGray: '#DEDEDE',
    },
    height: {
      sm: '16px',
      md: '40px',
      lg:'210px'
    },
    width:{
      lg:'320px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
