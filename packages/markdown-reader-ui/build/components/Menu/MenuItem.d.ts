/// <reference types="react" />
import { FolderExploration } from "code-types";
export declare const MenuItem: ({ link, title, isSelected, type, id, children, onDoubleClick, canExpand, }: {
    title: string;
    link: string;
    id: string;
    canExpand: boolean;
    isHeader?: boolean | undefined;
    isSelected: boolean;
    type?: "function" | "folder" | "operation" | "operationFolder" | "markdown" | "typescript" | "interface" | "variable" | undefined;
    onDoubleClick?: (() => void) | undefined;
    children?: FolderExploration[] | undefined;
}) => JSX.Element;
//# sourceMappingURL=MenuItem.d.ts.map