import { NestedWebPage, WebPage } from "webpage-types";
/**
TODO: support search for bundles (but this can be augmented word based)
*/
export declare const getNestedDatabaseMenu: (config?: {
    noOperationPath?: boolean | undefined;
    noOperationName?: boolean | undefined;
    noSrcRelativeFolder?: boolean | undefined;
    noPrefix?: boolean | undefined;
} | undefined) => Promise<{
    flat?: WebPage<null>[] | undefined;
    nested?: NestedWebPage[] | undefined;
}>;
//# sourceMappingURL=getNestedDatabaseMenu.d.ts.map