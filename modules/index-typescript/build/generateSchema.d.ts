/**
TODO: NB: Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well. NB: this doesn't really solve it still... there will still be duplication.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text


NB:

unsupported features of ts-json-schema-generator are, among other things, function type interfaces.

More info:

https://github.com/vega/ts-json-schema-generator/issues/98
https://github.com/vega/ts-json-schema-generator/issues/104

Until this is solved, it will be difficult to get types of nested functions (other option would be to try and do it with ts-morph)

*/
import { Config, Schema } from "ts-json-schema-generator";
import { TsInterface, MaybeInteface } from "code-types";
import { MorphInterfaceInfo } from "./MorphInterfaceInfo";
import { Creation } from "model-types";
/**
 * Try because sometimes generateSchema fails
 */
export declare const tryCreateSchema: (config: Config) => {
    schema?: Schema;
    error?: string;
};
export declare function hasDefinition(maybeInterface: MaybeInteface): maybeInterface is TsInterface;
/**
 * If existing schema is not stale, just require it.
 * Otherwise, generate it for a file
 *
 * NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!

 */
export declare const generateSchema: (filePath: string, morphInterfaceInfo: MorphInterfaceInfo[], namedAbsoluteImportNames: string[]) => Promise<Creation<TsInterface>[]>;
//# sourceMappingURL=generateSchema.d.ts.map