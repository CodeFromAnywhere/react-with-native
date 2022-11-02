import { MarkdownReaderPage } from "markdown-reader-types";
/**
Transforms all your markdown models into  markdown reader pages

Steps:
 - Finds all markdown model types from the database config
 - Gets their basepaths according to `fs-orm` convention
 - Checks if they actually exist
 - Finds all markdown therein
 - Makess markdown reader pages out of them
 */
export declare const getMarkdownModelPages: (projectRoot: string) => Promise<MarkdownReaderPage[]>;
//# sourceMappingURL=getMarkdownModelPages.d.ts.map