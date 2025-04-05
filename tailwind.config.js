/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '384px',
      'max-xs': { max: '384px' },
      sm: '640px',
      'max-sm': { max: '640px' },
      md: '768px',
      'max-md': { max: '768px' },
      lg: '1024px',
      'max-lg': { max: '1024px' },
      xl: '1280px',
      'max-xl': { max: '1280px' },
      '2xl': '1536px',
      'max-2xl': { max: '1536px' }
    },
    extend: {}
  },
  plugins: []
}
