# TODAY

- Have an example of every package.
- Improve crashes and functionality.
- Sensible/RWN Docs: Provide instructions to run it locally so you can test it on any platform
- Sensible/RWN Docs: Have links to the code on docs pages for when people want to internalise the code
- Provide good in-code instructions as well in the DEMO code so people can easily learn everything.
- Provide links to the code on every demo page (navigates to https://github.com/Code-From-Anywhere/react-with-native/tree/main/packages/ui/src/pages/\*.tsx). Add iframe to show github code next to the examples on every page. This would be very nice to learn. Only on big screens, otherwise just link to code.
- Copy react-with-native/ui to sensible/templates/base/packages/ui (make sure to remind myself of this somehow)
- Base codefromanywhere full-stack section on the DEMO, since everything is explained there. Make sure to document well how to add screens to next.js apps
- Create rwn-select-multiple-input that selects one per time using rwn-select and adds the results to an Item[]
- Create rwn-multiple-input that lets you type and every time you press comma the input becomes a box you can delete. returns string[]
- Add some basic classNames for a very primitive but sensible layout that is supported by react-with-native and looks very nice on both mobile and web. You can just import them like this. Get them from CoworkSurf

```tsx
import ui from "react-with-native-ui";

// use it like this

<Input className={ui.textInput} />;
```
