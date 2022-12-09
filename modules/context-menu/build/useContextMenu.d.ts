/// <reference types="react" />
import { ContextMenuItem } from "./types";
/**
 * Use this if you want to render a context menu where the menu closes if you click one of the items.
 *
 * Optionally, you can create a custom renderer for it.
 */
export declare const useContextMenu: (props: {
    items: ContextMenuItem[];
    longTouchDurationMs?: number | undefined;
    /**
     * Customise the container class
     */
    className?: string | undefined;
    /**
     * Customise the contextMenuItem className
     *
     * Example:
     *
     * `select-none cursor-pointer lg:hover:bg-blue-300 py-2 px-4`
     */
    itemClassName?: string | undefined;
    /**
     *
     * Overwrite the default item using this custom renderer:
     *
     * Example:
     *
     * ```tsx
    customItemRender={(
      contextMenuItem,
      index,
      onClose,
      id
    ) => (
        <P
          onClick={() => {
            contextMenuItem.onClick(id);
            onClose();
          }}
          className="select-none cursor-pointer lg:hover:bg-blue-300 py-2 px-4"
          key={`menu${index}`}
        >
          {contextMenuItem.getTitle(id)}
        </P>)}
                
     * ```
     */
    customItemRender?: ((contextMenuItem: ContextMenuItem, index: number, onClose: () => any, id: string | undefined) => JSX.Element | null) | undefined;
}) => {
    renderContextMenu: () => JSX.Element | null;
    openContextMenuProps: {
        ref: import("react").RefObject<HTMLDivElement>;
        onContextMenu: (event: import("react").MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (event: import("react").TouchEvent<Element>) => void;
        onTouchEnd: () => void;
        onClick: (mouseEvent: import("react").MouseEvent<Element, MouseEvent>) => void;
        style: import("react").CSSProperties;
    };
    onClose: () => void;
    isOpen: boolean;
};
//# sourceMappingURL=useContextMenu.d.ts.map