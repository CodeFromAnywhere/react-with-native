import { MappedObject } from "js-util";
import { AugmentedWord } from "markdown-reader-types";
/**
 * NB: should only be executed if this is not a sensible-project, as it might not have `BundleConfig` otherwise
 */
export declare const getBundleAugmentedWords: () => Promise<AugmentedWord[]>;
/**

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is a non-sensible-project, also bundles (`/[docs-path]`)

 */
export declare const getAugmentedWords: (projectRoot: string) => Promise<AugmentedWord[]>;
export declare const getAugmentedWordObject: (projectRoot: string) => Promise<MappedObject<AugmentedWord>>;
//# sourceMappingURL=augmented-words.d.ts.map