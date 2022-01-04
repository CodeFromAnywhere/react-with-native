# Usage

```
<MapInput  {
  title: string;
  options: Item<T>[];
  onChange: (value: Item<T> | null) => void;
  value?: Item<T>;
  className?: string;
}>
```

It renders a native ActionSheet on iOS, a custom actionsheet on Android, a bottom drawer on mobile web, and either a dropdown select or a context menu on web on big screens, based on if you have children or not.

# Installation

For React/Next.js apps:
`yarn add react-with-native-select react-with-native @mui/material @szhsin/react-menu @emotion/react @emotion/styled @headlessui/react`

For React Native/Expo apps:
`yarn add react-with-native-select react-with-native`

# Todo

- [ ] create menu for actions
