import { DbStorageMethod } from "code-types";
/**
 * used for set and push
 *
 * used by update, remove, upsert indirectly (through 'set')
 */
export declare const setFromValue: <TModels extends {
    [key: string]: any;
}, TModelName extends string>({ informationPath, model, getJson, defaultDbStorageMethod, id, }: {
    defaultDbStorageMethod: DbStorageMethod | undefined;
    getJson: (oldJson: any) => any;
    informationPath: string;
    model: TModelName;
    id?: string | undefined;
}) => Promise<{
    success: boolean;
    overwrite?: undefined;
} | {
    overwrite: boolean;
    success: boolean;
} | undefined>;
//# sourceMappingURL=setFromValue.d.ts.map