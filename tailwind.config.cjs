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
        light: '#242424',
        skyblue: '#61DBFB',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
