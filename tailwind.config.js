const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
      height: {
        screen: '100vh' /* Fallback for browsers that do not support Custom Properties */,
        vh: 'calc(var(--vh, 1vh) * 100)',
      },
      textStroke: {
        'custom-stroke': {
          textTransform: 'uppercase',
          WebkitTextStroke: '1px',
          strokeWidth: '1px',
          WebkitTextStrokeColor: '#FFFFFF57',
          stroke: '#ffffff5c',
          color: '#FFFFFF00',
        },
      },
    },
  },
  plugins: [],
}
