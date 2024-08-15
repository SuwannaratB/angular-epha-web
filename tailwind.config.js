/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // ตั้งค่า poppins เป็นฟอนต์หลัก
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}