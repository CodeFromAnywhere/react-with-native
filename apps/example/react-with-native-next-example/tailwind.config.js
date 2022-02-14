const rwnModules = require("./transpile.config");
const rwnModulesContent = rwnModules
  .map((module) => {
    return [
      // it needs to search both node_modules and the node_modules of my workspace
      process.env.TAILWIND_CONTENT_MODULE_DIR_1 ||
      process.env.TAILWIND_CONTENT_MODULE_DIR_2
        ? null
        : `./node_modules/${module}/**/*.tsx`,
      process.env.TAILWIND_CONTENT_MODULE_DIR_1
        ? process.env.TAILWIND_CONTENT_MODULE_DIR_1.replace("[module]", module)
        : null,
      process.env.TAILWIND_CONTENT_MODULE_DIR_2
        ? process.env.TAILWIND_CONTENT_MODULE_DIR_2.replace("[module]", module)
        : null,
    ].filter(Boolean);
  })
  .reduce((previous, current) => [...previous, ...current], []);

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", ...rwnModulesContent],
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
};
