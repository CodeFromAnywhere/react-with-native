/** @type {import('next').NextConfig} */

const path = require("path");
const transpilables = ["react-with-native-shared-example", "react-with-native"];
const withTM = require("next-transpile-modules")(
  transpilables,
  { resolveSymlinks: false, debug: false }
); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ["react", ...config.externals];
    }

    if (process.env.NODE_ENV === "development") {
      config.watchOptions = {
        poll: 2500,
      };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      ...transpilables.reduce((previous,module)=>{
        return {...previous,[module]: path.resolve(
          __dirname,
          ".",
          "node_modules",
          module
        )}
      },{})
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
