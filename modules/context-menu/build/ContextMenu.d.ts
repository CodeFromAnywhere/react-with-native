/// <reference types="react" />
export declare type ContextMenuItem = {
    title: string;
    onClick: () => void;
};
export declare type ContextEvent = {
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
    id: string | undefined;
};
export declare const DEFAULT_LONGPRESS_DURATION_MS = 500;
export declare const useContext: (callback: (position: ContextEvent) => any, config?: {
    /**
     * Customise the time for a longpress to enable the callback. Defaults to browser default (onContextMenu default). If you set this, we detect the duration ourselves via the onTouchStart and onTouchEnd events.
     */
    longTouchDurationMs?: number;
}) => {
    onContextMenu: (event: React.MouseEvent) => void;
    onTouchStart: (event: React.TouchEvent) => void;
    onTouchEnd: () => void;
    onClick: (mouseEvent: React.MouseEvent) => void;
    style: {
        userSelect: import("csstype").Property.UserSelect | undefined;
    };
};
export declare const useContextMenu: (props: {
    renderContext: (props: {
        id?: string;
    }) => JSX.Element;
}) => {
    openContextMenuProps: {
        ref: import("react").RefObject<HTMLDivElement>;
        onContextMenu: (event: React.MouseEvent) => void;
        onTouchStart: (event: React.TouchEvent) => void;
        onTouchEnd: () => void;
        onClick: (mouseEvent: React.MouseEvent) => void;
        style: {
            userSelect: import("csstype").Property.UserSelect | undefined;
        };
    };
    contextMenu: JSX.Element | null;
};
//# sourceMappingURL=ContextMenu.d.ts.map