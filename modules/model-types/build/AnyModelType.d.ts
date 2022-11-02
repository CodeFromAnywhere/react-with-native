/**
 */
import { Id } from "./id";
export declare type DbFileLocation = AnyModelLocation & {
    absolutePath: string;
    modelName: string;
};
export interface AnyModelLocation {
    /**
     * name of operation the model belongs to
     *
     * - calculated value (not stored in database)
     * - can be `null` or an actual operationName that it was saved at
     * - can be `undefined` when you are creating an item, because then it can be set for you
     */
    operationName: null | string;
    /**
     * path to dbfile
     *
     * - calculated value (not stored in database)
     * - relatively from the project (without slash at start)
     * - can be `undefined` when you are creating an item, because then it can be set for you
     */
    projectRelativePath: string;
    /**
     * path to db file
     *
     * - relatively from the operation root folder (without slash at start)
     * - calculated value (not stored in database)
     * - can be `undefined` if the db file does not belong to an operation
     * - can be `undefined` when you are creating an item, because then it can be set for you
     */
    operationRelativePath?: string;
}
export interface AnyModelType extends AnyModelLocation {
    id: Id;
}
//# sourceMappingURL=AnyModelType.d.ts.map