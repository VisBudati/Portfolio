/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "10031b",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        custom: "#1b1b1b",
        customblue: "#1a1a1a",
        customdg: "#131313",
        customlg: "#212121",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "yellow-100": "f1c232",
        "tan-100": "#bfa98e",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};