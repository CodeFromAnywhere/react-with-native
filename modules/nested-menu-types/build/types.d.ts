import { MouseEvent } from "react";
import { NestedWebPage } from "webpage-types";
export declare type MenuItemType = {
    icon?: string;
    title: string;
    href?: string;
    rightIcon?: string;
    target?: "_blank";
    children?: MenuItemType[];
};
export declare type MenuItemMouseEventCallback = (event: MouseEvent, item: NestedWebPage) => void;
export declare type MouseEventCallbacks = {
    /**
     * Custom extra thing to do when clicking
     */
    onClick?: MenuItemMouseEventCallback;
    /**
     * Custom extra thing to do when double clicking
     */
    onDoubleClick?: MenuItemMouseEventCallback;
    /**
     * Custom extra thing to do when right clicking
     */
    onContextMenu?: MenuItemMouseEventCallback;
};
//# sourceMappingURL=types.d.ts.map