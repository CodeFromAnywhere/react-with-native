import { TodoPage } from "./types";
/**

`getTodoPages(): WebPage[]` function:

- use getProjectRelativePaths, map the result to a queryPath + file
- [operation-name]/[todo-relative-file-id] for operations
- [folder-name]/[todo-relative-file-id] for todos within folders

 */
export declare const getTodoWebPages: (config?: {
    earliestUpdatedAt?: number | undefined;
} | undefined) => Promise<TodoPage[]>;
//# sourceMappingURL=getTodoWebPages.d.ts.map