import { Db, DefaultConfig } from "./types";
/**
 * TODO:
 *
 * Think about if I should split it up completely or I should just keep it in this way
 *
 * These aren't tested yet and are probably not functional
 *
 * - jsonSingle
 * - markdown
 *
 * csv and keyValueMarkdown tested and working
 *
 * jsonMultiple: should have a test for it!
 *
 */
export declare const createDb: <TModels extends {
    [key: string]: any;
}>(defaultConfig?: DefaultConfig<TModels> | undefined) => Db<TModels>;
//# sourceMappingURL=createDb.d.ts.map