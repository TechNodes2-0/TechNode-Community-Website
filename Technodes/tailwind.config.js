/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#331D2C',
     'secondary': '#3F2E3E'
    }),
    extend: {
      colors: {
        'textcolor': '#FFA3FD',
        'textdark': '#E384FF'
      }
    }
  },
  plugins: [],
};
