/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
        'monserrat':['Montserrat'],
        'metal':['Metal'],

      
      },
      screens:{
        '3xl':'1700px',
        '4xl':'1800px'
      }
    },
  },
  plugins: [],

  
}

