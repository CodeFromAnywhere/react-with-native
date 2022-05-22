# Today

- Have a look at all imports. Fix mistakes
- Publish react-with-native-form-inputs and anything else that changed
- Make sure it builds
- Make very nice demo that not only demoes rwn, but also demoes sensible IF you are on sensiblestack.com or in development.
- Add backend to demo with chat functionality, deploy that
- Deploy demo to demo.reactwithnative.com and demo.sensiblestack.com. Write docs to navigate to demo and provide instructions to run it locally so you can test it on expo as well.
- Provide good in-code instructions as well in the demo/base-boilerplate code so people can easily learn everything.
- Provide links to the code on every demo page (navigates to https://github.com/Code-From-Anywhere/react-with-native/tree/main/packages/ui/src/pages/\*.tsx)
- Make sure demo runs on expo and next.js
- Maybe, use this demo as the default boilerplate of ui as well. Can the contents of react-native be fetched in the cli, instead of having this "base" folder? That would deduplicate code a lot!
- The codefromanywhere full-stack section could actually be based on the code from demo, since everything is explained there.

## Sensible tailwind

Some basic classNames for a very primitive but sensible layout that is supported by react-with-native and looks very nice on both mobile and web. You can just import them like this

```tsx
import ui from "sensible-ui";

// use it like this

<Input className={ui.textInput} />;
```

## Improve RWN everything

- See if it's feasible to add iframe to show github code next to the examples on every page. This would be very nice to learn.
- Try to use third-party folder for RWN
- Improve rwn-select
- Create rwn-select-multiple-input that selects one per time using rwn-select and adds the results to an Item[]
- Create rwn-multiple-input that lets you type and every time you press comma the input becomes a box you can delete. returns string[]
- Refactor/simplify rwn-form
- What was the reason we needed those packages in coworksurf again? Can we fix that?
- Have an example of every package in "ui"
- Have a way to navigate through all screens with a component that simply imports all pages from pages folder
- Add react appshell to sensible
- Render everything in a react and react native app with zero boilerplate
- Present examples in docusaurus
- Have links to the code on docs pages for when people want to internalise the code

This is urgent!
