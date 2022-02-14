/** @type {import('next').NextConfig} */

const path = require("path");
const rwnModules = require('./transpile.config');

const withTM = require("next-transpile-modules")(rwnModules, {
  resolveSymlinks: false,
  debug: false,
}); // pass the modules you would like to see transpiled

// const withLinks = require("next-transpile-linked-modules")(rwnModules)
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
      ...rwnModules.reduce((previous, module) => {
        return {
          ...previous,
          [module]: path.resolve(__dirname, ".", "node_modules", module),
        };
      }, {}),
    };

    config.resolve.alias["react"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react"
    );

    //this is to be able to import svg files in this project (also in any dependencies)
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
});

// const withLinksCreator = (rwnModules)=>(nextConfig=>{

//   return Object.assign({},nextConfig,{
//     webpack(config,options){

//       if (options.isServer) {
//         config.externals = ["react", ...config.externals];
//       }
    
    
//       if (process.env.NODE_ENV === "development") {
//         config.watchOptions = {
//           poll: 2500,
//         };
//       }
    
//       config.resolve.alias = {
//         ...config.resolve.alias,
//         ...rwnModules.reduce((previous, module) => {
//           return {
//             ...previous,
//             [module]: path.resolve(__dirname, ".", "node_modules", module),
//           };
//         }, {}),
//       };
    
//       config.resolve.alias["react"] = path.resolve(
//         __dirname,
//         ".",
//         "node_modules",
//         "react"
//       );
    
//        if (typeof nextConfig.webpack === 'function') {
//          config = nextConfig.webpack(config, options);
//       }
//       return {...config, webpack:config}
//     }
//   })
// })