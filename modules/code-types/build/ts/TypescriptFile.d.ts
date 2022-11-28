import { DefaultModelType } from "model-types";
import { SimplifiedSchema } from "../SimplifiedSchema";
/**
 * IDEA: What if we could make a custom db storage method for a typescript file, so you can read and write typescript with the database?
 *
 * The first thing I can do, is to generate all typescript stuff using a model like this:
 *
 * Later, I can read a typescript file with a rust parser to get it into this model again.
 *
 * This is actually super useful for metacoding and coding GUI's
 *
 * Also a great start for making my own programming language ;)
 *
 *
 * There are multiple ways of describing a typescript file I guess. This is one of them. Another one could be a definition where you put the required context in the statements and types themselves.
 */
export interface TypescriptFile extends DefaultModelType, TypescriptScopeContext, TypescriptScopeContent {
}
export interface TypescriptScopeTypeContext {
    name: string;
    comment?: string;
    simplifiedSchema: SimplifiedSchema;
}
export interface TypescriptScopeStatementContext {
    name: string;
    /**
     * Only for functions
     */
    isRequired?: boolean;
    simplifiedSchema: SimplifiedSchema;
    comment: string;
    isRest?: boolean;
}
export interface TypescriptScopeContext {
    /**
     * Parameters
     */
    statementContext?: TypescriptScopeStatementContext[];
    /**
     * Generics
     */
    typeContext?: TypescriptScopeTypeContext[];
}
export interface TypescriptScopeContent {
    statements: {
        name: string;
        /**
         * can not be done in functions
         */
        isExported: boolean;
        comment?: string;
        isFunction?: boolean;
        variableJsonValue?: any;
        functionDefinition?: TypescriptScopeContext & {
            /**
             * Inside of the function (recursion on itself)
             */
            content: TypescriptScopeContent;
        };
    }[];
    interfaces: {
        name: string;
        isExported: boolean;
        comment?: string;
        simplifiedSchema: SimplifiedSchema;
    }[];
    /**
     * Only in functions
     */
    returnStatementRaw?: string;
}
//# sourceMappingURL=TypescriptFile.d.ts.map