export const colors = {
  gray: {
    100: "#F8F9FA",
    200: "#F0F2F3",
    300: "#D1D3D5",
    400: "#0b0e1366",
    500: "#757678",
    600: "#525457",
  },
  black: {
    base: "#000000",
    hover: "#3B3E43",
  },
  blue: {
    active: "#F6FAFF",
    activeDark: "#0B50D2",
    base: "#0E62FF",
    hover: "#2079FF",
    light: "#5993FC;",
  },
  violet: {
    base: "#5B2DDF",
    light: "#A085E7",
  },
  red: {
    base: "#EA1A1A",
    hover: "#FF1A27",
    active: "#DE2020",
  },
  green: {
    base: "#008847",
    hover: "#00A857",
  },
};

export const fontSize = {
  titleLarge: [
    "54px",
    {
      lineHeight: "64px",
    },
  ],
  title: [
    "42px",
    {
      lineHeight: "50px",
    },
  ],
  titleMobile: [
    "32px",
    {
      lineHeight: "40px",
    },
  ],
};

export const fontFamily = {
  inter: ["Inter", "sans-serif"],
};

export const dropShadow = {
  blue: "0 0px 2px rgba(14,98,255,1)",
};

export const boxShadow = {
  black: "0 3px 10px rgba(59,62,67,0.4)",
  blueLight: "0 3px 10px rgba(32,121,255,0.4)",
  iframe: "0 3px 20px rgba(0,0,0,0.1)",
  red: "0 0px 2px rgba(234,26,26,1)",
};

export const blur = {
  "4xl": "80px",
  "5xl": "96px",
  "6xl": "112px",
  "7xl": "128px ",
};

module.exports = require("tailwindcss/plugin")(function () {}, {
  theme: {
    extend: { blur, colors, fontSize, fontFamily, dropShadow, boxShadow },
  },
});