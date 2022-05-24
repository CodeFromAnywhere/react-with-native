# React With Native

## Why?

1. To solve react-native-web's severe limitations.
2. To share 90% of your cosebase between your next.js app and react native app but still have the full functionality of Next.js and React Native while keeping their bundles as small as possible.
3. To provide an easy way to extend your React (Next.js) app so it can also be rendered in React Native.
4. Because most companies come from the react side and want an app later, not the other way around.

## Docs & installation instructions

[see the website](https://reactwithnative.com)

## Contributing

React with Native has been built with [sensible](https://sensiblestack.com). To start developing:

- run `yarn dev` to watch all package changes & open the dev dashboard.
- run `yarn start:label`, where label can be one of `app`, `docs`, `server`, or `web` depending on what you are developing

## Demo

Check [our demo](https://demo.reactwithnative.com) here. It runs on [Sensible](https://sensiblestack.com) using all functionalities of react-with-native. There is almost no app-specific code!

To run the app locally, do the following

- clone this repo
- follow the [expo installation instructions](https://docs.expo.dev/get-started/installation/) of expo (react-native)
- `yarn` in root folder
- `yarn dev` in root folder
- new terminal tab: `yarn start:app` in root folder. Open your camera and **scan the QR code** or run the app using the simulator ([XCode required](https://docs.expo.dev/workflow/ios-simulator/))
- new terminal tab: `yarn start:web` in root folder (show it at http://localhost:3000)
