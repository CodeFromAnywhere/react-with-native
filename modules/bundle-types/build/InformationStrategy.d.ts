/**
 * push (default): take needed information from project and push to bundle (removing the existing info)
 *
 * pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS
 *
 * pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs
 *
 * ignore: don't put any data in the bundle!
 *
 */
export declare type InformationStrategy = "ignore" | "push" | "pullReplace" | "pullMerge";
//# sourceMappingURL=InformationStrategy.d.ts.map