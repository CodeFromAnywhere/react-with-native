import { MouseEventCallbacks } from "nested-menu-types";
import { NestedWebPage, WebPage } from "webpage-types";
export declare const getTitle: (item: WebPage<null>) => string;
export declare const getRealItemRecursive: (item: NestedWebPage) => NestedWebPage;
/**
 * General purpose NestedMenuItem.
 ----

 TODO:

 - tooltip support
 
 */
export declare const NestedMenuItem: (props: {
    item: NestedWebPage;
    /**
     * If true, items with a single child will be merged into the parent
     */
    mergeSingleChilds?: boolean | undefined;
    headersClickable?: boolean | undefined;
    level?: number | undefined;
} & MouseEventCallbacks) => JSX.Element | null;
//# sourceMappingURL=NestedMenuItem.d.ts.map