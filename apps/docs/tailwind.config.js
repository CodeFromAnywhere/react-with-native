module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#61dafb",
        navbar: "#20232a",
        main_section: "#282c34",
        dark_section: "#18191a",
        dark_1_section: "#18191aF2",
        brand_light: "#96e8ff",
        brand_dark: "#2dabcf",
      },
      animation: {
        "spin-fast": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
