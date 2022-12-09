import { ContextEvent } from "./types";
/**
 * Use this if you want to create a completely custom behavior from a context action. On top of the default `.onContextMenu` behavior, this hook enables the possibility for a custom hold duration on mobile.
 */
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
//# sourceMappingURL=useContext.d.ts.map