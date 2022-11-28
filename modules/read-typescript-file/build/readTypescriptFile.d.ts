#!/usr/bin/env node
import { Path } from "fs-util";
import { CommentType, TypescriptIndex, IndexModels } from "code-types";
/**
 *
 * Reads and parses a markdown file
 */
export declare const readTypescriptFile: (filePath: Path) => Promise<TypescriptIndex | null>;
export declare type IndexFilter = {
    /**
     * if set, only returns comments containing specific types
     */
    hasCommentTypes?: CommentType[];
    /**
     * if true, only returns interfaces which are db models
     */
    interfaceIsDbModel?: boolean;
};
/**
 * get a Typescript index for all that is found in a folder
 */
export declare const getFolderTypescriptIndex: ({ basePath, filter, sort, type, filePath, }: {
    /**
     * if given, basePath is ignored
     *
     */
    filePath?: string | string[] | undefined;
    /**
     * is ignored if filePath is provided
     *
     * if this path is a single path anywhere in an operaiton, it will only take that operation
     *
     * otherwise, it will find all operation folders in that path
     */
    basePath?: string | string[] | undefined;
    /**
     * if specified, only returns one specific type
     *
     * returns all types by default
     */
    type?: keyof IndexModels | null | undefined;
    filter?: IndexFilter | undefined;
    /**
     * TODO: make functions be sortable:
     * - alphabetic
     * - input type
     * - output type
     * - usage amount
     */
    sort?: string | undefined;
}) => Promise<TypescriptIndex | null>;
//# sourceMappingURL=readTypescriptFile.d.ts.map