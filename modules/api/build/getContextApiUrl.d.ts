export declare const getAssetDirectlyApiUrl: (apiUrl: string, projectRelativeAssetPath: string) => string;
export declare const getReferencedAssetApiUrl: (apiUrl: string, projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string) => string;
/**
 * gets an api url for a get api
 *
 * returns something like `[apiUrl]/[apiFunctionName][queryString]`
 */
export declare const getGetApiUrl: (apiUrl: string, apiFunctionName: string, query: {
    [name: string]: string | string[] | undefined;
}) => string;
//# sourceMappingURL=getContextApiUrl.d.ts.map