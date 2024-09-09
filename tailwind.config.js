/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
}