Typerepo is using the `OperationClassification` in many places, in order to determine certain characteristics about your code. It is very important to understand what it does!

`OperationClassification` tells you to what kind of environment the operation can be exposed to. It tells you things about how it will be built. There are three categories: Full stack, frontend only, and backend only. The aim is to do as much as possible in the full stack realm so it can be reused anywhere. If that is not possible, `ui-cjs` is preferred for the frontend, or `node-cjs` for things that require backend.

# Possible values

**FULL STACK**

- `cjs`: only js (no node) (well, ts of course, but it gets built into common js)

- `ts`: non-built typescript code (needs to be transpiled, not recommended)

- `esm`: builds to ESM module resolved Javascript

**FRONTEND ONLY** (cannot be used within backend-only operations)

- `ui-web`: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...

- `ui-app`: uses react-native and exposes something on some port when it is ran

- `ui-ts`: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled. Primarily used for big ui libraries tied to a `ui-web` and `ui-app` for convenience. For other things, it is highly discouraged, please use `ui-cjs` or `ui-esm`)

- `ui-cjs`: ui which main entry points to javascript es5 files (this ui package can be built). don't import ESM packages in here, this may give problems.

- `ui-esm`: ui which builds to ESM module resolved Javascript. All packages that use `ui-esm` packages, need to be `ui-esm`, `ui-es6`, `ui-web`, or `ui-app` in order to work properly. It seems to have difficulties using this in `ui-cjs`

**BACKEND ONLY** (cannot be used within frontend-only operations)

- `node-cjs`: includes other node packages, operations, core-imports, and globals.

- `node-esm`: Typescript package that is built to ESM Javascript which also includes all node packages, operations, core-imports and globals.

- `node-ts`: transpilable node package

- `server-cjs`: exposes something on some port when it is ran and uses node code

# Indexation

Operations will be classified automatically using `getOperationClassification`. It is good to remember that:

- It will be classified as UI if `isUiOperation` resolves to true
- It will be classified as Node if `Operation` has a (dev)dependency on `@types/node`.
- Otherwise, it will be classified as base typescript (full stack)
- It will be classified to an ESM operation if `tsconfigCompilesEsm` resolves to true.
- It will be classified to a TS operation if `packageCompilesTs` resolves to true
- In order for it to be classified as a server, you must set `isNodeServer` to true in the `.operation` config object of `Operation`. This is not indexed because it's very difficult to do automatically.

# Best practices

1. Only use "node" if you need node things like access to a database
2. Only use "ui" if you need react things like components
3. Prefer using non-node and non-ui as much as possible
4. Prefer using cjs over esm over ts unless needed
