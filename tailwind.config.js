/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        screens: {
          sm: "768px",
          md: "991px",
          lg: "1200px",
          "2xl": "1496px",
        },
      },
      colors: {
        primary: "#151875",
        secondary: "#3F509E",
        third: "#FB2E86",
        fourth: "#7E33E0",
        fifth:'#72718F',
        sixth:'#F1F0FF',
      },
    },
    fontFamily: {
      primary: ["Lato", "sans-serif"],
      secondary: ["Josefin Sans", "sans-serif"],
      third: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [],
};
