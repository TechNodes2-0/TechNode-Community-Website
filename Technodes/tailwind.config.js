/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#090580',
     'secondary': '#46458C'
    }),
    extend: {
      colors: {
        'textcolor': '#F4D3D3',
        'textdark': '#E8A9A9'
      }
    }
  },
  plugins: [],
};
