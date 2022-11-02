import { DbModels } from "sdk-db";
import { CustomQueryConfig, DbConfig } from "fs-orm";
export declare const dbConfig: DbConfig<DbModels>;
export declare const getMergedQueryConfig: (modelName: keyof DbModels, customQueryConfig?: CustomQueryConfig) => import("fs-orm").MergedQueryConfig;
export declare const db: import("fs-orm").Db<DbModels>;
//# sourceMappingURL=db.d.ts.map