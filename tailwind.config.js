const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        header: ["Merriweather Sans"],
        body: ["Roboto"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: "Merriweather Sans",
            },
            h2: {
              fontFamily: "Merriweather Sans",
            },
            h3: {
              fontFamily: "Merriweather Sans",
            },
            h4: {
              fontFamily: "Merriweather Sans",
            },
            p: {
              fontFamily: "Roboto",
            },
            a: {
              color: colors.red["700"],
              "&:hover": {
                color: colors.red["600"],
              }
            },
            "h1 > a": {
                textDecoration: "none"
            },
            "h2 > a": {
                textDecoration: "none"
            },
            "h3 > a": {
                textDecoration: "none"
            },
            "h4 > a": {
                textDecoration: "none"
            }
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
