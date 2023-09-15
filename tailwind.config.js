const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  plugins: [
    require("@tailwindcss/forms"),
  ],
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}','./src/**/*.css'],
  darkMode: false,
  variants: {},
}
