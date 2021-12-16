# Usage

```
<Select  {
  title: string;
  options: Item<T>[];
  onChange: (value: Item<T> | null) => void;
  value?: Item<T>;
  className?: string;
}>
{children}
</Select>
```

It renders a native ActionSheet on iOS, a custom actionsheet on Android, a bottom drawer on mobile web, and either a dropdown select or a context menu on web, based on if you have children or not.

# Installation

`yarn add react-with-native-select react-with-native`

# Todo

- [ ] remove dependency on @mui/material, @headlessui/react, @szhsin/react-menu
- [ ] make general react-with-native examples for all packages that show, among other things, this one. Publish it on vercel + snack
