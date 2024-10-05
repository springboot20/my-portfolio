import defaultTheme from 'tailwindcss';
import colors from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'port-yellow': '#ffb400',
        'port-black': '#2B2B2B',
        'port-green': '#7EB942',
        'port-gray': '#767676',
        cyan: colors.cyan,
        emerald: colors.emerald,
        ...defaultTheme.colors,
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
      }
    },
  },
  plugins: [],
};
