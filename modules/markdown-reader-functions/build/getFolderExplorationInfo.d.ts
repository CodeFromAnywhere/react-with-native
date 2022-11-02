import { NestedPathObject } from "nested-menu";
/**
    
    Gets exploration information about a folder
  
    - reads README.md in current folder
    - reads OPERATION.md in child folders, or README.md if that doesn't exist
    - gets an intro from those markdown files and returns that (uses `getMarkdownIntro`)
  
   */
export declare const getFolderExplorationInfo: (nestedPathObject: NestedPathObject, queryPath: string, projectRoot: string) => Promise<{
    title: string | undefined;
    description: string | null;
    children: {
        title: string;
        firstParagraph: string | null;
        folderName: string;
    }[];
}>;
//# sourceMappingURL=getFolderExplorationInfo.d.ts.map