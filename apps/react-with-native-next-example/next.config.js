/** @type {import('next').NextConfig} */

const path = require("path");

const withTM = require("next-transpile-modules")(
  [
    "react-with-native-shared-example",
    "react-with-native",
  ],
  { resolveSymlinks: false, debug: true }
); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ["react", ...config.externals];
    }

    config.resolve.alias["react"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react"
    );

    return config;
  },
});
