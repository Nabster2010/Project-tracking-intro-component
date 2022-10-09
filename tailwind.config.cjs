/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 100%, 68%)",
        VeryDarkBlue: "hsl(230, 29%, 20%)",
        DarkGrayishBlue: "hsl(230, 11%, 40%)",
        GrayishBlue: "hsl(231, 7%, 65%)",
        LightGrayishBlue: "hsl(207, 33%, 95%)",
      },
      fontFamily: {
        Barlow: "Barlow, sans-serif",
        BarlowCondensed: "Barlow Condensed, sans-serif",
      },
      animation: {
        "slide-tr": "slideToRight 0.8s linear ",
        "slide-tl": "slideToLeft .8s linear ",
        "slide-down": "slideDown .5s linear ",
      },
      keyframes: {
        slideToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideToLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },

  plugins: [],
};
