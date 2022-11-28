export declare const todoPagesConfigRecencysConst: readonly ["24-hours", "today", "this-week", "7-days"];
export declare const todoPagesConfigRecencys: string[];
export declare type TodoPagesConfig = {
    recency?: typeof todoPagesConfigRecencysConst[number];
    /**
     * All TodoOffer's related to this todo will be searched, as well as all TodoFile's with this personId as it's codeOwner.
     */
    personId?: string;
    categoryStack?: string[];
    priority?: "high";
    subExtension?: string;
    sort?: "recent";
};
//# sourceMappingURL=TodoPagesConfig.d.ts.map