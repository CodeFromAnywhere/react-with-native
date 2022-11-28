import { TodoPagesConfig } from "todo-types";
import { NestedWebPage, WebPage, WriterWebPage } from "webpage-types";
/**

`getTodoPages(): WebPage[]` function:

- use getProjectRelativePaths, map the result to a queryPath + file
- [operation-name]/[todo-relative-file-id] for operations
- [folder-name]/[todo-relative-file-id] for todos within folders


 */
export declare const getTodoPages: (config?: TodoPagesConfig) => Promise<{
    nested: NestedWebPage[];
    flat: (WriterWebPage | WebPage)[];
}>;
//# sourceMappingURL=getTodoPages.d.ts.map