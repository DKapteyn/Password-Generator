/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkGrey: "rgb(var(--veryDarkGrey)/<alpha-value>)",
        darkGrey: "rgb(var(--darkGrey)/<alpha-value>)",
        grey: "rgb(var(--grey)/<alpha-value>)",
        almostWhite: "rgb(var(--almostWhite)/<alpha-value>)",
        neonGreen: "rgb(var(--neonGreen)/<alpha-value>)",
        red: "rgb(var(--red)/<alpha-value>)",
        orange: "rgb(var(--orange)/<alpha-value>)",
        yellow: "rgb(var(--yellow)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
