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
//# sourceMappingURL=schema-util.d.ts.map