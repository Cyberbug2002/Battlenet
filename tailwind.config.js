/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
}