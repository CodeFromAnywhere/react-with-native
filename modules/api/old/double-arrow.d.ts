declare const sdk: {
    fn1: (a: string, b: number) => boolean;
    fn2: (a: string, b: number) => number;
    fn3: (a: string, b: number) => Promise<string>;
};
declare type SdkType = typeof sdk;
declare type SdkTypes = {
    [Fn in keyof SdkType]: {
        functionType: (...parameters: Parameters<SdkType[Fn]>) => ReturnType<SdkType[Fn]>;
        parameterType: Parameters<SdkType[Fn]>;
        returnType: ReturnType<SdkType[Fn]>;
    };
};
/**
 * Cool example, but not going to use this...
 */
export declare const doubleFunctionApi: <T extends "fn1" | "fn2" | "fn3">(functionName: T) => (...params: SdkTypes[T]["parameterType"]) => SdkTypes[T]["returnType"];
export {};
//# sourceMappingURL=double-arrow.d.ts.map