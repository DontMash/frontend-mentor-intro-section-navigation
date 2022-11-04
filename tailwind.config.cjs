/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,svelte}",
  ],
  theme: {
    extend: {},
    colors: {
      'almost-white': '#fafafa',
      'medium-gray': '#696969',
      'almost-black': '#141414',
      'kinda-purple': '#736dee',
    },
    fontFamily: {
      'epilogue': ['Epilogue', 'sans-serif'],
    },
  },
  plugins: [
    require("tailwindcss-scoped-groups")
  ],
};
