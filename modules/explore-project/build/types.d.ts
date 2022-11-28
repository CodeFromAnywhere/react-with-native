export declare type WebPage<T = undefined> = {
    /**
     * query-path to be visited in order to find the page on the web.
     *
     * can also be used for nested nav in apps
     */
    queryPath: string;
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
     */
    extraData: T;
};
export declare type FilePage = WebPage<{
    projectRelativeFilePath: string;
}>;
export declare type TodoPage = FilePage;
export declare type MarkdownReaderPage2 = FilePage;
//# sourceMappingURL=types.d.ts.map