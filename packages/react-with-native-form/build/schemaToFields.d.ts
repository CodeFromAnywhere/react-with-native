import { JSONSchema7 } from "json-schema";
import { Field } from "./general";
import { TsInterface } from "k-types";
/**
 * Maps a `Schema[]` with some metadata (TsInterface[]) to a form `Field[]`
 *
 * Jeezzz this is going to be hard!
 */
export declare const schemaToFields: <TInputs>(schema: JSONSchema7 | JSONSchema7[], refs: TsInterface[], makeField: (type: keyof TInputs, config: any) => Field<any>) => Field<TInputs, Extract<keyof TInputs, string>>[];
//# sourceMappingURL=schemaToFields.d.ts.map