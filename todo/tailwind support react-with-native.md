Two issues:

1) React Native doesn't support many tailwind classes and especially no custom ones.
2) A Next.js project dependency doesn't always compile the tailwind classes, even if they're added to the content array in tailwind.config.js

Solution:

1) Somehow just stop the error from popping up and ignore those classes. The unimplemented classes need to be applied via style instead.
2) Add a good guide to make tailwind work in development with workspaces and symlinks using an envfile
3) Find out how to build the tailwind into css before releasing my packages