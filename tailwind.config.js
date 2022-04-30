module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { width: "100px", height: "50px", top: "50%", left: "50%" },
          "100%": { width: "100%", height: "100%", top: "0", left: "0" },
        },
        expandMobile: {
          "0%": {
            width: "200px",
            height: "300px",
            top: "12%",
            left: "25%",
            "clip-path": "polygon(2% 17%, 67% 4%, 85% 84%, 18% 97%)",
          },
          "100%": {
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
        },
        contract: {
          "0%": { width: "100%", height: "100%", top: "0", left: "0" },
          "100%": { width: "100px", height: "50px", top: "50%", left: "50%" },
        },
      },
    },
  },
  plugins: [],
};
