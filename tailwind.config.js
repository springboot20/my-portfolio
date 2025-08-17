import defaultTheme from "tailwindcss";
import colors from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "port-bg": "#282C33",
        "port-primary": "#C778DD",
        "port-black": "#282C33",
        "port-gray": "#767676",
        cyan: colors.cyan,
        emerald: colors.emerald,
        ...defaultTheme.colors,
      },
      backfaceVisibility: ["responsive"],
      fontFamily: {
        inter: '"Inter", sans-serif',
        "fira-code": '"Fira Code", monospace',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    },
  ],
};
