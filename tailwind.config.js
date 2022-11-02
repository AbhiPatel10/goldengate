module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}
