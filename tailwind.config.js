module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      width: {
        250: "250px",
        350: "350px",
        400: "400px",
        780: "780px",
        760: "760px",
        800: "800px",
        900: "900px",
      },
      maxHeight: {
        60: "60vh",
        90: "25rem",
        450: "450px",
      },
      maxWidth: {
        small: "270px",
        medium: "300px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
