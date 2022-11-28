import { ChildObject } from "recursive-types";
/**
 General purpose interface for a webpage. Should be compatible within the node.js environment and therefore should not contain any frontend functions. A nested variant (`NestedWebPage`) is used in the frontend to render the `nested-menu` with.
 */
export declare type WebPage<T = null> = {
    /**
     * query-path to be visited in order to find the page on the web.
     *
     * can also be used for nested nav in apps
     */
    queryPath: string;
    /**
     * can be provided to search in a better way
     *
     * can provide representations of possible searches for this page, so you can find the pages much better
     */
    searchTerms?: string[];
    /**
     * Optionally, open this page in a new window
     */
    target?: "_blank";
    /**
     * if true, menu item should be omitted (but path may still be reachable if you so wish)
     */
    isMenuHidden?: boolean;
    /**
     * if provided, will be shown in the menu besides the title
     * can be something nice like a notification or an emoji
     */
    menuTitleAugmentation?: string;
    /**
     * If provided, will be rendered as a tooltip when hovering over the menu item
     */
    menuTitleTooltip?: string;
    /**
     * if provided will be shown instead of the name of the file/folder in the menu. This makes it possible to provide better naming or add emoji's etc
     */
    menuTitle?: string;
    /**
     * Data connected to the `queryPath`. can take any shape or form based on your application.
     *
     * For example, you can provide a `projectRelativePath` to a file here
     *
     * The motivation to put this in a `extraData` object is because this makes the type super flexible.
     *
     * `.pageData` is not to be included into the menu, only to the page!
     *
     * Some ideas of what to provide here:
     *
     * - `projectRelativeFilePath` (so you can open the page if it's connected to some path)
     * - `operationName`
     * - `operationRelativePath`
     *
     *
     * What not to provide here:
     *
     * - `AugmentedWord`[] (this is way too big, so it'd be a waste of query time to provide it for every page already)
     * - stuff you already provided in the WebPage itself (it will also be available on the page, so why bother?)
     */
    pageData: T;
};
export declare type CustomWebPage = WebPage<null>;
export declare type FileWebPage = WebPage<FilePage>;
export declare type WriterWebPage = FileWebPage;
/**
 * specifically always a markdown page
 */
export declare type ReaderWebPage = FileWebPage;
/**
 * Only used for menu, so can be undefined because it shouldn't be available
 */
export declare type NestedWebPage = ChildObject<WebPage<null>>;
export declare type FilePage = {
    projectRelativeFilePath: string;
    internalLinkWord?: string | null;
    imagePath?: string | null;
    shortDescription?: string | null;
};
/**
 * Data needed to make a `WebPage`<CrudPage>
 */
export declare type CrudPage = {
    modelName: string;
    datasetSlugs?: string[];
    canCreate?: boolean;
    canRead?: boolean;
    canUpdate?: boolean;
    canDelete?: boolean;
    itemActionFunctionNames?: string[];
    pageActionFunctionNames?: string[];
};
/**
 * Data needed to make a `WebPage`<FunctionFormPage>
 */
export declare type FunctionFormPage = {
    functionName: string;
    actionWithResult?: string;
    routeOnIsSuccessful?: string;
    customTitle?: string;
    isMenuHidden?: boolean;
};
export declare type MenuObjectType<T> = {
    flat: WebPage<T>[];
    nested: NestedWebPage[];
};
//# sourceMappingURL=types.d.ts.map