export declare type FrontmatterValue = string | number | boolean | string[] | null | undefined;
export declare const stringifyNewlines: (string: string) => string;
export declare const getFrontmatterValueString: (value: FrontmatterValue) => string | null;
/**
 * For now, simply quote a string if it contains commas
 *
 * There are probably more edgecases that need to be fixed here
 */
export declare const quotedOrNot: (string: string) => string;
//# sourceMappingURL=general.d.ts.map