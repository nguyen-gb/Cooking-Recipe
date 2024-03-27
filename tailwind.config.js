/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: "#EA3B92",
        secondary: "#0A031C",
        tertiary: "#353535",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          maxWidth: theme("columns.7xl"),
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.6"),
          paddingRight: theme("spacing.6"),
        },
      });
    }),
  ],
};
