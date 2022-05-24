# Creating a RWN package

## How to make css in a package that you use react-with-native in?

It's important that you create a CSS file that people can import in their project if they use your package. There are a couple of steps involved to do this.

1. Create a `tailwind.config.js` file

```js
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

2. Install some devDependencies:

```bash
yarn add -D tailwindcss tsc-watch
```

3. Add this to your package.json scripts

```json
{
  "dev": "npx tsc-watch --onSuccess 'yarn dev:tw'",
  "dev:tw": "tailwindcss -o css.css"
}
```

That's it!
