/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
    fontSize: {
      sm: [
        "1rem",
        {
          lineHeight: "1rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      base: "1.35rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": [
        "3rem",
        {
          lineHeight: "3.2rem",
          letterSpacing: "0.01em",
          fontWeight: "500",
        },
      ],
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
    },
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
