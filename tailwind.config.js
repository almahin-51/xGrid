/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat:["Montserrat", "Sans-serif"],
        russo: ["Russo One", "Sans-serif"],
      },
    },
  },
  plugins: [],
}