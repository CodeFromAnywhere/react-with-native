/// <reference types="react" />
import { DatasetConfig } from "code-types";
export declare type DbCrudStore = {
    "db-crud.datasetConfig": (DatasetConfig & {
        /**
         * If you selected a dataset, this will be set, so you can also delete it after selecting it
         */
        id?: string;
        /**
         * Used to determine if it's a new form or not
         */
        key?: string;
    }) | null;
    "db-crud.search": string;
};
export declare const dbCrudInitialValues: DbCrudStore;
export declare const StoreProvider: ({ children }: {
    children: any;
}) => JSX.Element, useStore: <K_1 extends keyof DbCrudStore>(key: K_1) => import("react-with-native-store").UseStoreResult<DbCrudStore[K_1]>;
//# sourceMappingURL=store.d.ts.map