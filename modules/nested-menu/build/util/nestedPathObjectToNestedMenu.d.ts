import { MenuType } from "../types";
import { NestedPathObject } from "./queryPathsArrayToNestedPathObject";
/**
 * Transform a nested path object into a nested menu (MenuType), recursively
 */
export declare const nestedPathObjectToNestedMenuRecursive: (nestedPathObject: NestedPathObject | null, pathStack?: string[], config?: {
    target?: "_blank" | undefined;
    /**
     * optionally , provide a callback function that returns the actual path
     */
    getHref?: ((fullPath: string) => string) | undefined;
} | undefined) => MenuType | undefined;
//# sourceMappingURL=nestedPathObjectToNestedMenu.d.ts.map