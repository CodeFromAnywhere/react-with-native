export declare type KeysOfType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
export declare type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined>>, undefined>;
export declare type OptionalKeys<T> = Exclude<Keys<T>, RequiredKeys<T>>;
export declare type Keys<T> = Extract<keyof T, string>;
//# sourceMappingURL=types.d.ts.map