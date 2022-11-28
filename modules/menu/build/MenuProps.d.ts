/// <reference types="react" />
import { AugmentedWord } from "augmented-word-types";
import { NestedWebPage, WebPage } from "webpage-types";
export declare type MenuProps = {
    /**defaults to right*/
    menuPosition?: "left" | "right";
    /**
     * the old way, let's support it until everything is replaced
     */
    queryPaths?: string[];
    /**
     * Here you must provide ALL pages that are not default pages of the authentication layout. If you want a page to be rendered, it must be provided here.
     */
    webPagesFlat?: WebPage<unknown>[];
    /**
     * Here you need to provide the pages that need to be shown in the menu.
     * Please only provide the ones that need to be shown in the menu. If there are hidden nested menus, it is currently not supported to also hide their parents!
     *
     * Therefore, the nested array needs to be built after hiding the ones you don't wish to show, so the parents are also hidden, if so required.
     *
     * NB: for rendering performance, it's best to provide this directly from the backend
     *
     * Replaces `.queryPaths`
     */
    webPagesNested?: NestedWebPage[];
    augmentedWords?: AugmentedWord[];
    isLoading?: boolean;
    menuHeader?: () => JSX.Element;
};
//# sourceMappingURL=MenuProps.d.ts.map