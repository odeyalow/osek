/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: "#F8F9FA",
        accent: "#ECF0F6",
        "accent-2": "#CED4DA",
        "accent-3": "#6C757D",
        dark: "#212529"
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
