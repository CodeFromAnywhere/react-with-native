import { Id } from "model-types";
/**

`Authorization` helps you provide certain access to files, data, functionality, and code. Authorization can be provided custom, or by indexation. The indexation of the codebase and text-files overwrites the custom authorization in the `Group`-model.

## Different authorizations

For files (ts, md, json, etc...):

- canWriteCreate
- canWriteUpdate
- canWriteDelete
- canRead
- canSearch (only search index)

For db model data subsets:

- canWriteUpdate
- canWriteCreate
- canWriteDelete
- canRead
- canSearch (only search index)

For functions:

- canExecute

For functions, interfaces, variables:

- canRead (reading docs only. for source, you need to provide the file auth)
- canSearch (only search index)

 */
export declare type Authorization = {
    /**
     * If true, this authorization is project-wide and applies to everything
     */
    isProjectWide?: boolean;
    /**
     * If selected, the authorization will apply to the whole operation
     */
    authorizedOperationName?: string;
    /**
     * If selected, the authorization will apply to this function
     */
    tsFunctionId?: Id;
    /**
     * If selected, the authorization will apply to this variable
     */
    tsVariableId?: Id;
    /**
     * If selected, the authorization will apply to this interface
     */
    tsInterfaceId?: Id;
    /**
     * If selected, the authorization will apply to this dataset
     */
    datasetId?: Id;
    /**
     * If selected, the authorization will apply to everything in this folder or to this specific file
     */
    authorizedProjectRelativePath?: string;
    canExecute?: boolean;
    canWriteCreate?: boolean;
    canWriteUpdate?: boolean;
    canWriteDelete?: boolean;
    canRead?: boolean;
    canSearch?: boolean;
};
//# sourceMappingURL=Authorization.d.ts.map