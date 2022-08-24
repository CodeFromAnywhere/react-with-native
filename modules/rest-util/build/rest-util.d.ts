/**
 *
 *
 */
declare type QueryableObject = {
    [key: string]: string | string[] | undefined;
};
/**
 * converts a query string into an object that can be used as a body
 */
export declare const bodyFromQueryString: (query?: string) => QueryableObject | undefined;
export declare const toQueryString: (query?: any) => string;
/**
 * Query keys can be string or string[] or undefined.
 *
 * This function takes only the first string if it's an array...
 */
export declare const getFirstQueryStrings: (query: QueryableObject) => (string | undefined)[];
export {};
//# sourceMappingURL=rest-util.d.ts.map