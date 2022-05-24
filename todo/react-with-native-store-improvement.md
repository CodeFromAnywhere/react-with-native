rerenders happen now if anything in the value changes, even if you only use dispatch. It would be great if we could track the usage of what is returned in the useStore hook, so it will prevent many rerenders.

Look at https://github.com/dai-shi/reactive-react-redux and see how react-tracked works and if it can be used to prevent rerenders with my hook.

This is the only real limitation of react-with-native-store.

Also, it could be nice to be able to setup not persisting certain keys (or persisting nothing at all). This is easy to implement.
