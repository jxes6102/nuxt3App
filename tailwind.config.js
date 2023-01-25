/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors:{
        testColor: '#990033'
      },
      fontSize: {
        '26px': '26px',
        '28px': '28px',
        '34px': '34px',
      },
    }
  },
  plugins: []
}
