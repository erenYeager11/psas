/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2f7',
          100: '#d5dce8',
          200: '#aab9d1',
          300: '#7f96ba',
          400: '#5573a3',
          500: '#3a5a8c',
          600: '#2e4870',
          700: '#1a2744',
          800: '#121c32',
          900: '#0a1020',
        },
        accent: {
          50: '#fdf8ed',
          100: '#f9ecd0',
          200: '#f0d89f',
          300: '#e6c36e',
          400: '#d4a843',
          500: '#c49530',
          600: '#a67726',
          700: '#7d5a1d',
          800: '#553e15',
          900: '#2d210b',
        },
        surface: {
          50: '#fdfcfa',
          100: '#f8f7f4',
          200: '#f0eeea',
          300: '#e5e2dc',
          400: '#d0ccc3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
