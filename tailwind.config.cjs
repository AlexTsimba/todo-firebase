/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        charcoal: '#242424',
        skyblue: '#61DBFB',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
