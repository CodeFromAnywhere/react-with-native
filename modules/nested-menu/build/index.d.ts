import { NestedMenu } from "./NestedMenu";
import { NestedMenuItem } from "./NestedMenuItem";
import { nestedPathObjectToNestedMenuRecursive } from "./util/nestedPathObjectToNestedMenu";
import { reduceQueryPathsRecursively } from "./util/queryPathsArrayToNestedPathObject";
import { queryPathsArrayToNestedPathObject } from "./util/queryPathsArrayToNestedPathObject";
import type { MenuType } from "./types";
import type { MenuItemType } from "./types";
import type { NestedPathObject } from "./util/queryPathsArrayToNestedPathObject";
export declare type NestedMenuTypes = {
    MenuType: MenuType;
    MenuItemType: MenuItemType;
    NestedPathObject: NestedPathObject;
};
export { NestedMenu, NestedMenuItem, nestedPathObjectToNestedMenuRecursive, reduceQueryPathsRecursively, queryPathsArrayToNestedPathObject };
export { MenuType, MenuItemType, NestedPathObject };
//# sourceMappingURL=index.d.ts.map