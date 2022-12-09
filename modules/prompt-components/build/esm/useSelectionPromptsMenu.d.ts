/// <reference types="react" />
import { ContextualPrompt, ContextualContent } from "ai-types";
/**
 * Provides the props needed to render a context-menu that allows you to add prompts and other things into your database. All actions require api access.
 */
export declare const useSelectionPromptsMenu: (selectionPrompts: ContextualPrompt[], contextualContent: ContextualContent) => {
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
};
//# sourceMappingURL=useSelectionPromptsMenu.d.ts.map