const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["rubik", ...defaultTheme.fontFamily.sans],
        serif: ["rubik", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        tarawera: {
          50: "#e9fffe",
          100: "#c8fffe",
          200: "#98fffd",
          300: "#51feff",
          400: "#03f1ff",
          500: "#00d2f4",
          600: "#00a6cc",
          700: "#0083a4",
          800: "#066984",
          900: "#073b4c",//Principal
        },
        "blue-chill": {
          50: "#edfcfe",
          100: "#d1f6fc",
          200: "#a9ecf8",
          300: "#6edcf2",
          400: "#2cc2e4",
          500: "#10a5ca",
          600: "#118ab2",//Principal
          700: "#146a8a",
          800: "#1a5770",
          900: "#1a485f",
        },
        "caribbean-green": {
          50: "#ebfef6",
          100: "#cefde8",
          200: "#a2f8d6",
          300: "#66efc3",
          400: "#2adda9",
          500: "#06d6a0",//Principal
          600: "#009f77",
          700: "#007f63",
          800: "#00654f",
          900: "#025243",
        },
        "golden-tainoi": {
          50: "#fffaeb",
          100: "#fff0c6",
          200: "#ffdf88",
          300: "#ffd166",//Principal
          400: "#ffb220",
          500: "#f98f07",
          600: "#dd6802",
          700: "#b74706",
          800: "#94360c",
          900: "#7a2e0d",
        },
        "french-rose": {
          50: "#fff1f3",
          100: "#fee5e9",
          200: "#fdced7",
          300: "#faa7b7",
          400: "#f77591",
          500: "#ef476f", //Principal
          600: "#db2357",
          700: "#b9174a",
          800: "#9b1644",
          900: "#85163f",
        },
      },
    },
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};