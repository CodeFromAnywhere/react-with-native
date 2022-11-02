#!/usr/bin/env node
export declare type Casing = "camel" | "pascal" | "snake" | "kebab" | "capital" | "human";
export declare const getDelimiter: (target: Casing) => "_" | " " | "-" | "";
export declare const capitaliseFirstLetter: (word: string) => string;
/**
 *
 */
export declare const convertCase: (text: string, target: Casing) => string;
export declare const camelCase: (text: string) => string;
export declare const pascalCase: (text: string) => string;
export declare const snakeCase: (text: string) => string;
export declare const kebabCase: (text: string) => string;
export declare const capitalCase: (text: string) => string;
export declare const humanCase: (text: string) => string;
/**
 * converts any string to an array of lowercase words
 *
 * format ["word1","word2","word3"] from a string of any casing.
 */
export declare const lowerCaseArray: (text: string) => string[];
export declare const test: () => Promise<boolean>;
//# sourceMappingURL=general.d.ts.map