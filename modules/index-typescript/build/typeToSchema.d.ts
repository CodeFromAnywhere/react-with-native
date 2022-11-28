import { Decorator, Type, Symbol as tsSymbol } from "ts-morph";
export declare const symbols: {
    controller: symbol;
    route: symbol;
    basePath: symbol;
    validations: symbol;
};
export declare type SimpleJsonSchema = {
    "x-enumNames"?: string[];
    $ref?: string;
    format?: string;
    oneOf?: SimpleJsonSchema[];
    optional?: boolean;
    type?: any;
    items?: any;
    properties?: any;
    required?: string[];
    allOf?: any[];
    enum?: any[];
    transform?: string[];
};
export declare const isPrimitive: (type: Type) => boolean;
export declare const getMinMaxValidation: (keyword: "min" | "max", type: string, value: number) => {};
/**
 * calculates the schema of a type
 *
 * this is great for types inside of parameters of variables that are not declared separately, however, it's probably not as good as vega's json schema generator... therefore, it would be great to always prefer vega's way above this.
 *
 * NB: this method throws sometimes if it can't find some stuff, so make sure to try/catch it.
 *
 * TODO: Test and improve this one
 */
export declare const typeToSchema: (type: Type) => SimpleJsonSchema | undefined;
export declare const getParamSchema: (type: Type, decorators?: Decorator[], prop?: tsSymbol | undefined) => SimpleJsonSchema | undefined;
//# sourceMappingURL=typeToSchema.d.ts.map