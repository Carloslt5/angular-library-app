/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      display: ["Archivo Black", "sans-serif"],
    },
    extend: {
      colors: {
        "antique-brass": {
          50: "#fbf6f1",
          100: "#f5e9df",
          200: "#ead1be",
          300: "#dcb195",
          400: "#cc8866",
          500: "#c36f4c",
          600: "#b55b41",
          700: "#964838",
          800: "#793c33",
          900: "#63322b",
          950: "#351815",
        },
        success: "#00c851",
        error: "#ff4444",
      },
    },
  },
  plugins: [],
};
