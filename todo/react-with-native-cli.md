We need a script that can convert all html elements into the respective react-with-native components, add imports to them, and removes unused imports.

```
Best is to use a little cli for this: "npx rwn init {folder}" to apply it on any folder. It then looks for all <element (.*?)> and replaces it with <Element $1> and </element> and replaces it with </Element> for all supported elements. In does this recursively for every file/folder. It keeps track of all elements it encountered, and at the end of a file, it imports them with import { Element1, Element2, Element3 } from "react-with-native";

This will keep the code working in the exact same way in NextJS. However, to make it work in react-native too, you'd need to make some more changes:

1) replace router hook with wrapped router hook: simply replace `import (.*?) from "next/router";` with `react-with-native` and `import Link from "next/link"` with import { Link } from "react-with-native";`. These components should work the same in nextjs but do react-native stuff in react-native.

2) look in all node_modules and find html elements there. These can't be replaced, obviously. However, you could automatically create wrapper-files for these libraries, and change the import. E.g. if you have a <Dropdown /> element from "react-dropdown", just replace that with `import Dropdown from "../../wrappers/react-dropdown". in wrappers, Dropdown is a folder that contains two files: `index.tsx` and `index.native.tsx`. The first one just re-exports the needed utilities from the library. The native file exports stubs for components and functions. This can never be perfect, unless we can see the types of the functions we stubify and return the same type in our stubs, but it'll safe a lot of time anyway.


Before running the init command, check if the git status is dry (no changes) so you can easily revert it. If not in a git repo, show a warning first.
```
