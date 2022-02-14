//contains all react-with-native packages we rely on so they can be transpiled with our settings and also be included in the tailwind css compilation process
const transpileModules = [
  "react-with-native",
  "react-with-native-form",
  "react-with-native-text-input",
  "react-with-native-password-input",
  "react-with-native-select",
  "react-with-native-toggle-input",
  "react-with-native-shared-example",
];

module.exports = transpileModules;
