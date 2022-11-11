export declare const operationClassificationConst: readonly ["js", "ts", "node", "server", "web", "app", "ui-es6", "ui-es5", "ui-esm"];
/**
 * # Classification
 *
 * TODO: think about what the differences are and how we need to change processes to make it all work good
 *
 * ## Possible values
 *
 * - js: only js (no node) (well, ts of course, but it gets built into js)
 *
 * - ts: non-built ts code
 *
 * - node: includes other node packages, operations, core-imports, or globals.
 *
 * - server: exposes something on some port when it is ran and uses node code
 *
 * - web: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...
 *
 * - app: uses react-native and exposes something on some port when it is ran
 *
 * - DEPRECATED: ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled. highly discouraged, please use ui-es5, or, if needed, ui-esm)
 *
 * - ui-es5: ui which main entry points to javascript es5 files (this ui package can be built). don't import ESM packages in here, this won't work.
 *
 * - ui-esm: ui which builds to ESM module resolved Javascript. All packages that use ui-esm packages, need to be `ui-esm`, `ui-es6`, or `web` in order to work properly.
 */
export declare type OperationClassification = typeof operationClassificationConst[number];
//# sourceMappingURL=OperationClassification.d.ts.map