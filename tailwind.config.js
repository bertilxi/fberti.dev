const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const colorMap = {
  ...defaultColors,
  ...colors,
};

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans:
        "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    },
    colors: {
      ...colorMap,
      primary: colorMap.blue,
      secondary: colorMap.violet,
      gray: colorMap.blueGray,
    },
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
};
