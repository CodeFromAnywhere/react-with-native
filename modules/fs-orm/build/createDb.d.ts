import { Db, DbConfig, AnyModelObject } from "./types";
/**
Create your database by passing your models as a generic and some optional configuration
 */
export declare const createDb: <TModels extends AnyModelObject>(dbConfig?: DbConfig<TModels> | undefined) => Db<TModels>;
//# sourceMappingURL=createDb.d.ts.map