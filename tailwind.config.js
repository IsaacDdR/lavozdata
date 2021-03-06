module.exports = {
  theme: {
    extend: {
      colors: {
        "blue-usa": "#021ed4",
        "red-usa": "#d9090c",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },

      backgroundImage: (theme) => ({
        "sm-pattern": "url('~/static/images/radio-station.jpg')",
      }),
    },
  },
};
