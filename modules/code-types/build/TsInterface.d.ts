import { Schema } from "ts-json-schema-generator";
import { Markdown, TsIndexModelType } from "model-types";
import { TypeInfo } from "./TypeInfo";
import { TsComment } from "./TsComment";
import { DbStorageMethod } from "./DbStorageMethod";
/**
 * ---
 * dbStorageMethod: jsonSingle
 * ---
 *
 * TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.
 */
export interface TsInterface extends TsIndexModelType {
    type: TypeInfo;
    /**
     * jsdoc comment above the interface, if any
     */
    description?: Markdown;
    commentsInside: TsComment[];
    /**
     * boolean indicating whether or not this interface is exported from the file, and with that, from the operation
     */
    isExported: boolean;
    /**
     * boolean indicating whether or not this interface uses one or more generic variables
     */
    hasGeneric: boolean;
    /**
     * raw interface text, coming from ts-morph
     */
    rawText?: string;
    /**
     * if the interface extends anything, names will be specified here
     */
    extensions?: string[];
    /**
     * If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.
     *
     * Is automatically set to true when indexing and when one of the following statements holds true
     *
     * - if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified
     * - if the interface last word is "db" or "model" and if there are minimum 2 words
     * - if the interface extends some other special interface
     */
    isDbModel: boolean;
    /**
     * If this is true, this is a db-model that is ALWAYS attached to an operation.
     *
     * By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.
     *
     * However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root.
     */
    isOperationIndex: boolean;
    /**
     * If given, specify a file path here where the data should be stored.
     * Must be an operation relative path.
     *
     * This will map onto the "operationRelativePath" for that instance.
     *
     * NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage.
     */
    operationStorageLocationRelativeFilePath?: string;
    /**
    The DbStorageMethod for this inteface (only for db models, otherwise this will be undefined)
    
    If this interface is a db model, you can also specify the default db storage method for it. You can do this by specifying it in the frontmatter of the doccomment of the interface. You can also extend a xxxModelType model which can have a dbStorageMethod attached.
  
   When storing something into the database, this value can be overwritten in your query configuration.
  
     */
    dbStorageMethod?: DbStorageMethod;
}
/**
 * at some point in processing we need this interface where definition can also be null
 */
export declare type MaybeInteface = TsInterface & {
    type: TypeInfo & {
        typeDefinition: Schema | null | undefined;
    };
};
//# sourceMappingURL=TsInterface.d.ts.map