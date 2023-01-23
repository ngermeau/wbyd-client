/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit-16": "repeat(auto-fit, minmax(16rem, 1fr))",
        "auto-rows-400": "400px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        background: "#151515",
        title: "#f4533f",
        text: "#ebdbc2",
      },
    },
  },
  plugins: [],
}
