/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3874ff',
        danger: '#ed2000',
        success: '#25b003',
      },
      fontSize: {
        'xs': '8px', 
        'sm': '10px', 
        'md': '12px',  
        'lg': '14px', 
        'xl': '16px',  
        '2xl': '18px',  
        '3xl': '20px',  
      },
      // fontFamily: {
      //   sans: ['Montserrat', 'sans-serif'], // ตั้งค่า poppins เป็นฟอนต์หลัก
      // },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}