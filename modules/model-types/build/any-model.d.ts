import { Id } from "./id";
/**
 * Object used to hand over all information about the location of a db-file in a structured way
 */
export declare type DbFileLocation = ModelLocation & {
    absolutePath: string;
    modelName: string;
};
/**
 * Parameters that tell you about the location an instance of a model.
 * Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.
 */
export interface ModelLocation {
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
/**
 * Parameters that every model will always have.
 *
 * NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.
 *
 * NB: RelationTypes are also not always included for the same reason
 */
export interface AnyModelType extends ModelLocation {
    id: Id;
}
export declare type AugmentedAnyModelType = AnyModelType & {
    [key: string]: any;
};
//# sourceMappingURL=any-model.d.ts.map