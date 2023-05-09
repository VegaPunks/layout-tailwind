module.exports = {
  content: [
    "index.html",
    "./src/js/main.js"
  ],
  theme: {
    screens: {
      lg: {"max": "1999.99px"},
      md: {"max": "991.99px"},
      sm: {"max": "767.99px"},
      xs: {"max": "479.99px"},
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroGradient:   "linear-gradient(94.59deg, #4923B4 2.39%, #E878CF 97.66%)",
      },
      colors: {
        blueviolet: "#5027B5",
        lightgray: "#666768"
      },
      keyframes: {
        "fade-in": {
          from: {
            opactity: 0
          },
          to: {
            opactity: 1
          }
        }
      },
      animation: {
        fadeIn: "2s fade-in ease-in-out"
      }
    },
  },
  plugins: [],
};
