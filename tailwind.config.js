/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: ['pointer'],
      fontFamily: {},
      keyframes: {
        wiggle: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0);' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0);' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0);' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0);' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },
      dropShadow: {
        'temp': '0 1px 1px rgba(211, 218, 230, 30%)'
      }
    },
  },
  plugins: [],
}
