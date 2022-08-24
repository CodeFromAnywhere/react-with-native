import type { DbModels } from "sdk";
export declare const db: {
    get: <TModelName extends keyof DbModels>(model: TModelName, config?: {
        folders?: string[] | undefined;
        all?: boolean | undefined;
        operation?: string | undefined;
        operationIndexFiles?: string | string[] | undefined;
        ignoreOperationIndexFiles?: string | string[] | undefined;
    } | undefined) => Promise<DbModels[TModelName][]>;
    set: <TModelName_1 extends keyof DbModels>(model: TModelName_1, data: DbModels[TModelName_1][]) => Promise<void>;
    push: <TModelName_2 extends keyof DbModels>(model: TModelName_2, data: DbModels[TModelName_2]) => Promise<void>;
};
export declare const get: <TModelName extends keyof DbModels>(model: TModelName, config?: {
    folders?: string[] | undefined;
    all?: boolean | undefined;
    operation?: string | undefined;
    operationIndexFiles?: string | string[] | undefined;
    ignoreOperationIndexFiles?: string | string[] | undefined;
} | undefined) => Promise<DbModels[TModelName][]>;
export declare const push: <TModelName extends keyof DbModels>(model: TModelName, data: DbModels[TModelName]) => Promise<void>;
export declare const set: <TModelName extends keyof DbModels>(model: TModelName, data: DbModels[TModelName][]) => Promise<void>;
//# sourceMappingURL=db.d.ts.map