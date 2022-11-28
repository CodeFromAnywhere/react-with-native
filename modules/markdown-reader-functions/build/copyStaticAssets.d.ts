import { ReaderWebPage } from "webpage-types";
/**
uses `getMarkdownReferencePaths` for all markdown files in the `markdown-reader-ui` and copies them into the `markdown-reader-web/public` folder, keeping the original folder structure.

NB: Removes all files in the public folder first.

To get a file from public assets after running this function, you need to get it from the `projectRelativeFilePath`, not the file relative, so you need to render it differently.
*/
export declare const copyStaticAssets: (readerWebPages: ReaderWebPage[], config?: {
    /**
     * by default, uses `markdown-reader-web`
     */
    operationName?: string;
}) => Promise<boolean | undefined>;
//# sourceMappingURL=copyStaticAssets.d.ts.map