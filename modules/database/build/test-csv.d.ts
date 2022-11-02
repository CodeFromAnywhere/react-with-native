import { TestModels } from "./test-db";
/**
  NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it
   */
export declare const testCsv: (modelName: keyof TestModels) => Promise<boolean>;
//# sourceMappingURL=test-csv.d.ts.map