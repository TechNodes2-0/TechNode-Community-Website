/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#191825',
     'secondary': '#865DFF'
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
