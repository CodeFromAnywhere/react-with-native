import { JSONSchema7Type } from "json-schema";
import { TsInterface } from "code-types";
import { JSONSchema7Definition, JSONSchema7 } from "json-schema";
/**
 * schema type interface we use in TsInterface
 */
export declare type Schema = TsInterface["type"]["typeDefinition"];
export declare const getSchemaItems: (schema: Schema | undefined) => JSONSchema7[];
/**
 * parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it
 */
export declare const getSchema: (maybeSchema: JSONSchema7Definition | undefined) => JSONSchema7 | undefined;
/**
 * gets the $ref from a schema and parses the interface name from it
 */
export declare const getRefLink: (ref?: string) => string | undefined;
/**
 * gets the first enum of a property of a definition
 *
 * (DONT KNOW WHY)
 */
export declare const getFirstEnum: (schema: Schema | null, key: string) => JSONSchema7Type | undefined;
declare type ArrayType = {
    schema: Schema;
    model: string;
};
declare type MultipleArraysType = {
    items: Schema[];
    model: string;
};
/**
 * TODO: Can probably omit this function as it's just passing to another function
 */
export declare const getOneArrayType: ({ schema, model }: ArrayType) => string;
/**
 * gets array type from
 */
export declare const getArrayType: ({ items, model }: MultipleArraysType) => string;
/**
 * gets a type string from a schema
 */
export declare const getType: (schema: Schema | undefined, model: string) => string;
/**
 * makes a string of a type interface
 */
export declare const getTypeDefinitionString: ({ name, schema, model, }: {
    name: string;
    schema: Schema;
    model: string;
}) => string;
export {};
//# sourceMappingURL=util.d.ts.map