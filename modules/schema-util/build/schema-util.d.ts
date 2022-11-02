import { TsInterface } from "code-types";
import { JSONSchema7Definition } from "json-schema";
import { JSONSchema7 } from "json-schema";
/**
 * schema type interface we use in TsInterface
 *
 * NB: don't export because this would make this type exist twice.
 */
declare type Schema = TsInterface["type"]["typeDefinition"];
export declare type SchemaProperty = {
    name: string;
    schema: JSONSchema7;
    required: boolean;
};
export declare type SchemaItem = {
    /**
     * name in case of it being a reference, otherwise null
     */
    name: string | null;
    schema: Schema;
};
export declare const getSchemaItems: (schema: Schema | undefined) => JSONSchema7[];
/**
 * parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it
 */
export declare const getSchema: (maybeSchema: JSONSchema7Definition | undefined) => Schema | undefined;
/**
 * gets the $ref from a schema and parses the interface name from it
 */
export declare const getRefLink: (ref?: string) => string | undefined;
/**
 * Gets all the properties of a schema
 */
export declare const getProperties: (schema: Schema | undefined) => SchemaProperty[];
export {};
//# sourceMappingURL=schema-util.d.ts.map