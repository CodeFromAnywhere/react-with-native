import type { DbModels } from "sdk-db";
import { CustomQueryConfig } from "fs-orm";
import { AugmentedAnyModelType } from "model-types";
/**
 * processes all assets in an item and returns the new item
 */
export declare const processItemAssets: <KInterfaceName extends keyof DbModels>(item: AugmentedAnyModelType, interfaceName: KInterfaceName, operationName: string | null, customQueryConfig: CustomQueryConfig) => Promise<AugmentedAnyModelType | undefined>;
//# sourceMappingURL=processItemAssets.d.ts.map