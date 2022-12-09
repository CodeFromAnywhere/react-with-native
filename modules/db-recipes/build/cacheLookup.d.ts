export declare type CacheLookupResult = {
    hasValidCache: boolean;
    result?: any;
};
/**
 * Wrapper function to cache any function and invalidate it, in some way
 *
 * caching
 * automatic cache invalidation if data sources are updated
 * optimistic caching after cache invalidation
 */
export declare const cacheLookup: (functionName: string, parameters: undefined | any[]) => CacheLookupResult;
//# sourceMappingURL=cacheLookup.d.ts.map