export declare type O = {
    [key: string]: any;
};
export declare type NestedPartial<T extends O> = {
    [TKey in keyof T]?: T[TKey] extends O ? NestedPartial<T[TKey]> | undefined : T[TKey] | undefined;
};
//# sourceMappingURL=NestedPartial.d.ts.map