/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'ag-green': '#0CC14C',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
