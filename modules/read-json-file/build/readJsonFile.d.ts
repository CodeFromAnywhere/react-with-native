import { Path } from "fs-util";
/**
 * Reads and parses JSON file
 *
 * make sure to specify what type the file contains as a generic!
 */
export declare const readJsonFile: <T>(filePath: Path | undefined) => Promise<T | null>;
/**
 * Reads and parses JSON file
 *
 * make sure to specify what type the file contains as a generic!
 */
export declare const readJsonFileSync: <T>(filePath: Path) => T | null;
//# sourceMappingURL=readJsonFile.d.ts.map