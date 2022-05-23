const rwnModules = [
  "react-with-native-form",
  "react-with-native-form-inputs",
  "react-with-native-ui",
];
const TAILWIND_CONTENT_MODULE_DIR_1 = "./node_modules/[module]/**/*.tsx";
const TAILWIND_CONTENT_MODULE_DIR_2 = "../../node_modules/[module]/**/*.tsx";

const rwnModulesContent = rwnModules
  .map((module) => {
    return [
      // it needs to search both node_modules and the node_modules of my workspace
      TAILWIND_CONTENT_MODULE_DIR_1 || TAILWIND_CONTENT_MODULE_DIR_2
        ? null
        : `./node_modules/${module}/**/*.tsx`,
      TAILWIND_CONTENT_MODULE_DIR_1
        ? TAILWIND_CONTENT_MODULE_DIR_1.replace("[module]", module)
        : null,
      TAILWIND_CONTENT_MODULE_DIR_2
        ? TAILWIND_CONTENT_MODULE_DIR_2.replace("[module]", module)
        : null,
    ].filter(Boolean);
    //filter(Boolean): it's a trick to filter an array leaving only the elements
    //that, when coerced to a boolean, are "true".
  })
  .reduce((previous, current) => [...previous, ...current], []);

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    ...rwnModulesContent,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
