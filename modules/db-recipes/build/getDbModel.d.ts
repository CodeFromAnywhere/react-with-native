import { DatasetConfig } from "code-types";
import type { DbModelEnum, DbModels } from "sdk-db";
export declare type GetDbModelResult<KInterface extends DbModelEnum> = {
    hasMore: boolean;
    message?: string;
    datasetConfig?: DatasetConfig;
    /**
     * NB: Be aware that, if your `DatasetConfig` includes any keys omitted, that the resulting type interface will not be correct.
     */
    data: DbModels[KInterface][];
};
/**
 * gets all instances of an db data interface from the db in a typesafe way */
export declare const getDbModel: <KInterface extends keyof DbModels, TDatasetConfig extends DatasetConfig>(interfaceName: KInterface | null, datasetConfig?: TDatasetConfig | undefined, search?: string) => Promise<GetDbModelResult<KInterface>>;
//# sourceMappingURL=getDbModel.d.ts.map