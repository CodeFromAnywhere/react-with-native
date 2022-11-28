export declare type Authorization = {
    /**
     * What should be authorized?
     */
    type: "TsFunction" | "TsVarialbe" | "TsInterface" | "Dataset" | "operationName" | "fileOrFolderPath";
    /**
     * fileOrFolderPath: path string
     *
     * operationName: name of the operation (grants access to all models, )
     *
     * otherwise: id of the model
     */
    value: string;
    /**
     * which things are authorized
     */
    authorizations: AuthorizationLevel[];
};
export declare const authorizationLevelReadonlyArray: readonly ["execute", "write-create", "write-update", "write-delete", "read", "search"];
export declare const authorizationLevelStringArray: string[];
/**
  
`AuthorizationLevel` is a single Enum that can apply to privacy and authorization of text, functions, and data.

For files (ts, md, json, etc...):

- write-create
- write-update
- write-delete
- read
- search (only search index)

For db model data subsets:

- write-update
- write-create
- write-delete
- read
- search (only search index)

For functions:
- execute

For functions, interfaces, variables:

- read (reading docs only. for source, you need to provide the file auth)
- search (only search index)

     */
export declare type AuthorizationLevel = typeof authorizationLevelReadonlyArray[number];
//# sourceMappingURL=Authorization.d.ts.map