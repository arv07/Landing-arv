/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    colors:{
      'black-primary': '#1E1E28',
      'black-secundary': '#353B48',
      'gray-primary': '#898A89',
      'yellow-primary':'#FBC531',
      'white-primary':'#FFFFFF'
    },
    fontWeight: {
      'fw-light': 300,
      'fw-regular': 400,
      'fw-medium': 500,
    },
    fontFamily: {
      'Roboto': ['"Roboto"', 'sans-serif']
    },
    /*screens: {
      'xs': '475px',
      'xxs': '360px',
      
    },*/
  },
  plugins: [],
}
