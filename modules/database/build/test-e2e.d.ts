import { AnyModelType, Creation } from "model-types";
import { TestModels } from "./test-db";
/**
  NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it
   */
export declare const runModelEndToEndTest: (modelName: keyof TestModels, generateInstance: () => Creation<AnyModelType>) => Promise<boolean>;
//# sourceMappingURL=test-e2e.d.ts.map