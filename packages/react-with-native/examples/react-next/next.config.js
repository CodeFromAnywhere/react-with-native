/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["react-with-native"]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
});
