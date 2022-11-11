/**
 * Takes an array of items (`explore` results) and checks them to put readme at the start
 *
 * DEPRECATED: After writing this, I found that `explore` also has `readmeOnTop` possibility, so this whole thing is not needed
 */
export declare const putReadmeOnTop: <T extends {
    path: string;
    isFolder: boolean;
}>(items: T[]) => T[];
//# sourceMappingURL=putReadmeOnTop.d.ts.map