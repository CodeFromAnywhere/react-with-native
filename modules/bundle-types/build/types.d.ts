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
/**
 * This type can specify a frontend and backend that belong to each other. it doesn't include all operations that the ui or server are dependent on, they are calculated separately
 */
export interface FrontBackBundle {
    /**
     * any operation names that are not necesarily dependencies of the named front-back bundle but still need to be available.
     */
    operations?: OperationPrivacy[];
    /**
     * (optional) main shared ui package of the frontend
     */
    uiOperationName?: string;
    /**
     * which app shell(s) or app operations are there for the frontend?
     */
    appShellOperationNames?: string[];
    /** operation name for server, if this UI is connected to one */
    serverOperationName?: string;
    /**
     * if there is a ui and it has a web-shell, and it is deployed somewhere into production, add the deployed domain here.
     */
    productionWebUrl?: string;
    /**
     * if the server is to be deployed, specify the server-env package that exposes the server environment variables (JSON) to the ui
     *
     * By default, uses "server-env" operation, which simply exposes a configuration env.json file. the generation of the bundle will set the "remoteServer" key in this env.json to the "productionApiUrl" so the deployed version can reach the api
     */
    envOperationName?: string;
    /**
     * if there is one, it should be specified here (without trailing slash)
     */
    productionApiUrl?: string;
    /**
     * if this is provided, all endpoints require this auth token to be provided, or the endpoints do not work
     *
     * if you wish to have a more extensive authentication method for your endpoints, make sure to create your own auth layer
     */
    endpointsAuthToken?: string;
}
/**
 * configuration that can be applied when generating a new bundle
 */
export declare type GenerateBundleConfig = {
    /** skips the step where it gets the new stuff from github */
    skipPull?: boolean;
    /** skips the step where it pushes the new bundle to remote */
    skipPush?: boolean;
    /** skips the step where it saves to the db */
    skipUpsert?: boolean;
    /** descriptioin for git commit, if pushing. Default is "monorepo update" */
    description?: string;
    /** normally, the informationStrategy is taken from BundleConfig (if present). Can be overwritten with this setting */
    informationStrategy?: InformationStrategy;
    debug?: boolean;
    /**
     * optionally, specify a custom branch name to pull from
     */
    branchName?: string;
};
/**
 * push (default): take needed information from project and push to bundle (removing the existing info)
 *
 * pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS
 *
 * pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs
 *
 * NB: Later we may want to define this setting on a per-model basis!
 */
export declare type InformationStrategy = "push" | "pullReplace" | "pullMerge";
//# sourceMappingURL=types.d.ts.map