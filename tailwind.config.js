export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8eaf0",
          100: "#c5c9d9",
          200: "#9ea4c0",
          300: "#777fa7",
          400: "#5a638e",
          500: "#3d4775",
          600: "#2a3460",
          700: "#1a244a",
          800: "#0e1835",
          900: "#0a1628",
        },
        gold: {
          50: "#fdf8ed",
          100: "#f9edcc",
          200: "#f3dfa3",
          300: "#eccd70",
          400: "#e0b84a",
          500: "#d4a34a",
          600: "#b8893a",
          700: "#966f2d",
          800: "#7a5a24",
          900: "#5c441c",
        },
      },
    },
  },
  plugins: [],
};