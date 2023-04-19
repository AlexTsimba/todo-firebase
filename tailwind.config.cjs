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
        'primary-light': '#232323',
        'primary-button': '#DFDFDF',
        'color-background': '#c2c2c2',
        'color-input-background': '#d9d9d9',
        'color-text-primary': '#242424',
        'color-text-secondary': '#4B5563',
        'color-text-disabled': '#A6ABB2',
        'color-calendar-primary': '#f2f5f9',
        'color-calendar-secondary': '#aba8a8',
      },
      fontSize: {
        '4xl': ['clamp(24px, 3vw, 36px)', '36px'],
        '2xl': ['clamp(18px, 2vw, 24px)', '24px'],
        xl: ['clamp(16px, 2vw, 20px)', '20px'],
        md: '12px',
      },
    },
  },
  plugins: [require('daisyui')],
};
