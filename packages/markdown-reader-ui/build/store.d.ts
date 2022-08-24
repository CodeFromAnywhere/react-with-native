/// <reference types="react" />
import { pagesObject } from "./pages";
export declare type FocusWindowEnum = "content" | "sensor-terminal" | "cli-terminal" | "selection-terminal" | "cursor-hover-terminal";
export declare type OpenPage = {
    /**
     * unique id
     */
    id: string;
    /**
     * the page
     */
    page: keyof typeof pagesObject;
    /**
     * the query needed for loading this page
     */
    query: {
        [key: string]: string | undefined;
    };
    /**
     * if true, this page is harder to close.
     */
    pinned?: boolean;
    /**
     * if true, it's just open because you are on that link
     */
    temporary?: boolean;
    /**
     * if page is content, there should be cursor information
     */
    cursorPosition?: number;
    cursorWord?: string;
    cursorSentence?: string;
    /**
     * last time you had the pages open
     */
    lastOpenedAt: number;
};
declare type ContentSelection = {
    startPosition: number;
    endPosition: number;
    exactSelection: string;
    sentence: string;
    words: string[];
};
export declare type MenuEnum = "tree" | "database";
declare type StoreType = {
    showMenu: boolean;
    showTerminal: boolean;
    openPages: OpenPage[];
    /** if given, should be a bundle-id, null for viewing all bundles */
    selectedBundleId: string | null;
    search: string;
    searchLoading: boolean;
    menu: MenuEnum;
    expandedPaths: string[];
    selectionHistory: ContentSelection[];
    hoverWord?: string;
    hoverSentence?: string;
    focusWindow: FocusWindowEnum;
    authToken: string;
};
export declare const initialValues: StoreType;
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const useStore: <K extends keyof StoreType>(key: K) => [StoreType[K], (value: StoreType[K]) => Promise<void>, {
    hydrated: boolean;
}];
export default useStore;
//# sourceMappingURL=store.d.ts.map