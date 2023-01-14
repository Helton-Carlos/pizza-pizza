/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#F21905",
      magenta: "#FFE2E2",
      white: "#FFF",
      green: "#5ed5a8",
      yellow: "#ffc82c",
      gray: "#999fae",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
