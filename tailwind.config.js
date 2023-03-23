/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#e5d8fb",
          200: "#cbb0f8",
          300: "#b089f4",
          400: "#9661f1",
          500: "#7c3aed",
          600: "#632ebe",
          700: "#4a238e",
          800: "#32175f",
          900: "#190c2f"
        },
        black: {
          100: "#d9d7d7",
          200: "#b3b0af",
          300: "#8c8887",
          400: "#66615f",
          500: "#403937",
          600: "#332e2c",
          700: "#262221",
          800: "#1a1716",
          900: "#0d0b0b"
        },
        white: {
          100: "#fefeff",
          200: "#fdfdff",
          300: "#fdfcff",
          400: "#fcfbff",
          500: "#fbfaff",
          600: "#c9c8cc",
          700: "#979699",
          800: "#646466",
          900: "#323233"
        },
      }
    },
  },
  plugins: [],
}