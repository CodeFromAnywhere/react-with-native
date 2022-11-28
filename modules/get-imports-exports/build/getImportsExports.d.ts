#!/usr/bin/env node
import { SourceFile } from "ts-morph";
import { ImportsAndExports } from "./util";
/**
 * Uses ts-morph to get all exports inside all files in a project or an array of source files.
 * Doesn't use index, it actually looks in all files except index,
 * so some of them may not be exported from the package itself depending on your indexing strategy!
 **/
export declare const getImportsExports: ({ sourceFiles, debug, manualProjectRoot, }: {
    /**
     * if given, only these sourcefiles are used, otherwise takes all source files from project.
     */
    sourceFiles: SourceFile[];
    debug?: boolean | undefined;
    manualProjectRoot?: string | undefined;
}) => Promise<ImportsAndExports | undefined>;
//# sourceMappingURL=getImportsExports.d.ts.map