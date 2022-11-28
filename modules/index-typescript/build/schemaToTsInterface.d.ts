/**
TODO:

Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text
*/
import { Schema } from "ts-json-schema-generator";
import { TsInterface } from "code-types";
import { MorphInterfaceInfo } from "./MorphInterfaceInfo";
import { Creation } from "model-types";
/**
 make a tsInterface from a schema generated from the file
  */
export declare const schemaToTsInterface: (filePath: string, typeName: string, schema: Schema, morphInterfaceInfo: MorphInterfaceInfo | undefined) => Promise<Creation<TsInterface> | undefined>;
//# sourceMappingURL=schemaToTsInterface.d.ts.map