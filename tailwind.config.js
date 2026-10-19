/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tierra: {
          50: "#faf6f0",
          100: "#f3e9d9",
          200: "#e7d2b3",
          300: "#d8b685",
          400: "#c79a5c",
          500: "#b07f44",
          600: "#926334",
          700: "#744d2a",
          800: "#563a23",
          900: "#3a281a",
        },
        vino: {
          50: "#fcf3f3",
          100: "#f9e6e6",
          200: "#efc6c6",
          300: "#e29b9b",
          400: "#cf6b6b",
          500: "#b8474a",
          600: "#9d3340",
          700: "#7e2a36",
          800: "#5f2530",
          900: "#452029",
        },
        crema: "#faf6ee",
        arena: "#f1e7d4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
