import { TypeInfo } from "code-types";
import { Schema } from "ts-json-schema-generator";
import { Type } from "ts-morph";
/** takes a ts morph type and returns all info about it
 *
 * if available, a schema should be provided about the type because it's hard to infer it (probably buggy)
 */
export declare const getTypeInfo: (type: Type, schema?: Schema) => TypeInfo;
//# sourceMappingURL=getTypeInfo.d.ts.map