/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#141414',
     'secondary': '#5b46e2'
    }),
    extend: {
      colors: {
        'textcolor': '#dee3e9',
        'textdark': '#E384FF'
      }
    }
  },
  plugins: [],
};
