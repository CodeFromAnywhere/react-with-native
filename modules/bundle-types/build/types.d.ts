/**
 * later we can make this an enum! it can be auto-generated along with enums for the operation paths, and more things alike.
 *
 * if it's an enum it will automatically be possible to select a value from it in the simplified schema form :D
 *
 * besides simply having OperationName, we can have specific operation classification operation names:
 *
 * - JsOperationName (js)
 * - NodeOperationName (node)
 * - ServerOperationName (server)
 * - AppShellOperationName (web, app, etc.)
 * - UiOperationName (ui-es6 and ui-es5)
 */
export declare type OperationName = string;
export declare type ServerOperationName = string;
/**
 * later this could be known by the frontend so it will render a ui to select a folder
 *
 * We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way.
 */
export declare type ProjectRelativeFolderPath = string;
export declare type ProjectRelativeFilePath = string;
export interface OperationPrivacy {
    operationName: string;
    /**
     * if public, everything will be kept
     *
     * if private, src and todo will be removed from bundle, unless it's a ui-es6 operation, because src is needed then. In that case, only "todo" will be deleted.
     */
    privacy: "public" | "private";
}
export declare type AppShell = "web" | "app" | "computer" | "vscode" | "browser" | "docusaurus";
//# sourceMappingURL=types.d.ts.map