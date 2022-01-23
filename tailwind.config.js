module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#eee",
        silver: "#ecebff",
        white: "#FFFFFF",
        primary: "#1B263A",
        secondary: "#F5FBFF",
        accent: "#FC6767",
      },
    },
  },
  plugins: [],
};
