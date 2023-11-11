module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },

      gridTemplateColumns: {
        cardGrid: "repeat(auto-fill,minmax(160px,1fr))",
      },
      gridAutoColumns: {
        cardAuto: "minmax(160px, 1fr)",
      },
      colors: {
        csBlue: "#1F3D94",
        csGray: "#8f9eca",
        csSkyBlue: "#2B84EA",
        csLightSkyBlue: "#BFDAF9",
        csGreen: "#10B53E",
        white: "#ffff",
      },
      spacing: {
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "30%": "30%",
        "50%": "50%",
      },
    },
    textColor: (theme) => ({
      ...theme("colors"),
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
    }),
    maxWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
