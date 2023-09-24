
module.exports = {
  content: ["./index.html", "./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        p1: "#3d6282",
        p2: "#f15c22E1",
        p3: "#808080",
        p4: "#8AADD7",
        p5: "#195399E1",
        p6: "#FEF2F2",
        p7: "#fff",
        p8: "#705959",
        p9: "#BFA5A5",
        p10: "#0f3cc9",
        p11: "#DF6565"
      },
      backgroundImage: {
        'bGround': "url('./assets/bg.png')",
        'bGround1': "url('./assets/bg1.png')",
      },
    },
  },
  plugins: [],
};
