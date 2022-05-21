# Unsupported things

Of course, react-with-native doesn't support everything.

It would pretty much be impossible to support all big libraries.
It's even quite hard to provide 100% support for everything from react, react-native, and next.js.

When something isn't supported by us, it's no big deal. You can easily work around this while still keeping a centralised UI codebase. All you need to do is create platform specific files.

By default, the metro-bundler gives priority for files with this pattern: `*.ios.ts(x)` `*.android.ts(x)`, and `*.native.ts(x)`. If these files exist, it will not use `*.ts(x)` when importing `*`, but instead go for the platform specific file. Because of this we can create separate files for other platforms if there is something that's not supported by react-with-native.
