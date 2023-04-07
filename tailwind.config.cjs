/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-light':'#232323',
        'primary-button': '#DFDFDF',
        'button-text': '#242424',
        light: '#242424',
        skyblue: '#61DBFB',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
