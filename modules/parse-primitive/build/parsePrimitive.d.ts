import { SimplifiedSchema } from "code-types";
export declare const parsePrimitiveArray: (string: string) => string[];
export declare const parsePrimitiveString: (string: string) => string;
export declare const parsePrimitiveBoolean: (string: string) => boolean | undefined;
export declare type PrimitiveResult = boolean | null | undefined | number | string | string[];
/**
 * parses a string into the value it should be
 *
 * if you provide a `simplifiedSchema`, that will be used to parse according to the shape of the schema
 */
export declare const parsePrimitive: (string: string, simplifiedSchema?: SimplifiedSchema) => PrimitiveResult;
//# sourceMappingURL=parsePrimitive.d.ts.map