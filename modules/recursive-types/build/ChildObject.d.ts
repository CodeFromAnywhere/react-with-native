export declare type ChildObject<T extends {
    [key: string]: any;
}> = {
    children?: ChildObject<T>[];
} & T;
//# sourceMappingURL=ChildObject.d.ts.map