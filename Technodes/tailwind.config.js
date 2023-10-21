/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', ...fontFamily.sans],
      },
      colors: {
      
        content: 'rgb(var(--content) , <alpha-value>)',
        'primary-disable': 'rgb(var(--primary-disable) , <alpha-value>)',
        'primary': '#141414',
        'secondary': '#5b46e2',
      },
      screens: {
        xsm: '370px',
      },
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
