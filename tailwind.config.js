/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'sans': ['Studio Pro', 'sans-serif'],
    },
    fontSize: {
      sm: ['0.9rem', '1.1rem'],
      base: ['1.15rem','1.35rem'],
      xl: '24px',
      '2xl': '60px',
      '3xl': '96px',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        primary: '#19295A',
      }
    },
  },
  plugins: [],
}
