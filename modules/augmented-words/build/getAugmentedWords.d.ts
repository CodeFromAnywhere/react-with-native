import { AugmentedWord } from "markdown-reader-types";
/**

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is a non-sensible-project, also bundles (`/[docs-path]`)

 */
export declare const getAugmentedWords: (manualProjectRoot?: string) => Promise<AugmentedWord[]>;
//# sourceMappingURL=getAugmentedWords.d.ts.map