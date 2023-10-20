/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#000000',
     'secondary': '#3F2E3E'
    }),
    extend: {
      colors: {
        'textcolor': '#EFE1D1',
        'textdark': '#E384FF'
      }
    }
  },
  plugins: [],
};
