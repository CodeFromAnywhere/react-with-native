import { Path } from "fs-util";
import { CsvItemType } from "csv-util";
/**
 * Reads and parses CSV file
 *
 * specify a generic of what type of item the file contains an array of
 */
export declare const readCsvFile: <T extends CsvItemType>(filePath: Path | undefined) => Promise<T[] | null>;
/**
 * Reads and parses CSV file
 *
 * specify a generic of what type of item the file contains an array of
 */
export declare const readCsvFileSync: <T extends CsvItemType>(filePath: Path) => T[] | null;
export declare const test: (() => Promise<boolean>)[];
//# sourceMappingURL=readCsvFile.d.ts.map