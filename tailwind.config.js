/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'spin-slow': 'spin-slow 8s linear infinite',
        'tracking-in': 'tracking-in 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
      },
      fontFamily: {
        serif: ['Yu Mincho', 'MS Mincho', 'serif'],
      },
    },
  },
  plugins: [],
};