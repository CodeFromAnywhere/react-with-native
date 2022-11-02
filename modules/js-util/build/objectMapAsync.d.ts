/**
 * Map an object asynchronously
 */
export declare const objectMapAsync: <TObject extends {
    [key: string]: any;
}, TResultValue = any>(object: TObject, mapFn: (key: keyof TObject, value: TObject[keyof TObject]) => Promise<TResultValue>) => Promise<{
    [x: string]: Awaited<TResultValue>;
}>;
//# sourceMappingURL=objectMapAsync.d.ts.map