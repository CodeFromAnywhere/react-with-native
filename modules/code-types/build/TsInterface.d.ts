import { Schema } from "ts-json-schema-generator";
import { Markdown } from "common-types";
import { TypeInfo } from "./TypeInfo";
import { DbStorageMethod, IndexId } from "./IndexId";
import { TsComment } from "./TsComment";
/**
 *
 * TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.
 */
export interface TsInterface extends IndexId {
    type: TypeInfo;
    /**
     * jsdoc comment above the interface, if any
     */
    description?: Markdown;
    commentsInside: TsComment[];
    /**
     * raw interface text, coming from ts-morph
     */
    rawText?: string;
    /**
     * if the interface extends anything, names will be specified here
     */
    extensions?: string[];
    /**
     * if true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.
     *
     * is automatically set to true when indexing and when one of the following statements holds true
     * - if the doc-comment contains frontmatter with `isDbModel` or `defaultDbStorageMethod` specified
     * - if the interface last word is "db" or "model" and if there are minimum 2 words
     * - if the interface extends some other special interface
     */
    isDbModel: boolean;
    /**
     * if this interface is a db model, you can also specify the default db storage method for it. You can do this by specifying it in the frontmatter of the doccomment of the interface.
     *
     * When storing something into the database, this value can be overwritten in your query configuration. When fetching something from the database, it will always try all methods (unless specified otherwise). The following strategies are available to store the data.
     *
     * jsonMultiple (default): stores the data in a json file which is an array of this data structure
     *
     * TODO: jsonSingle: stores the data in a json file which is of this data structure (single object)
     *
     * TODO: markdown: stores the data in a markdown file. Takes "markdown" or "description" parameter as the main markdown. The other parameters are stored as front-matter
     *
     * TODO: keyValueMarkdown: stores the data in key value markdown format. Still need to determine how and if this is possible. Probably only for very simple datamodels
     *
     * TODO: csv: stores the data in a csv file (only possible for flat object datastructures)
     */
    defaultDbStorageMethod?: DbStorageMethod;
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