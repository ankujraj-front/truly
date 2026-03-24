/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    container: {
      screens: {
        sm: '630px',
        md: '900px',
        lg: '1230px',
        xl: '1360px',
      },
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),

  ],
}
