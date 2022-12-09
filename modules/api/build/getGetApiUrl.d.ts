/**
 * gets an api url for a context get api
 *
 * returns something like `[apiUrl]/[apiFunctionName][queryString]`
 */
export declare const getGetApiUrl: (apiUrl: string | undefined, apiFunctionName: string, query: {
    [name: string]: string | string[] | undefined;
}) => string | undefined;
//# sourceMappingURL=getGetApiUrl.d.ts.map