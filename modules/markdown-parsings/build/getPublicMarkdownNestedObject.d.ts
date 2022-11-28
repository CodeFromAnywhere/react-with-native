import { NestedObject } from "recursive-types";
/**
 * Recursively searches a folder for public markdown files, and returns a `NestedObject` with the keys being the file or folder names, and the leafs being the absolute file paths.
 *
 * File and folder names are stripped (number prefixes are removed, )
 *
 * example:
 * ```json
 * {
 *    "README": "path/path/README.md"
 *    "folder1":{
 *         "README": "path/path/folder1/REAMDE.md"
 *         "file1": "path/path/folder1/file1.md",
 *    }
 * }
 */
export declare const getPublicMarkdownNestedPathObject: (absoluteFolderPath: string) => Promise<NestedObject<string>>;
//# sourceMappingURL=getPublicMarkdownNestedObject.d.ts.map