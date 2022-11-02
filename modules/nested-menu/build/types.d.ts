export declare type MenuType = MenuItemType[];
export declare type MenuItemType = {
    icon?: string;
    title: string;
    href?: string;
    rightIcon?: string;
    target?: "_blank";
    onClick?: () => void;
    onDoubleClick?: () => void;
    onContextMenu?: () => void;
    /**
     * Whether or not the children should be visible.
     *
     * Should be used for collapsability
     */
    showChildren?: boolean;
    children?: MenuItemType[];
};
//# sourceMappingURL=types.d.ts.map