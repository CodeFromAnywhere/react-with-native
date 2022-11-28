import { WebPage } from "webpage-types";
/**

 
Gets all pages of a bundle based on the fs and database

Pages it finds:

- operation-readmes
- multiple docs basePaths with all folders and markdown pages there in (`/[project-relative-path]`)
- `/dictionary`
- all markdown model types we have in the db-sdk, optionally, depending on config

Requirements:

- README should always be on top in a folder.
- numbers and extensions are omitted from paths, but still connected to the right file
- If the docs doesn't have a readme, the /docs/readme path shows the root readme.

Does not include AugmentedWord. Just the main pages, not with queries and hashes

Used to generate the menu
 */
export declare const getAllMarkdownReaderPages: (config?: {
    manualProjectRoot?: string;
}) => Promise<undefined | WebPage<any>[]>;
//# sourceMappingURL=getAllMarkdownReaderPages.d.ts.map