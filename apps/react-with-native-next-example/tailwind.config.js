const rwnModules = require('./transpile.config');
const rwnModulesContent = rwnModules
  .map((module) => {
    return [
      // it needs to search both node_modules and the node_modules of my workspace
      process.env.TAILWIND_CONTENT_MODULE_DIR_1 ||
      process.env.TAILWIND_CONTENT_MODULE_DIR_2
        ? null
        : `./node_modules/${module}/**/*.tsx`,
      process.env.TAILWIND_CONTENT_MODULE_DIR_1
        ? process.env.TAILWIND_CONTENT_MODULE_DIR_1.replace('[module]', module)
        : null,
      process.env.TAILWIND_CONTENT_MODULE_DIR_2
        ? process.env.TAILWIND_CONTENT_MODULE_DIR_2.replace('[module]', module)
        : null,
    ].filter(Boolean);
  })
  .reduce((previous, current) => [...previous, ...current], []);

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    ...rwnModulesContent
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent'
    },
  },
  plugins: [],
};
