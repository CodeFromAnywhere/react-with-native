module.exports = {
  content: ["./src/**/*.{ts,tsx}"], //...tailwindModules
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
