/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      textColor: "#fff",
      fontFamily: {
        sans: [`"Montserrat", sans-serif`, ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#f9216d",
        secondary: "#181b23",
        tertiary: "#1f2029",
        error: "#be1622",
        white: "#fff",
        textSecondary: "#b3b5c6",
      },
    },
  },
  plugins: [],
};
