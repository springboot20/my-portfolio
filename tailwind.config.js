import defaultTheme from "tailwindcss";
import colors from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        "port-bg": "#282C33",
        "port-primary": "#C778DD",
        "port-black": "#282C33",
        "port-gray": "#767676",

        // Light theme colors (new)
        "port-light-bg": "#FAFAFA", // Very light gray background
        "port-light-primary": "#8B5CF6", // Purple that complements your pink
        "port-light-surface": "#FFFFFF", // Pure white for cards/surfaces
        "port-light-text": "#1F2937", // Dark gray for primary text
        "port-light-muted": "#6B7280", // Medium gray for secondary text
        "port-light-border": "#E5E7EB", // Light gray for borders
        "port-light-accent": "#F3F4F6",

        cyan: colors.cyan,
        emerald: colors.emerald,
        ...defaultTheme.colors,
      },
      backfaceVisibility: ["responsive"],
      fontFamily: {
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
