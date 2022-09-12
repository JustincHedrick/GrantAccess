/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite/**/*.js',
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/header_image.png')",
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': {
          10: '#CAE1D9',
          50: '#217A5D',
          300: '#1B634B',
          500: '#134736',
          700: '#0F382A'
        },
        'neutral': {
          50: '#DFDFDF',
          300: '#B8B8B8',
          500: '#8F8F8F',
          700: '#676767',
          900: '#676767'
        },
        'error': '#FF5151',
        'shade': {
          0: '#FAFAFA',
          100: '#23242C'
        }
      },
      borderWidth: {
        1: '1px',
        6: '6px'
      }
    }
  }
}
