import { MenuType } from "../types";
import { NestedPathObject } from "./queryPathsArrayToNestedPathObject";
/**
 * Transform a nested path object into a nested menu (MenuType), recursively
 */
export declare const nestedPathObjectToNestedMenuRecursive: (nestedPathObject: NestedPathObject | null, pathStack?: string[]) => MenuType | undefined;
//# sourceMappingURL=nestedPathObjectToNestedMenu.d.ts.map