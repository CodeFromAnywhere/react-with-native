const { getTailwindModules } = require("react-with-native");

const tailwindModules = getTailwindModules({
  packages: [
    "react-with-native",
    "react-with-native-alert",
    "react-with-native-form",
    "react-with-native-form-inputs",
    "react-with-native-modal",
    "react-with-native-notification",
    "react-with-native-router",
    "react-with-native-select",
    "react-with-native-store",
    "react-with-native-ui",
    "ui",
  ],
  modules: [],
  isWorkspace: true,
});

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}", ...tailwindModules],
  theme: { extend: {} },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
