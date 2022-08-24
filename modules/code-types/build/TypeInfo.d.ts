import { Schema } from "ts-json-schema-generator";
import { SimplifiedSchema } from "./SimplifiedSchema";
/**
 * quantification of coverage of the specified type or subtypes in our database.
 */
export declare type TypeCoverage = number;
/**
 * all info that should always be collected when indexing any type interface
 */
export declare type TypeInfo = {
    /** JSON schema definition of a type interface
     *
     *
     * Some info about the Schema:
     *
     * - if the type is an object, there should be properties
     * - if the type is an array, there should be items
     */
    typeDefinition: Schema | undefined;
    simplifiedSchema?: SimplifiedSchema;
    /** if the type is an object, this is true. false if it's an array */
    isObject: boolean;
    /** if the type is an array, this is true */
    isArray: boolean;
    /** if it's a primitive type like "string", "number", "boolean", "null" | "undefined" */
    isPrimitive: boolean;
    /** will be true for any primitive conjunction types */
    isEnum: boolean;
    /** will be true for string conjunction types */
    isEnumLiteral: boolean;
    typeCoverage: TypeCoverage;
    /** raw type string */
    rawType: string;
};
//# sourceMappingURL=TypeInfo.d.ts.map