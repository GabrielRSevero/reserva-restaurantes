/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        damask: {
          50: '#fdf5ef',
          100: '#fbe8d9',
          200: '#f6cfb2',
          300: '#f0ae81',
          400: '#e9834e',
          500: '#e6703d',
          600: '#d54c21',
          700: '#b1381d',
          800: '#8d2e1f',
          900: '#72291c',
          950: '#3d120d',
        }
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}

