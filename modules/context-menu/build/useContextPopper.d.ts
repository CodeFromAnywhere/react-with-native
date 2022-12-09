/// <reference types="react" />
/**
 * Use this hook if you want to create your own custom render that opens on the right location once the `.onContextMenu` is fired.
 */
export declare const useContextPopper: (props: {
    renderPopper: (props: {
        id?: string;
    }) => JSX.Element;
    longTouchDurationMs?: number | undefined;
}) => {
    isOpen: boolean;
    /**
     * Render this function anywhere in your component. Ensure it's high enough up the tree to make sure the positioning is correct. Not tested in modals and scrollable divs...
     */
    renderContextPopper: () => JSX.Element | null;
    /**
     * Callback to close the popper from anywhere
     */
    onClose: () => void;
    /**
     * Attach these props to the element that should be right-clickable or long-pressable
     *
     * You can also pass an id to this element in order to pass this to the callback
     * e.g.
     *
     * ```tsx
     * <div id="some-id" {...openContextPopperProps}>your html</div>
     * ```
     *
     * If you also want to attach your own properties, you can destructure this and wrap the individual props in your final prop.
     */
    openContextPopperProps: {
        ref: React.RefObject<HTMLDivElement>;
        onContextMenu: (event: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (event: React.TouchEvent<Element>) => void;
        onTouchEnd: () => void;
        onClick: (mouseEvent: React.MouseEvent<Element, MouseEvent>) => void;
        style: React.CSSProperties;
    };
};
//# sourceMappingURL=useContextPopper.d.ts.map