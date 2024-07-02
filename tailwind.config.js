/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '830px',
      xl: '1330px'
    },
    extend: {
      colors: {
        Primary:'#242a2b',
        Second: '#76ABAE',
        Accent: {
          DEFAULT: '#346fa4',
          Primary: '#344C64',
          Second: '#240750'
        },
      },
    },
    fontFamily: {
      Primary: 'Poppins',
      Second: 'Montserrat'
    }
  },
  plugins: [],
}