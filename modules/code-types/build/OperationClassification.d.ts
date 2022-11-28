export declare const operationClassificationConst: readonly ["cjs", "ts", "esm", "node-cjs", "node-esm", "node-ts", "server-cjs", "ui-web", "ui-app", "ui-ts", "ui-cjs", "ui-esm"];
/**
 * `OperationClassification` tells you to what kind of environment the operation can be exposed to. It tells you things about how it will be built. There are three categories: Full stack, frontend only, and backend only. The aim is to do as much as possible in the full stack realm so it can be reused anywhere. If that is not possible, `ui-esm` is preferred for the frontend, or `node-esm` for things that require backend.
 *
 * TODO: It would be great to learn more about this topic and see if I can make more cross-environment packages. A great use case would be to create a wrapper around the current `fs-orm` to enable using it at the frontend too.
 *
 * # Possible values
 *
 * FULL STACK
 *
 * - `cjs`: only js (no node) (well, ts of course, but it gets built into common js)
 *
 * - `ts`: non-built typescript code (needs to be transpiled, not recommended)
 *
 * TODO: `esm`: builds to ESM module resolved Javascript
 *
 * FRONTEND ONLY (cannot be used within backend-only operations)
 *
 * - `ui-web`: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...
 *
 * - `ui-app`: uses react-native and exposes something on some port when it is ran
 *
 * - `ui-ts`: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled. Primarily used for big ui libraries tied to a `ui-web` and `ui-app` for convenience. For other things, it is highly discouraged, please use `ui-cjs` or `ui-esm`)
 *
 * - `ui-cjs`: ui which main entry points to javascript es5 files (this ui package can be built). don't import ESM packages in here, this may give problems.
 *
 * - `ui-esm`: ui which builds to ESM module resolved Javascript. All packages that use `ui-esm` packages, need to be `ui-esm`, `ui-es6`, `ui-web`, or `ui-app` in order to work properly. It seems to have difficulties using this in `ui-cjs`
 *
 * BACKEND ONLY (cannot be used within frontend-only operations)
 *
 * - `node-cjs`: includes other node packages, operations, core-imports, and globals.
 *
 * TODO: `node-esm`: Typescript package that is built to ESM Javascript which also includes all node packages, operations, core-imports and globals.
 *
 * TODO: `node-ts`: transpilable node package
 *
 * - `server-cjs`: exposes something on some port when it is ran and uses node code
 *
 * # Indexation
 *
 * Operations will be classified automatically. It is good to remember that:
 *
 * - It will be classified as UI if `isUiOperation` resolves to true
 * - It will be classified as Node if `Operation` has a (dev)dependency on `@types/node`.
 * - Otherwise, it will be classified as base typescript (full stack)
 * - It will be classified to an ESM operation if `tsconfigCompilesEsm` resolves to true.
 * - It will be classified to a TS operation if `packageCompilesTs` resolves to true
 * - In order for it to be classified as a server, you must set `isNodeServer` to true in the `.operation` config object of `Operation`
 */
export declare type OperationClassification = typeof operationClassificationConst[number];
//# sourceMappingURL=OperationClassification.d.ts.map