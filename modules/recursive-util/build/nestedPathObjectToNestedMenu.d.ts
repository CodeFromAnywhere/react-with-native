import { MenuItemType } from "nested-menu-types";
import { NestedPathObject } from "recursive-types";
/**
 * Transform a nested path object into a nested menu (MenuType), recursively
 */
export declare const nestedPathObjectToNestedMenuRecursive: (nestedPathObject: NestedPathObject | null, pathStack?: string[], config?: {
    target?: "_blank" | undefined;
    /**
     * optionally , provide a callback function that returns the actual path
     */
    getHref?: ((fullPath: string) => string) | undefined;
} | undefined) => MenuItemType[] | undefined;
//# sourceMappingURL=nestedPathObjectToNestedMenu.d.ts.map