/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        bright: "#cefd51",
        error: "#d80d0d",
        dark: "#20303b",
        darkness: "#071925",
        grey: {
          default: "#9ca3a8",
          dark: "#6a757c",
          light: "#cdd1d3",
          lighter: "#f4f4f4",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
