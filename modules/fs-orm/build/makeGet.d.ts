import { DbGet, DefaultConfig } from "./types";
export declare const makeGet: <TModels extends {
    [key: string]: any;
}>(defaultConfig: DefaultConfig<TModels> | undefined) => DbGet<TModels>;
//# sourceMappingURL=makeGet.d.ts.map