import { SimplifiedSchema } from "code-types";
import { CsvItemType } from "read-csv-file";
/**
 * make csv string from a csv model type
 */
export declare const csvModelDataToString: <T extends CsvItemType>(csvModelData: T[], simplifiedSchema?: SimplifiedSchema) => string;
export declare const test: () => Promise<boolean>;
//# sourceMappingURL=csvModelDataToString.d.ts.map