# Expo and Next apps link configuration

## Next

### next.config.js

```
const rwnModules = require('./transpile.config');
const withTM = require("next-transpile-modules")(rwnModules, {
  resolveSymlinks: false,
  debug: false,
});

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

    return config;
  },
});
```

### transpile.config

- Add all packages to transpile

```
const transpileModules = [
    'react-with-native',
    'react-with-native-form',
    'react-with-native-text-input',
    'react-with-native-password-input',
    'react-with-native-toggle-input',
    'react-with-native-shared-example',
  ];
  
  module.exports = transpileModules;
```

### package.json

- Add all the dependencies

### tailwind.config.js

```
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
  ]
};
```

## Expo

### app.json

- Add the packagerOpts to expo attribute

"packagerOpts": {
  "config": "metro.config.js",
  "sourceExts": [
    "expo.ts",
    "expo.tsx",
    "expo.js",
    "expo.jsx",
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "wasm",
    "svg"
  ]
}

### declarations.d.ts

- Create the declarations.d.ts file and add for Svg

```
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

const { getDefaultConfig } = require("metro-config");
```

### metro.config.js

- Create the metro.config.js file and add for Svg

```
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
```

### babel.config.js

- Add the plugins

```
    presets: ['module:metro-react-native-babel-preset']
    plugins: ['react-native-reanimated/plugin']
```

### package.json

- Add the dependencies

- Add to devDependencies

```
    "react-native-svg": "^12.1.1",
    "react-native-svg-transformer": "^0.14.3",
```

## Shared source example

### package.json

- Add all packages in devDependencies