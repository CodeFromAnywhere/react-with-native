export declare type CsvItemType = {
    [key: string]: string | number | boolean | null | undefined;
};
/**
 * This function parses a CSV into the object it says it has in the header
 */
export declare const tryParseCsv: <T extends CsvItemType>(csvString: string) => T[] | null;
export declare const test: (() => Promise<boolean>)[];
//# sourceMappingURL=tryParseCsv.d.ts.map