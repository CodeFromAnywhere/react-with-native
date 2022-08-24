import { JSONSchema7 } from "json-schema";
import { SimplifiedSchema } from "code-types";
/**
 * return a SimplifiedSchema by giving the JSONSchema7 schema, its name and a list of possible references in the JSONSchema
 */
export declare const simplifySchema: (name: string | null, schema: JSONSchema7, possibleRefs: {
    /** the name of the schema, (without /definitions/ prefix like $ref) */
    name: string;
    schema: JSONSchema7;
}[], rootStack: string[]) => SimplifiedSchema;
//# sourceMappingURL=simplifySchema.d.ts.map