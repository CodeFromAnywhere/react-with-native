import type { DbModels } from "sdk-db";
import { DbQueryResult } from "fs-orm";
export declare type UpsertDbModelResult = {
    response: string;
    success: boolean;
};
/**

upserts an instance of an db data interface from the db in a typesafe way

 */
export declare const upsertDbModel: <KInterfaceName extends keyof DbModels, KItem extends DbModels[KInterfaceName]>(interfaceName: KInterfaceName, data: KItem | KItem[], isNew?: boolean) => Promise<DbQueryResult>;
//# sourceMappingURL=upsertDbModel.d.ts.map