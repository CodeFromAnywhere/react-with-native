import { Storing } from "model-types";
import { AugmentedAnyModelType, DbQueryResult } from "../types";
/**
 * Takes stored data and an id or slug to remove
 *
 * NB: this works for every storage method except for key value markdown
 */
export declare const remove: (storedData: Storing<AugmentedAnyModelType>[], ids: string[], slugs: string[]) => DbQueryResult & {
    newStoredData: Storing<AugmentedAnyModelType>[];
};
//# sourceMappingURL=remove.d.ts.map