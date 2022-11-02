/**
 * If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function
 */
export declare const getItem: (key: string) => Promise<any>;
/**
 * If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function
 *
 * BEWARE! Updating this won't update your react components!
 */
export declare const setItem: (key: string, value: any) => Promise<void>;
//# sourceMappingURL=storage.d.ts.map